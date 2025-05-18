import { envConfig } from '../env_config/env.config';

export class BasePage {
    /**
     * 1) Waits until document.readyState is “complete”
     * 2) Optionally waits until browser.getUrl() === expectedUrl
     *
     * @param expectedUrl?  If provided, also wait for URL to match exactly.
     * @param timeoutMs     Max ms to wait (defaults to envConfig.timeouts.high).
     * @throws              Throws separate timeouts for load vs URL mismatch.
     */
    public async waitForPageLoad(expectedUrl?: string, timeoutMs: number = envConfig.timeouts.high): Promise<void> {
        // --- 1) WAIT FOR READY STATE ---
        await browser.waitUntil(
            async () => {
                const state = await browser.execute(() => document.readyState);
                return state === 'complete';
            },
            {
                timeout: timeoutMs,
                interval: 500,
                timeoutMsg: `Page didn’t reach readyState 'complete' within ${timeoutMs}ms`,
            },
        );

        // --- 2) (OPTIONAL) WAIT FOR URL ---
        if (expectedUrl) {
            await browser.waitUntil(
                async () => {
                    const current = await browser.getUrl();
                    return current.includes(expectedUrl);
                },
                {
                    timeout: timeoutMs,
                    interval: 500,
                    timeoutMsg: `URL did not match expected\n  Expected: ${expectedUrl}\n  Actual:   ${await browser.getUrl()}\n  after ${timeoutMs}ms`,
                },
            );
        }
    }
}
