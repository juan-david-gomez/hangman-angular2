import { TestInitPage } from './app.po';

describe('test-init App', function() {
  let page: TestInitPage;

  beforeEach(() => {
    page = new TestInitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
