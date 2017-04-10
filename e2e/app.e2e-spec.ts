import { LoginServicePage } from './app.po';

describe('login-service App', function() {
  let page: LoginServicePage;

  beforeEach(() => {
    page = new LoginServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
