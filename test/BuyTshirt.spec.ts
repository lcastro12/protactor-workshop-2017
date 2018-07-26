import { $, browser, element, by } from 'protractor';

describe('Buy a t-shirt', () => {
 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
   await browser.get('http://automationpractice.com/');
   await(browser.sleep(10000));
   await element(by.id('block_top_menu')).element(by.partialLinkText('T-SHIRTS')).click();
   await(browser.sleep(3000));
   await
   element(by.id('center_column')).element(by.tagName('img')).click();
   await(browser.sleep(3000));
   await element(by.id('add_to_cart')).element(by.tagName('span')).click();
   await(browser.sleep(3000));
   await element(by.css('[style*="display: block;"] .button-container')).element(by.tagName('a')).click();
   await(browser.sleep(3000));
   await element(by.css('.cart_navigation span')).click();
   await(browser.sleep(3000));
  
   await element(by.id('email')).sendKeys('aperdomobo@gmail.com');
   await element(by.id('passwd')).sendKeys('WorkshopProtractor');
   await $('#SubmitLogin > span').click();
   await(browser.sleep(3000));
  
   await $('#center_column > form > p > button > span').click();
   await(browser.sleep(3000));

   await $('#cgv').click();
   await(browser.sleep(3000));

   await $('#form > p > button > span').click();
   await(browser.sleep(3000));
   await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
   await(browser.sleep(3000));
   await $('#cart_navigation > button > span').click();
   await(browser.sleep(3000));

   await expect($('#center_column > div > p > strong').getText())
     .toBe('Your order on My Store is complete.');
 });
});
