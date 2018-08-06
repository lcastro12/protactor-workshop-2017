import { browser, protractor } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service/Download.service';

describe('Given the web site', () => {
  const fileName = 'fileDownloaded.xlsx';

  describe('and open of the web page', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/');
    });

    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const downloadService: DownloadService = new DownloadService();

    describe('when the user fills the form with their data', () => {

      describe(' and i want to check if the image is uploaded and the file downloaded', () => {

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
        it('then the image should be uploaded and the file downloaded', async () => {
          await expect(personalInformationPage.
            inputChooseFile.getAttribute('value'))
             .toBe('C:\\fakepath\\fondo-de-escritorio.jpg');
          await expect(downloadService.readFileFromTemp(fileName).byteLength).toBeGreaterThan(0);
        });

        describe('Given the data to fill the form', () => {
          describe('when I want to get the title of the form', () => {
            beforeAll(async () => {
              await personalInformationPage.clickButton();
            });
            it('then it should be Practice Automation Form', async () => {
              await expect(personalInformationPage.getFormHeader.getText())
                .toBe('Practice Automation Form');
            });
          });
        });
      });
    });
  });
});
