import { browser, element, by } from 'protractor';

describe('Ellipsis Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  beforeEach(() => browser.executeScript('window.scrollTo(0,0)'));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  describe('scroll direction', () => {
    it('should add scrolling direction class', () => {
      browser.executeScript('window.scrollTo(0, 0)');
      browser.sleep(400);
      expect(element(by.css('.foo.sn-scrolling-down')).isPresent()).toBeFalsy();
      expect(element(by.css('.foo.sn-scrolling-up')).isPresent()).toBeFalsy();

      browser.executeScript('window.scrollTo(0, 10)');
      browser.executeScript('window.scrollTo(0, 200)');
      browser.sleep(400);
      expect(element(by.css('.foo.sn-scrolling-down')).isPresent()).toBeTruthy();
      expect(element(by.css('.foo.sn-scrolling-up')).isPresent()).toBeFalsy();

      browser.executeScript('window.scrollTo(0, 100)');
      browser.sleep(400);
      expect(element(by.css('.foo.sn-scrolling-up')).isPresent()).toBeTruthy();
      expect(element(by.css('.foo.sn-scrolling-down')).isPresent()).toBeFalsy();
    });
  });

  describe('minimise mode', () => {
    it('should add "sn-minimise" class', () => {
      browser.executeScript('window.scrollTo(0, 0)');
      browser.executeScript('window.scrollTo(0, 10)');
      browser.sleep(400);
      expect(element(by.css('.foo.sn-minimise')).isPresent()).toBeFalsy();

      browser.executeScript('window.scrollTo(0, 110)');
      browser.sleep(400);
      expect(element(by.css('.foo.sn-minimise')).isPresent()).toBeTruthy();
    });
  });

  describe('affix mode', () => {
    it('should add "sn-affix" class', () => {
      browser.executeScript('window.scrollTo(0, 0)');
      browser.executeScript('window.scrollTo(0, 10)');
      browser.sleep(400);
      expect(element(by.css('.bar.sn-affix')).isPresent()).toBeFalsy();

      browser.executeScript('window.scrollTo(0, window.innerHeight*3)');
      browser.sleep(400);
      expect(element(by.css('.bar.sn-affix')).isPresent()).toBeTruthy();
    });
  });

});
