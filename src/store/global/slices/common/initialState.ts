import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { SyncAwarenessState } from '@/types/sync';

export enum SidebarTabKey {
  Chat = 'chat',
  Market = 'market',
  Setting = 'settings',
}

export enum SettingsTabs {
  About = 'about',
  Agent = 'agent',
  Common = 'common',
  LLM = 'llm',
  TTS = 'tts',
}

export interface Guide {
  // Topic 引导
  topic?: boolean;
}

export interface GlobalCommonState {
  hasNewVersion?: boolean;
  isMobile?: boolean;
  latestVersion?: string;
  router?: AppRouterInstance;
  sidebarKey: SidebarTabKey;
  syncAwareness: SyncAwarenessState[];
  syncEnabled: boolean;
  syncStatus?: 'syncing' | 'synced' | 'hold';
}

export const initialCommonState: GlobalCommonState = {
  isMobile: false,
  sidebarKey: SidebarTabKey.Chat,
  syncAwareness: [],
  syncEnabled: false,
};