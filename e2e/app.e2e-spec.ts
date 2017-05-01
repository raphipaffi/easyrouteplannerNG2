import { AngularAppCLIPage } from './app.po';

describe('angular-app-cli App', () => {
  let page: AngularAppCLIPage;

  beforeEach(() => {
    page = new AngularAppCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
