type Config = {
  env?: string;
  apiUrl?: string;
  admobEnabled?: boolean;
}

const config: {
  [key: string]: Config;
} = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'http://localhost:3000',
    admobEnabled: false,
  },
  production: {
    apiUrl: 'https://api.henesys.net',
  },
}

export default { ...config.all, ...(config.all.env ? config[config.all.env] : {}) }
