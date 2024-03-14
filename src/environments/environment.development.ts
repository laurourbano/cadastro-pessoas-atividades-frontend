export const environment = {
  production: false,
  appConfig: {
    providers: [
      {
        provide: 'API_URL',
        useValue: 'http://localhost:3001',
      },
    ],
    API_URL: 'http://localhost:3001/api',
  },
};
