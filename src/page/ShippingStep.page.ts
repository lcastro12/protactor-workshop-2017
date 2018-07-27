import { ElementFinder, promise, element, by } from 'protractor';

export class ShippingStepPage {
 private get shippingStepPage(): ElementFinder {
   return element(by.id('center_column')).element(by.tagName('button')).element(by.tagName('span'));
 }

 public goToShippingStep(): promise.Promise<void> {
   return this.shippingStepPage.click();
 }

 private get checkBox(): ElementFinder {
     return element(by.id('cgv'));
 }

 public checkBoxShipping(): promise.Promise<void> {
     return this.checkBox.click();
 }
}
