import * as fs from 'fs';
import * as path from 'path';
import { addAttachment } from '@wdio/allure-reporter';

const allure = require('allure-commandline');
const browserName = process.env.BROWSER ?? 'chrome';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: ['./src/features/**/*.feature'],
    // Patterns to exclude.
    exclude: [],
    maxInstances: 3,
    capabilities: [
        {
            browserName: browserName,
        },
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // baseUrl: 'http://localhost:8080',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 12000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'cucumber',
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 2,
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    reporters: [
        [
            'spec',
            {
                color: true,
                symbols: {
                    passed: '[PASS]',
                    failed: '[FAIL]',
                },
            },
        ],
        ['allure', { outputDir: 'allure/allure-results', disableWebdriverStepsReporting: true, disableWebdriverScreenshotsReporting: true, disableMochaHooks: true }],
        [
            'html-nice',
            {
                outputDir: './reports/html-reports/',
                filename: 'report.html',
                reportTitle: 'Test Report Title',
                linkScreenshots: true,
                showInBrowser: true,
                collapseTests: false,
                useOnAfterCommandForScreenshot: false,
            },
        ],
    ],
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./src/step_definitions/given.ts', './src/step_definitions/when.ts', './src/step_definitions/then.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    /**
     * Gets executed once before all workers get launched.
     * @param {object} _config wdio configuration object
     * @param {Array.<Object>} _capabilities list of capabilities details
     */
    onPrepare: function (_config, _capabilities) {
        const resultsDir = path.join(process.cwd(), 'allure', 'allure-results');
        const reportDir = path.join(process.cwd(), 'allure', 'allure-report');
        if (fs.existsSync(resultsDir)) {
            fs.rmSync(resultsDir, { recursive: true, force: true });
            console.log('🧹 [onPrepare] Old Allure results cleaned.');
        }
        if (fs.existsSync(reportDir)) {
            fs.rmSync(reportDir, { recursive: true, force: true });
            console.log('🧹 [onPrepare] Old Allure report cleaned.');
        }
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    before: function () {
        require('./src/utils/chai.ts');
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {object}                 context  Cucumber World object
     */
    // beforeScenario: function (world, context) {
    // },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {object}             context  Cucumber World object
     */
    // beforeStep: function (step, scenario, context) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {object}             context          Cucumber World object
     */
    // afterStep: async function (_step, _scenario, result: { passed: boolean; error: string; duration: number }, _context) {},
    /**
     *
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {object}                 result           results object containing scenario results
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {object}                 context          Cucumber World object
     */
    afterScenario: async function (_world, result: { passed: boolean; error: string; duration: number }, _context) {
        if (result.error) {
            const base64png = await browser.takeScreenshot();
            const imgBuffer = Buffer.from(base64png, 'base64');
            addAttachment('Screenshot on Failure', imgBuffer, 'image/png');
            const shotsDir = path.join(process.cwd(), 'screenshots');
            if (!fs.existsSync(shotsDir)) {
                fs.mkdirSync(shotsDir);
            }
            const filename = `ERROR_${Date.now()}.png`;
            const filepath = path.join(shotsDir, filename);
            await browser.saveScreenshot(filepath);
        }
    },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {object} _exitCode 0 - success, 1 - fail
     * @param {object} _config wdio configuration object
     * @param {Array.<Object>} _capabilities list of capabilities details
     * @param {<Object>} _results object containing test results
     */
    onComplete: function (_exitCode, _config, _capabilities, _results) {
        // Allure report
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure/allure-results', '-o', 'allure/allure-report', '--clean']);
        return new Promise<void>((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000);
            generation.on('exit', function (exitCode: number) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) return reject(reportError);
                console.log('Allure report successfully generated');
                resolve();
            });
        });
    },
    /**
     * Gets executed when a refresh happens.
     * @param {string} oldSessionId session ID of the old session
     * @param {string} newSessionId session ID of the new session
     */
    // onReload: function(oldSessionId, newSessionId) {
    // }
    /**
     * Hook that gets executed before a WebdriverIO assertion happens.
     * @param {object} params information about the assertion to be executed
     */
    // beforeAssertion: function(params) {
    // }
    /**
     * Hook that gets executed after a WebdriverIO assertion happened.
     * @param {object} params information about the assertion that was executed, including its results
     */
    // afterAssertion: function(params) {
    // }
};
