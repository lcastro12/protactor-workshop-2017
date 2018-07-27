import { ElementFinder, promise, element, by } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return element(by.id('block_top_menu')).element(by.partialLinkText('T-SHIRTS'));
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
