import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given the web page with the iFrames', () => {
  describe('when the web page is open', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
    });
    describe('and i want to change the IFrame height', () => {
      describe('and verify the page´s title', () => {
        const iFramePage: IFramePage = new IFramePage();
        beforeAll(async () => {
          await iFramePage.modifyHeight('600', 'IF1');
        });
        it('then the IFrame height should have been changed', async () => {
          await expect(iFramePage.getHeight()).toBe('600');
        });
        it('and the page´s title is Sample Iframe page', async () => {
          await expect(iFramePage.getTitlePage.getText()).toBe('Sample Iframe page');
        });

        describe('when i want to explore the IFrame', () => {
          beforeAll(async () => {
            await iFramePage.switchToFrame1();
          });
          describe('and i want to verify the iframe´s title', () => {

            it('then the IFrame title should be Practice Automation Form', async () => {
              await expect(iFramePage.getTitlePage.getText()).toBe('Practice Automation Form');
            });
            describe('when i want to go back to the initial context', () => {
              beforeAll(async () => {
                await iFramePage.switchToInitialContext();
              });
              describe('and i want to check the initial page title', () => {

                it('then the title of the initial context should be Sample Iframe page', async () => {
                  await expect(iFramePage.getTitlePage.getText()).toBe('Sample Iframe page');
                });
              });
            });
          });
        });
      });
    });
  });
});
