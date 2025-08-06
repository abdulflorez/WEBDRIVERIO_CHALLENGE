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

Absolutely! Here’s your **Reporting** section in clear, professional English, ready for your README:

---

## 📊 Reporting

This framework provides robust test reporting with **three complementary reporters**:

1. **Spec Reporter**
    - The classic, fast reporter: displays readable, color-coded results directly in the console/terminal during test execution.
    - Lets you quickly spot passing and failing tests without opening extra files.
    - Configured as default—results will always appear in your terminal output.

2. **HTML Nice Report**
    - Generates a **clean, visual HTML report** that is easy to share with your team or stakeholders.
    - The main report is saved under `/reports/html-reports/`.
    - To open the HTML report in your browser, simply run:

        ```bash
        npm run nicereport:open
        ```

        This opens the master report (`master-report.html`) for easy review.

    - Useful for sharing test outcomes with non-technical team members.

3. **Allure Report**
    - Produces an **interactive and comprehensive HTML report** (with history, screenshots, attachments, and advanced filtering) from `/allure/allure-results/`.
    - To generate and view the Allure report, run:

        ```bash
        npm run allure:generate
        npm run allure:open
        ```

    - Ideal for deep analysis, debugging, and tracking test execution history in CI/CD pipelines.

---
