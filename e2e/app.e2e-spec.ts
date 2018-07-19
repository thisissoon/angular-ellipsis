import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Ellipsis Lib E2E Tests', function () {
  let page: AppPage;

  beforeEach(() => page = new AppPage());

  beforeEach(() => page.navigateTo());

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  describe('clip text', () => {
    it('should clip text and add ellipsis symbol', () => {
      // tslint:disable-next-line:max-line-length
      expect(page.getDefaultParagraphText()).toEqual(`Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit commodo ut ex elit fugiat et reprehenderit quis. Fugiat aliquip excepteur quis sunt sint consectetur duis elit…`);
    });

    it('should clip text and not loop infinitly', () => {
      expect(page.getTooSmallParagraphText()).toEqual(`…`);
    });
  });

});
