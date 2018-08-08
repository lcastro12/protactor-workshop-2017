import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';
import * as remote from 'selenium-webdriver/remote';

const firefoxConfig = {
  browserName: 'firefox',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
 };
 
 const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
 };
 
 const multiCapabilities = [chromeConfig, firefoxConfig];
 
 export let config: Config = {
  multiCapabilities,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  noGlobals: true,
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    browser.setFileDetector(new remote.FileDetector());
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY
};

