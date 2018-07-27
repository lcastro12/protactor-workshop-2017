import { ElementFinder, promise, element, by } from 'protractor';

export class ProductDetailPage {
 private get productDetailPage(): ElementFinder {
   return element(by.id('center_column')).element(by.tagName('img'));
 }

 public goToProductDetail(): promise.Promise<void> {
   return this.productDetailPage.click();
 }
}
