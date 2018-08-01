import { ElementArrayFinder, promise, element, by, ElementFinder } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return element.all(by.className('product-container'));
  }

  private findByProduct(nombre: string): ElementFinder {
     return this.productContainerList.filter(function(element){
          return element.element(by.tagName('h5')).element(by.tagName('a')).getText().then(function(text){
              return text == nombre;
          });
      }).first();
  }

  public selectProduct(nombre:string): promise.Promise<void> {
    return this.findByProduct(nombre).element(by.tagName('img')).click();
  }
}
