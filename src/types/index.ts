export interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  environment: string;
  createdAt: Date;
}

export interface Environment {
  id: string;
  name: string;
  key: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  environments: Environment[];
}