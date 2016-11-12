import { PreschoolFrontEndPage } from './app.po';

describe('preschool-front-end App', function() {
  let page: PreschoolFrontEndPage;

  beforeEach(() => {
    page = new PreschoolFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
