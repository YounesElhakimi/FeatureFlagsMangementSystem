import React from 'react';
import { BarChart, Users, Flag, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Flags', value: '12', icon: Flag, color: 'bg-blue-500' },
    { title: 'Active Flags', value: '8', icon: Activity, color: 'bg-green-500' },
    { title: 'Team Members', value: '5', icon: Users, color: 'bg-purple-500' },
    { title: 'Total Events', value: '1.2k', icon: BarChart, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your feature flags dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600">
                  Flag "New UI" was {i % 2 === 0 ? 'enabled' : 'disabled'} in Production
                </p>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Environment Status</h2>
          <div className="space-y-4">
            {['Production', 'Staging', 'Development'].map((env) => (
              <div key={env} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium">{env}</p>
                </div>
                <span className="text-xs text-gray-500">4 flags active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;