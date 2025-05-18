# Test Automation Framework for PracticeSoftwareTesting.com

This repository contains a test automation framework based on **WebdriverIO** + **Cucumber (BDD)** + **TypeScript**, organized with the **Page Object** pattern and an **operations** layer to enhance maintainability and readability.

---

## Project Structure

Your `src/` directory is organized as follows (using **snake_case** naming with underscores for file and folder names):

```text
src/
  env_config/                 # Environment configuration
    env.config.ts             # env_config.ts for multi‑env settings
  features/                   # Gherkin feature files (*.feature)
    authentication.feature    # e.g.: registration and login
    ...                       # Other domain features (profile, cart, search, etc.)
  operations/                 # Business logic (reusable flows)
    base.operations.ts        # Core operation helpers
    home.operations.ts        # Example: homepage flows
    ...                       # Other operations (checkout, favorites)
  page_objects/               # Page Object classes (page models)
    base.page.ts              # Shared navigation and helpers
    home.page.ts              # Main page selectors and actions
    ...                       # Other page objects (LoginPage, ProductPage, etc.)
  step_definitions/           # Step definition files (*.ts)
    given.ts                  # Given steps
    when.ts                   # When steps
    then.ts                   # Then steps
  types/                      # Shared TypeScript types
    enums/                    # Enumerated constants
    interfaces/               # Shared interfaces
    types/                    # Literal and union types
      environments.type.ts    # Environment name union type
```

**Naming Convention**: We use **snake_case** for all file and folder names (e.g., `base.page.ts`, `home.operations.ts`) instead of camelCase or kebab-case. This ensures consistency across the codebase.

---

## Environment-specific Configuration

We've added an environment config file to manage different base URLs, timeouts, and other settings per environment (e.g., development, staging, production).

### env.config.ts

```ts
// env.config.ts
import dotenv from 'dotenv';
dotenv.config();

// Import the Environment type from your shared types folder
import { Environment } from './types/types/environments.type';

// Default timeouts for all environments
const TIMEOUTS_BY_DEFAULT = {
    low: 5000,
    mid: 10000,
    high: 15000,
};

export interface EnvConfig {
    baseUrl: string;
    timeouts: typeof TIMEOUTS_BY_DEFAULT;
}

// Map each environment to its specific configuration
const configs: Record<Environment, EnvConfig> = {
    dev: {
        baseUrl: process.env.BASE_URL || 'https://dev.practicesoftwaretesting.com',
        timeouts: TIMEOUTS_BY_DEFAULT,
    },
    staging: {
        baseUrl: process.env.BASE_URL || 'https://staging.practicesoftwaretesting.com',
        timeouts: TIMEOUTS_BY_DEFAULT,
    },
    prod: {
        baseUrl: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
        timeouts: TIMEOUTS_BY_DEFAULT,
    },
};

// Read environment from NODE_ENV and cast to our shared type (fallback to 'prod')
const env = (process.env.NODE_ENV as Environment) || 'prod';

// Export the configuration for the current environment
export const envConfig: EnvConfig = configs[env];
```

import dotenv from 'dotenv';
dotenv.config();

// Define the allowed environment names
type Environment = 'dev' | 'staging' | 'prod';

// Default timeouts for all environments
const TIMEOUTS_BY_DEFAULT = {
low: 5000,
mid: 10000,
high: 15000,
};

export interface EnvConfig {
baseUrl: string;
timeouts: typeof TIMEOUTS_BY_DEFAULT;
}

// Map each environment to its specific configuration
const configs: Record\<Environment, EnvConfig> = {
dev: {
baseUrl: process.env.BASE_URL || '[https://dev.practicesoftwaretesting.com](https://dev.practicesoftwaretesting.com)',
timeouts: TIMEOUTS_BY_DEFAULT,
},
staging: {
baseUrl: process.env.BASE_URL || '[https://staging.practicesoftwaretesting.com](https://staging.practicesoftwaretesting.com)',
timeouts: TIMEOUTS_BY_DEFAULT,
},
prod: {
baseUrl: process.env.BASE_URL || '[https://practicesoftwaretesting.com](https://practicesoftwaretesting.com)',
timeouts: TIMEOUTS_BY_DEFAULT,
},
};

// Read environment from NODE_ENV and cast to our type (fallback to 'prod')
const env = (process.env.NODE_ENV as Environment) || 'prod';

// Export the configuration for the current environment
export const envConfig: EnvConfig = configs\[env];

```

### Integration in wdio.conf.ts
```

### Integration in wdio.conf.ts

Import and apply the environment-specific values:

```ts
import { envConfig } from './env.config';

export const config: Options.Testrunner = {
    // …
    baseUrl: envConfig.baseUrl,
    waitforTimeout: envConfig.timeouts.implicit,
    connectionRetryTimeout: envConfig.timeouts.pageLoad,
    framework: 'cucumber',
    cucumberOpts: {
        timeout: envConfig.timeouts.step,
        requireModule: ['ts-node/register'],
        require: ['src/step_definitions/**/*.ts'],
    },
    // Hook example using script timeout
    beforeCommand: async () => {
        await browser.setTimeout({ script: envConfig.timeouts.script });
    },
    // …
};
```

---

## Main Commands

Before running tests, install dependencies:

```bash
npm install
```

- **Run the full test suite**

    Execute all scenarios in Chrome and Firefox (headless), with automatic retries:

    ```bash
    # Development (default)
    npm run test
    ```

With this structure and commands, you can start adding new tests, extending Page Objects or operations, and maintain style consistency across the repository.
