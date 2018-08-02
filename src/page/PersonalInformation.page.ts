import { ElementFinder, element, by } from 'protractor';

export class PersonalInformationPage {

  public get inputForFirstName(): ElementFinder {
    return element(by.name('firstname'));
  }

  private get inputForLastName(): ElementFinder {
    return element(by.name('lastname'));
  }

  private markSex(sex: string): ElementFinder {
    return element(by.css(`[value="${sex}"]`));
  }

  private markExperience(exp: string): ElementFinder {
    return element(by.css(`[value="${exp}"]`));
  }

  private markProfession(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private markTools(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }

  private getContinent(continent: string): ElementFinder {
    return element(by.cssContainingText('option', continent));
  }

  private getCommand(command: string): ElementFinder {
    return element(by.cssContainingText('option', command));
  }

  public get getFormHeader(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  private get button(): ElementFinder {
    return element(by.cssContainingText('button', 'Button'));
  }

  public async fillForm(formData: any): Promise<void> {
    await this.inputForFirstName.sendKeys(formData.firstName);
    await this.inputForLastName.sendKeys(formData.lastName);
    await this.markSex(formData.sex).click();
    await this.markExperience(formData.experience).click();

    const listProfessions = formData.profession;
    for (const profession of listProfessions) {
      await this.markProfession(profession).click();
    }

    const listTools = formData.tools;
    for (const tool of listTools) {
      await this.markTools(tool).click();
    }

    await this.getContinent(formData.continent).click();

    const listCommands = formData.commands;
    for (const command of listCommands) {
      await this.getCommand(command).click();
    }

    await this.button.click();
  }
}
