import { LucideIcon } from 'lucide-react';

export interface Department {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Document {
  title: string;
  year: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}