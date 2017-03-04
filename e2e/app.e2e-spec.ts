import { WarsawjsWorkshopPage } from './app.po';

describe('warsawjs-workshop App', () => {
  let page: WarsawjsWorkshopPage;

  beforeEach(() => {
    page = new WarsawjsWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
