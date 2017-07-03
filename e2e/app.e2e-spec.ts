import { Tommygaessler.Github.IoPage } from './app.po';

describe('tommygaessler.github.io App', () => {
  let page: Tommygaessler.Github.IoPage;

  beforeEach(() => {
    page = new Tommygaessler.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
