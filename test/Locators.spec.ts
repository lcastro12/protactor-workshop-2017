import { browser, protractor } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service/Download.service';

describe(' Llenar Formulario', () => {
  const fileName = 'fileDownloaded.xlsx';

  describe('Abrir página en el navegador', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/');
    });

    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const downloadService: DownloadService = new DownloadService();
    describe('Ingresar datos', () => {

      beforeAll(async () => {
        const expectedCondition = protractor.ExpectedConditions;
        const condition = expectedCondition
             .visibilityOf(personalInformationPage.inputForFirstName);
        await browser.wait(condition, 3000, 'error waiting');
        await personalInformationPage.fillForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands'],
          file: '../../../resources/fondo-de-escritorio.jpg',
          downloadFiles: true,
          downloadFileName: fileName
        });
      });
      it('la imágen debe estar cargada', async () => {
        await expect(personalInformationPage.inputChooseFile.getAttribute('value')).toBe('C:\\fakepath\\fondo-de-escritorio.jpg');
      });

      it('Se debió descargar el archivo', async () => {
        await expect(downloadService.readFileFromTemp(fileName).byteLength).toBeGreaterThan(0);
      });

      describe(' seleccionar botón Button luego de llenar datos', () => {

        beforeAll(async () => {
          await personalInformationPage.clickButton();
        });
        it('el formulario debió ser completado', async () => {
          await expect(personalInformationPage.getFormHeader.getText())
                .toBe('Practice Automation Form');
        });
      });
    });
  });
});
