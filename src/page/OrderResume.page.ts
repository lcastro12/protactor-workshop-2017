import { ElementFinder, promise, element, by } from 'protractor';

export class OrderResumePage {
  private get orderResumePage(): ElementFinder {
    return element(by.id('cart_navigation')).element(by.tagName('button'))
    .element(by.tagName('span'));
  }

  public goToOrderResume(): promise.Promise<void> {
    return this.orderResumePage.click();
  }

  public get inicialText(): ElementFinder {
    return element(by.id('center_column')).element(by.tagName('strong'));
  }

}
