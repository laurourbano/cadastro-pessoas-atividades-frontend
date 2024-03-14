export const environment = {
  production: true,
  appConfig: {
    providers: [
      {
        provide: 'API_URL',
        useValue: 'http://localhost:3001',
      }
    ],
    API_URL: 'http://localhost:3001/api',
  },
};
