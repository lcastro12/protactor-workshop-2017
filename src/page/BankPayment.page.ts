import { ElementFinder, promise, element, by } from 'protractor';

export class BankPaymentPage {
 private get bankPaymentPage(): ElementFinder {
   return element(by.id('HOOK_PAYMENT')).element(by.tagName('div')).element(by.tagName('a'));
 }

 public goToBankPayment(): promise.Promise<void> {
   return this.bankPaymentPage.click();
 }
}
