import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Users, 
  FolderOpen, 
  Award, 
  TrendingUp, 
  Eye,
  Trash2,
  Download,
  Upload,
  Plus,
  LogOut
} from 'lucide-react';
import { toast } from 'react-toastify';

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface Stats {
  totalContacts: number;
  unreadContacts: number;
  totalProjects: number;
  totalCertificates: number;
  recentContacts: Contact[];
}

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchStats();
    fetchContacts();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setStats(data);
    } catch (error) {
      toast.error('Failed to fetch stats');
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to fetch contacts');
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      await fetch(`/api/admin/contacts/${id}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setContacts(contacts.map(c => c.id === id ? { ...c, read: true } : c));
      toast.success('Contact marked as read');
    } catch (error) {
      toast.error('Failed to mark as read');
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setContacts(contacts.filter(c => c.id !== id));
      toast.success('Contact deleted');
    } catch (error) {
      toast.error('Failed to delete contact');
    }
  };

  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-full`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Admin</h1>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'contacts', label: 'Contacts', icon: Mail },
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'certificates', label: 'Certificates', icon: Award }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && stats && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Mail}
                title="Total Contacts"
                value={stats.totalContacts}
                color="bg-blue-500"
              />
              <StatCard
                icon={Users}
                title="Unread Messages"
                value={stats.unreadContacts}
                color="bg-red-500"
              />
              <StatCard
                icon={FolderOpen}
                title="Projects"
                value={stats.totalProjects}
                color="bg-green-500"
              />
              <StatCard
                icon={Award}
                title="Certificates"
                value={stats.totalCertificates}
                color="bg-purple-500"
              />
            </div>

            {/* Recent Contacts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Contacts</h3>
              <div className="space-y-4">
                {stats.recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`p-4 rounded-lg border ${
                      contact.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{contact.name}</h4>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm text-gray-800 mt-1">{contact.subject}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Contact Messages</h3>
            </div>
            <div className="divide-y">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-6 ${contact.read ? 'bg-white' : 'bg-blue-50'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{contact.name}</h4>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                      <p className="text-sm text-gray-800 font-medium mt-1">{contact.subject}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {new Date(contact.createdAt).toLocaleString()}
                      </span>
                      {!contact.read && (
                        <button
                          onClick={() => markAsRead(contact.id)}
                          className="p-1 text-blue-600 hover:text-blue-800"
                          title="Mark as read"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="p-1 text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{contact.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Projects Management</h3>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5 mr-2" />
                Add Project
              </button>
            </div>
            <p className="text-gray-600">Project management functionality will be implemented here.</p>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Certificates Management</h3>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Upload className="w-5 h-5 mr-2" />
                Upload Certificate
              </button>
            </div>
            <p className="text-gray-600">Certificate management functionality will be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;