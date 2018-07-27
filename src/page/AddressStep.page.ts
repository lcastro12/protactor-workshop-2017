import { ElementFinder, promise, element, by } from 'protractor';

export class AddressStepPage {
 private get addressStepPage(): ElementFinder {
   return element(by.id('SubmitLogin')).element(by.css('span'));
 }

 public goToAddressStep(): promise.Promise<void> {
   return this.addressStepPage.click();
 }
}
