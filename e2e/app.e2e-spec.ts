import { LocatePage } from './app.po';

describe('locate App', function() {
  let page: LocatePage;

  beforeEach(() => {
    page = new LocatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
