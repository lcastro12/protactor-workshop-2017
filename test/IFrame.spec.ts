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
        });
        it('Verifica el título principal', async () => {
          await expect(iFramePage.getTitlePage.getText()).toBe('Sample Iframe page');
        });

        describe('Cambiar de iFrame', () => {
          beforeAll(async () => {
            await iFramePage.switchToFrame1();
          });
          it('Verificado el título principal del iFrame', async () => {
            await expect(iFramePage.getTitleFrame1.getText()).toBe('Practice Automation Form');
          });
          describe('Volver al contexto principal', () => {
            beforeAll(async () => {
              await iFramePage.switchToInicialContext();
            });
            it('Verificado el título del contexto principal al volver', async () => {
              await expect(iFramePage.getTitlePage.getText()).toBe('Sample Iframe page');
            });
          });
        });
    });
  });
});
