import { ElementFinder, element, by } from 'protractor';

export class PersonalInformationPage {

  public get firstName(): ElementFinder {
    return element(by.name('firstname'));
  }

  private get lastName(): ElementFinder {
    return element(by.name('lastname'));
  }

  private sex(sex: string): ElementFinder {
    return element(by.css(`[value="${sex}"]`));
  }

  private experience(exp: string): ElementFinder {
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

  public get page(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  private get button(): ElementFinder {
    return element(by.cssContainingText('button', 'Button'));
  }

  public async fillForm(formData: any): Promise<void> {
    await this.firstName.sendKeys(formData.firstName);
    await this.lastName.sendKeys(formData.lastName);
    await this.sex(formData.sex).click();
    await this.experience(formData.experience).click();

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
