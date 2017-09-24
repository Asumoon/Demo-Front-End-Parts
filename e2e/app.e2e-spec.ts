import { DemoFrontEndPartsPage } from './app.po';

describe('demo-front-end-parts App', () => {
  let page: DemoFrontEndPartsPage;

  beforeEach(() => {
    page = new DemoFrontEndPartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
