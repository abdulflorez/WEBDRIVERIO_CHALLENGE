# Test Automation Framework for PracticeSoftwareTesting.com

This repository implements a test automation framework built with:

- **WebdriverIO** for end-to-end browser automation
- **Cucumber** (BDD) for Gherkin-style scenarios
- **TypeScript** for type safety and maintainability
- **Page Object Model** (POM) for organizing page interactions
- **Chai-HTTP** for REST API assertions alongside UI tests
- **GitHub Action Workflow** for CI/CD manual executions

---

## Project Structure

Project files under `src/` use **snake_case** naming (underscores instead of camelCase):

```text
src/
  env_config/                 # Environment-specific settings
    env.config.ts             # Multi-env config via NODE_ENV
  features/                   # Gherkin feature files (*.feature)
    authentication.feature    # Scenarios for sign up & sign in
    ...                       # Other feature files (profile, cart, etc.)
  operations/                 # Business-logic helpers
    base.operations.ts        # Foundational operations
    auth.operations.ts        # Login/registration flows
    ...                       # Other operations (checkout, favorites)
  page_objects/               # POM classes (page models)
    base.page.ts              # Common page methods
    login.page.ts             # Login page selectors & actions
    ...                       # Other pages (HomePage, ProductPage)
  step_definitions/           # Cucumber step definitions (*.ts)
    given.ts                  # Given steps
    when.ts                   # When steps
    then.ts                   # Then steps
  types/                      # Shared TypeScript types
    enums/                    # Enumerations
    interfaces/               # Interfaces
    types/                    # Unions and literal types
      environments.type.ts    # Environment name union
```

**Naming convention:** All files/folders use **snake_case** for consistency.

---

## Environment Configuration

Manage base URLs and timeouts per environment (`dev`, `staging`, `prod`) via **env.config.ts** and `NODE_ENV`:

---

## Main Commands

Install dependencies:

```bash
npm install
```

**Run all tests** (defaults to `dev` environment):

```bash
npm run test
```

**Filter by Cucumber tag** (e.g. `smoke`):

```bash
npm run test:only -- --cucumberOpts.tagExpression="@only"
```

**Generate & open Allure report**:

```bash
npm run allure:generate
npm run allure:open
```

---

Now you have UI + API E2E tests in a structured, type-safe framework—ready to extend and maintain with clear, reusable patterns!
