import React from 'react';
import { Bell, Shield, Database, Globe } from 'lucide-react';

const Settings = () => {
  const sections = [
    {
      title: 'General',
      icon: Globe,
      settings: [
        { name: 'Project Name', value: 'FeatureFlags' },
        { name: 'Default Environment', value: 'Production' },
      ],
    },
    {
      title: 'Security',
      icon: Shield,
      settings: [
        { name: 'Two-Factor Authentication', value: 'Enabled' },
        { name: 'API Key', value: '****-****-****-****' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { name: 'Email Notifications', value: 'Enabled' },
        { name: 'Slack Integration', value: 'Disabled' },
      ],
    },
    {
      title: 'Data Management',
      icon: Database,
      settings: [
        { name: 'Data Retention', value: '90 days' },
        { name: 'Backup Frequency', value: 'Daily' },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your application settings</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Icon className="w-5 h-5 text-gray-500" />
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.settings.map((setting) => (
                    <div
                      key={setting.name}
                      className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{setting.name}</p>
                        <p className="text-sm text-gray-500">{setting.value}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;