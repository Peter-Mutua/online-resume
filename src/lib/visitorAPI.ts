// Enhanced visitor tracking API service with battery optimization
interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  lastVisit: string;
}

class VisitorAPI {
  private static readonly API_BASE = 'https://api.countapi.xyz';
  private static readonly SITE_KEY = 'petermutua-portfolio-v3';
  private static readonly BACKUP_STORAGE = 'portfolio_visitor_backup_v3';
  private static readonly SYNC_CHANNEL = 'portfolio_visitor_sync_v3';
  private static sessionId: string;
  private static syncInterval: NodeJS.Timeout | null = null;
  private static broadcastChannel: BroadcastChannel | null = null;
  private static isVisible = true;

  static {
    this.sessionId = this.generateSessionId();
    this.initializeBroadcastChannel();
    this.setupVisibilityHandling();
  }

  private static generateSessionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    const platform = this.getPlatformInfo();
    return `${timestamp}-${random}-${platform}`;
  }

  private static getPlatformInfo(): string {
    const ua = navigator.userAgent;
    if (/Mobile|Android|iPhone|iPad/.test(ua)) return 'mobile';
    if (/Tablet/.test(ua)) return 'tablet';
    return 'desktop';
  }

  private static setupVisibilityHandling(): void {
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
    });
  }

  private static initializeBroadcastChannel(): void {
    try {
      this.broadcastChannel = new BroadcastChannel(this.SYNC_CHANNEL);
      this.broadcastChannel.onmessage = (event) => {
        if (event.data.type === 'visitor_update') {
          window.dispatchEvent(new CustomEvent('visitorStatsUpdated', { 
            detail: event.data.stats 
          }));
        }
      };
    } catch (error) {
      console.warn('BroadcastChannel not supported, using localStorage fallback');
    }
  }

  private static broadcastUpdate(type: string, data: any): void {
    try {
      if (this.broadcastChannel) {
        this.broadcastChannel.postMessage({ type, ...data });
      }
      window.dispatchEvent(new StorageEvent('storage', {
        key: `${this.SYNC_CHANNEL}_${type}`,
        newValue: JSON.stringify(data),
        storageArea: localStorage
      }));
    } catch (error) {
      console.warn('Failed to broadcast update:', error);
    }
  }

  private static async fallbackToLocalStorage(): Promise<VisitorStats> {
    const today = new Date().toDateString();
    const backup = JSON.parse(localStorage.getItem(this.BACKUP_STORAGE) || '{}');
    
    if (backup.date !== today) {
      backup.todayVisitors = 0;
      backup.date = today;
    }

    const sessionKey = `session_${this.sessionId}`;
    if (!sessionStorage.getItem(sessionKey)) {
      backup.totalVisitors = (backup.totalVisitors || 0) + 1;
      backup.todayVisitors = (backup.todayVisitors || 0) + 1;
      backup.lastVisit = new Date().toISOString();
      sessionStorage.setItem(sessionKey, 'true');
      localStorage.setItem(this.BACKUP_STORAGE, JSON.stringify(backup));
      
      console.log('📊 New visitor registered (fallback):', {
        total: backup.totalVisitors,
        today: backup.todayVisitors,
        sessionId: this.sessionId,
        platform: this.getPlatformInfo()
      });
    }

    const stats = {
      totalVisitors: backup.totalVisitors || 1,
      todayVisitors: backup.todayVisitors || 1,
      lastVisit: backup.lastVisit || new Date().toISOString()
    };

    this.broadcastUpdate('visitor_update', { stats });
    return stats;
  }

  static async trackVisitor(): Promise<VisitorStats> {
    try {
      const today = new Date().toDateString().replace(/\s+/g, '-');
      const totalKey = `${this.SITE_KEY}-total`;
      const todayKey = `${this.SITE_KEY}-today-${today}`;
      
      const [totalResponse, todayResponse] = await Promise.all([
        fetch(`${this.API_BASE}/hit/${totalKey}`),
        fetch(`${this.API_BASE}/hit/${todayKey}`)
      ]);

      if (totalResponse.ok && todayResponse.ok) {
        const totalData = await totalResponse.json();
        const todayData = await todayResponse.json();

        const stats = {
          totalVisitors: totalData.value,
          todayVisitors: todayData.value,
          lastVisit: new Date().toISOString()
        };

        localStorage.setItem(this.BACKUP_STORAGE, JSON.stringify({
          ...stats,
          date: today
        }));

        this.startOptimizedSync();

        console.log('📊 Visitor tracked via API:', {
          total: stats.totalVisitors,
          today: stats.todayVisitors,
          sessionId: this.sessionId,
          platform: this.getPlatformInfo()
        });

        this.broadcastUpdate('visitor_update', { stats });
        return stats;
      } else {
        throw new Error('API unavailable');
      }
    } catch (error) {
      console.warn('📊 Using fallback visitor tracking:', error);
      return this.fallbackToLocalStorage();
    }
  }

  static async getStats(): Promise<VisitorStats> {
    try {
      const today = new Date().toDateString().replace(/\s+/g, '-');
      const totalKey = `${this.SITE_KEY}-total`;
      const todayKey = `${this.SITE_KEY}-today-${today}`;
      
      const [totalResponse, todayResponse] = await Promise.all([
        fetch(`${this.API_BASE}/get/${totalKey}`),
        fetch(`${this.API_BASE}/get/${todayKey}`)
      ]);

      if (totalResponse.ok && todayResponse.ok) {
        const totalData = await totalResponse.json();
        const todayData = await todayResponse.json();

        const stats = {
          totalVisitors: totalData.value || 0,
          todayVisitors: todayData.value || 0,
          lastVisit: new Date().toISOString()
        };

        this.broadcastUpdate('visitor_update', { stats });
        return stats;
      } else {
        throw new Error('API unavailable');
      }
    } catch (error) {
      const backup = JSON.parse(localStorage.getItem(this.BACKUP_STORAGE) || '{}');
      
      const stats = {
        totalVisitors: backup.totalVisitors || 0,
        todayVisitors: backup.todayVisitors || 0,
        lastVisit: backup.lastVisit || new Date().toISOString()
      };

      this.broadcastUpdate('visitor_update', { stats });
      return stats;
    }
  }

  private static startOptimizedSync() {
    if (this.syncInterval) return;

    this.syncInterval = setInterval(async () => {
      if (this.isVisible) {
        try {
          const stats = await this.getStats();
          this.broadcastUpdate('visitor_update', { stats });
        } catch (error) {
          console.warn('Failed to sync stats:', error);
        }
      }
    }, 60000); // Sync every minute only when visible
  }

  static stopTracking() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }

    if (this.broadcastChannel) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }
  }

  static async exportData(): Promise<void> {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      throw new Error('Admin authentication required');
    }

    try {
      const stats = await this.getStats();
      const backup = JSON.parse(localStorage.getItem(this.BACKUP_STORAGE) || '{}');
      
      const exportData = {
        summary: stats,
        backup: backup,
        sessionId: this.sessionId,
        platform: this.getPlatformInfo(),
        exportedAt: new Date().toISOString(),
        exportedBy: 'Admin'
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], { 
        type: 'application/json' 
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `visitor-analytics-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      throw new Error('Failed to export visitor data');
    }
  }

  static async resetStats(): Promise<void> {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      throw new Error('Admin authentication required');
    }

    try {
      localStorage.removeItem(this.BACKUP_STORAGE);
      sessionStorage.clear();
      
      window.dispatchEvent(new CustomEvent('visitorStatsReset'));
      this.broadcastUpdate('visitor_update', { 
        stats: { totalVisitors: 0, todayVisitors: 0, lastVisit: new Date().toISOString() }
      });
    } catch (error) {
      throw new Error('Failed to reset visitor stats');
    }
  }
}

export default VisitorAPI;