import { EnvConfig } from '../types/interfaces/env_config.interface';

const TIMEOUTS_BY_DEFAULT = {
    low: 5000,
    mid: 10000,
    high: 15000,
};

// Define environment configurations
const configs: Record<Environment, EnvConfig> = {
    dev: {
        baseUrl: 'https://dev.practicesoftwaretesting.com',
        timeouts: { ...TIMEOUTS_BY_DEFAULT, mid: 12000, high: 20000 },
    },
    staging: {
        baseUrl: 'https://staging.practicesoftwaretesting.com',
        timeouts: { ...TIMEOUTS_BY_DEFAULT, high: 20000 },
    },
    prod: {
        baseUrl: 'https://practicesoftwaretesting.com',
        timeouts: TIMEOUTS_BY_DEFAULT,
    },
};

// Determine environment from NODE_ENV or default to development
const env = (process.env.NODE_ENV as Environment) || 'prod';

// Fallback to development if NODE_ENV is unknown
export const envConfig = configs[env] || configs.prod;
