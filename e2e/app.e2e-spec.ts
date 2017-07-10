import { SmartSteadPage } from './app.po';

describe('smart-stead App', () => {
  let page: SmartSteadPage;

  beforeEach(() => {
    page = new SmartSteadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
