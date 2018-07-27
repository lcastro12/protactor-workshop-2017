import { ElementFinder, promise, element, by } from 'protractor';

export class PaymentStepPage {
 private get paymentStepPage(): ElementFinder {
   return element(by.id('form')).element(by.tagName('button')).element(by.tagName('span'));
 }

 public goToPaymentStep(): promise.Promise<void> {
   return this.paymentStepPage.click();
 }
}
