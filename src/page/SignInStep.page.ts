import { ElementFinder, promise, element, by } from 'protractor';

export class SignInStepPage {
  private get signInStepPage(): ElementFinder {
    return element(by.css('.cart_navigation span'));
  }

  public goToSignInStep(): promise.Promise<void> {
    return this.signInStepPage.click();
  }

  private get signInEmail(): ElementFinder {
    return element(by.id('email'));

  }

  private get signInPassword(): ElementFinder {
    return element(by.id('passwd'));
  }

  public async addDataSignIn(): Promise<void> {
    await this.signInEmail.sendKeys('aperdomobo@gmail.com');
    await this.signInPassword.sendKeys('WorkshopProtractor');
  }

}
