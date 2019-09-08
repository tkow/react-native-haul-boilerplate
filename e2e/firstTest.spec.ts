import { expect, device, element, by } from "detox";

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shouldshow screen Example', async () => {
    await expect(element(by.id("stepOne"))).toBeVisible();
  });

  it('should select Text collectly', async () => {
    await expect(element(by.id('sectionDescription'))).toExist();
    await expect(element(by.text('Read the docs to discover what to do next:'))).toExist();
  });

  xit('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
