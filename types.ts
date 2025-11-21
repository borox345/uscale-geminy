export interface AuditRequest {
  industry: string;
  revenueRange: string;
  primaryChallenge: string;
}

export interface AuditResponse {
  summary: string;
  strategies: {
    title: string;
    description: string;
    impact: 'High' | 'Medium' | 'Low';
  }[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface NavItem {
  label: string;
  href: string;
}