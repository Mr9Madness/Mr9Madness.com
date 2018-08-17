import { TestWindow } from '@stencil/core/testing';
import { Root } from './root';

describe('my-component', () => {
  it('should build', () => {
      expect(new Root()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppRootElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
          components: [Root],
          html: '<app-root></app-root>'
      });
    });
  });
});
