import { ComponentsV2Page } from './app.po';

describe('components-v2 App', () => {
  let page: ComponentsV2Page;

  beforeEach(() => {
    page = new ComponentsV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
