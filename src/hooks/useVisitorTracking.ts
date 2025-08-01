import { useState, useEffect } from 'react';
import VisitorAPI from '../lib/visitorAPI';

interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  lastVisit: string;
}

export const useVisitorTracking = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    todayVisitors: 0,
    lastVisit: new Date().toISOString()
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let updateInterval: NodeJS.Timeout;

    const initializeTracking = async () => {
      try {
        const initialStats = await VisitorAPI.trackVisitor();
        if (mounted) {
          setStats(initialStats);
          setIsLoading(false);
        }

        updateInterval = setInterval(async () => {
          try {
            if (!document.hidden) {
              const currentStats = await VisitorAPI.getStats();
              if (mounted) {
                setStats(prevStats => {
                  if (
                    prevStats.totalVisitors !== currentStats.totalVisitors ||
                    prevStats.todayVisitors !== currentStats.todayVisitors
                  ) {
                    console.log('📊 Stats updated:', {
                      total: currentStats.totalVisitors,
                      today: currentStats.todayVisitors,
                      timestamp: new Date().toLocaleTimeString()
                    });
                    return currentStats;
                  }
                  return prevStats;
                });
              }
            }
          } catch (error) {
            console.warn('Failed to update visitor stats:', error);
          }
        }, 60000); // Update every minute for battery optimization

      } catch (error) {
        console.error('Failed to initialize visitor tracking:', error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeTracking();

    const handleReset = () => {
      setStats({
        totalVisitors: 0,
        todayVisitors: 0,
        lastVisit: new Date().toISOString()
      });
    };

    const handleVisitorStatsUpdate = (event: CustomEvent) => {
      if (mounted && event.detail) {
        setStats(event.detail);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && mounted) {
        VisitorAPI.getStats().then(currentStats => {
          setStats(currentStats);
        });
      }
    };

    const handleFocus = () => {
      if (mounted) {
        VisitorAPI.getStats().then(currentStats => {
          setStats(currentStats);
        });
      }
    };

    window.addEventListener('visitorStatsReset', handleReset);
    window.addEventListener('visitorStatsUpdated', handleVisitorStatsUpdate as EventListener);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      mounted = false;
      if (updateInterval) {
        clearInterval(updateInterval);
      }
      window.removeEventListener('visitorStatsReset', handleReset);
      window.removeEventListener('visitorStatsUpdated', handleVisitorStatsUpdate as EventListener);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      VisitorAPI.stopTracking();
    };
  }, []);

  const exportData = async () => {
    try {
      await VisitorAPI.exportData();
    } catch (error) {
      throw error;
    }
  };

  const resetStats = async () => {
    try {
      await VisitorAPI.resetStats();
    } catch (error) {
      throw error;
    }
  };

  const isAdmin = () => {
    return !!localStorage.getItem('adminToken');
  };

  return {
    ...stats,
    isLoading,
    exportData,
    resetStats,
    isAdmin: isAdmin()
  };
};