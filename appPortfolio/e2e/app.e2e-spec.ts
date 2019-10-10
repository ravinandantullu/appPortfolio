import { AppPortfolioPage } from './app.po';

describe('app-portfolio App', () => {
  let page: AppPortfolioPage;

  beforeEach(() => {
    page = new AppPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
