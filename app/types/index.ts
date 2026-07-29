export enum ProjectCategory {
  CUSTOM_FURNITURE = 'custom_furniture',
  COMMERCIAL = 'commercial',
  RESTORATION = 'restoration',
  SPECIAL_PROJECTS = 'special_projects'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  clientName?: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
}