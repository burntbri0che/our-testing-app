// App configuration utilities
export const getAppMode = (): string => {
  return (import.meta.env.VITE_APP_MODE as string) || 'production';
};

export const getAppTitle = (): string => {
  return (import.meta.env.VITE_APP_TITLE as string) || 'Our Testing App';
};

export const getApiBaseUrl = (): string => {
  return (import.meta.env.VITE_API_BASE_URL as string) || '';
};

export const isDevelopment = (): boolean => {
  return getAppMode() === 'development';
};

export const isTest = (): boolean => {
  return getAppMode() === 'test';
};

export const isProduction = (): boolean => {
  return getAppMode() === 'production';
};
