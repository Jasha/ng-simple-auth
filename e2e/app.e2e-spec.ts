import { NGi2xChallangePage } from './app.po';

describe('ngi2x-challange App', () => {
  let page: NGi2xChallangePage;

  beforeEach(() => {
    page = new NGi2xChallangePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
