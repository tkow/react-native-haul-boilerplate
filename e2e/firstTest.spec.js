describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  xit('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  xit('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  xit('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
})
