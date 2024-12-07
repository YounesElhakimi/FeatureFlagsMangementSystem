import React, { useState, useEffect } from 'react';
import { Switch } from './ui/Switch';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { FeatureFlag, Environment } from '../types';
import CreateFlagDialog from './CreateFlagDialog';
import { getStorageData, addFeatureFlag, updateFeatureFlag, deleteFeatureFlag, getEnvironments } from '../lib/storage';

const FeatureList = () => {
  const [features, setFeatures] = useState<FeatureFlag[]>([]);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  useEffect(() => {
    const data = getStorageData();
    setFeatures(data.features);
    setEnvironments(data.environments);
  }, []);

  const handleToggle = (id: string, enabled: boolean) => {
    const updated = updateFeatureFlag(id, { enabled });
    if (updated) {
      setFeatures(features.map(f => f.id === id ? updated : f));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feature flag?')) {
      deleteFeatureFlag(id);
      setFeatures(features.filter(f => f.id !== id));
    }
  };

  const handleCreateFlag = (flag: Omit<FeatureFlag, 'id' | 'createdAt'>) => {
    const newFlag = addFeatureFlag(flag);
    setFeatures([...features, newFlag]);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Feature Flags</h2>
            <button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Create Flag
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Description</th>
                  <th className="text-left py-3 px-4">Environment</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.id} className="border-b border-gray-200">
                    <td className="py-4 px-4">{feature.name}</td>
                    <td className="py-4 px-4">{feature.description}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {feature.environment}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Switch
                        checked={feature.enabled}
                        onChange={(checked) => handleToggle(feature.id, checked)}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleDelete(feature.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CreateFlagDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSubmit={handleCreateFlag}
        environments={environments}
      />
    </>
  );
};

export default FeatureList;