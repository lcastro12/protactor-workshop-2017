
import { browser, element, by, ElementFinder } from 'protractor';

export class IFramePage {
 
    public async modifyHeight(height:string, id: string)  {
      return await browser.executeScript(`document.getElementById("${id}").setAttribute("height","${height}")`);    
    }

    private get getiFrame1(): ElementFinder{
        return element(by.id('IF1'));
    }

    public async getHeight(){
        return await this.getiFrame1.getAttribute('height');
    }

}
