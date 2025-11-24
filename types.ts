import React from 'react';

export interface AppDefinition {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  component: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Photo {
  id: number;
  url: string;
}