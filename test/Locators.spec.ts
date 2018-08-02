import { browser, protractor } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe(' Llenar Formulario', () => {
  describe('Abrir página en el navegador', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/');
    });
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
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
            'WebElement Commands']
        });
      });
      it('el formulario debió ser completado', async () => {
        await expect(personalInformationPage.getFormHeader.getText())
              .toBe('Practice Automation Form');
      });
    });
  });
});
