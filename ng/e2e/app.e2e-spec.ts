import { B2AppPage } from './app.po';

describe('b2-app App', () => {
  let page: B2AppPage;

  beforeEach(() => {
    page = new B2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
