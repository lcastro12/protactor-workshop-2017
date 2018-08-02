import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Buy a t-shirt', () => {
  describe('Abrir la página en el navegador', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
    });
    describe('Cambiar altura IFrame', () => {
        const iFramePage: IFramePage= new IFramePage();
        beforeAll(async () => {
            await iFramePage.modifyHeight("600", "IF1");
        });
        it('La altura debió ser modificada', async () => {
            await expect(iFramePage.getHeight()).toBe("600");
        })
    });
  });
});
