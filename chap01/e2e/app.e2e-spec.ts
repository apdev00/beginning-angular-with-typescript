import { Chap01Page } from './app.po';

describe('chap01 App', function() {
  let page: Chap01Page;

  beforeEach(() => {
    page = new Chap01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
