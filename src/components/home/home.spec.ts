import { TestWindow } from '@stencil/core/testing';
import { Home } from './home';

describe('my-component', () => {
    it('should build', () => {
        expect(new Home()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLAppHomeElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [Home],
                html: '<app-home></app-home>'
            });
        });
    });
});
