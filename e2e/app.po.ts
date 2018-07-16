import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getDefaultParagraphText() {
    return element(by.css('sn-root .default')).getText();
  }

  getTooSmallParagraphText() {
    return element(by.css('sn-root .too-small')).getText();
  }
}
