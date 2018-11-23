type Config = {
  env?: string;
  apiUrl?: string;
}

const config: {
  [key: string]: Config;
} = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'http://localhost:3000',
  },
  production: {
    apiUrl: 'https://api.henesys.net',
  },
}

export default { ...config.all, ...(config.all.env ? config[config.all.env] : {}) }
