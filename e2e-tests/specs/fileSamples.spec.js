describe('Check if page loads', () => {
    it('should display filesamples.com', async () => {
        await browser.url('https://filesamples.com/formats/txt');
        browser.pause(30000)
        const el = await $('body > div.restrict > main > h1')
        await el.isDisplayed();
    });
});