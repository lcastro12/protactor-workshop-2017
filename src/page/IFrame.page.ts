
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

    public get getTitlePage(): ElementFinder {
        return element(by.id('content')).element(by.tagName('h1'));
    }

    public async switchToFrame1() {
        await browser.switchTo().frame(this.getiFrame1.getWebElement());
    }

    public get getTitleFrame1(): ElementFinder{
        return element(by.id('content')).element(by.tagName('h1'));
    }

    public async switchToInicialContext() {
        await browser.switchTo().defaultContent();
    }

}
