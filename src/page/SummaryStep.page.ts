import { ElementFinder, promise, element, by } from 'protractor';

export class SummaryStepPage {
  public get summaryStepPage(): ElementFinder {
    return element(by.css('[style*="display: block;"] .button-container')).element(by.tagName('a'));
  }

  public goToSummaryStep(): promise.Promise<void> {
    return this.summaryStepPage.click();
  }
}
