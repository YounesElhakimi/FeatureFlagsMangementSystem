const STORAGE_KEY = 'feature_flags_data';

interface StorageData {
  features: FeatureFlag[];
  environments: Environment[];
}

export const getStorageData = (): StorageData => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    const initialData: StorageData = {
      features: [
        {
          id: '1',
          name: 'Dark Mode',
          description: 'Enable dark mode across the application',
          enabled: true,
          environment: 'production',
          createdAt: new Date(),
        },
        {
          id: '2',
          name: 'Beta Features',
          description: 'Access to beta features for testing',
          enabled: false,
          environment: 'staging',
          createdAt: new Date(),
        },
      ],
      environments: [
        { id: '1', name: 'Production', key: 'production' },
        { id: '2', name: 'Staging', key: 'staging' },
        { id: '3', name: 'Development', key: 'development' },
      ],
    };
    setStorageData(initialData);
    return initialData;
  }
  return JSON.parse(data, (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });
};

export const setStorageData = (data: StorageData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addFeatureFlag = (feature: Omit<FeatureFlag, 'id' | 'createdAt'>) => {
  const data = getStorageData();
  const newFeature: FeatureFlag = {
    ...feature,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  };
  data.features.push(newFeature);
  setStorageData(data);
  return newFeature;
};

export const updateFeatureFlag = (id: string, updates: Partial<FeatureFlag>) => {
  const data = getStorageData();
  const index = data.features.findIndex(f => f.id === id);
  if (index !== -1) {
    data.features[index] = { ...data.features[index], ...updates };
    setStorageData(data);
    return data.features[index];
  }
  return null;
};

export const deleteFeatureFlag = (id: string) => {
  const data = getStorageData();
  data.features = data.features.filter(f => f.id !== id);
  setStorageData(data);
};

export const getEnvironments = (): Environment[] => {
  return getStorageData().environments;
};