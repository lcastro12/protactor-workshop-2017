import { ElementFinder, promise, element, by } from 'protractor';

export class ProductAddedModalPage {
  private get productAddedModalPage(): ElementFinder {
    return element(by.id('add_to_cart')).element(by.tagName('span'));
  }

  public goToProductAddedModal(): promise.Promise<void> {
    return this.productAddedModalPage.click();
  }
}
