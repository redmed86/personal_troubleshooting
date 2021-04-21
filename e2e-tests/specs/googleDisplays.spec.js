describe('Check if page loads', () => {
    it('should display google.com', async () => {
      await browser.url('google.com');
      browser.pause(30000)
      // const el = $('body > div.restrict > main > h1')
      // console.log(el);
    });
  })