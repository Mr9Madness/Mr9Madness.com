import { TestWindow } from '@stencil/core/testing';
import { Project } from './project';

describe('app-profile', () => {
    it('should build', () => {
        expect(new Project()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLAppProjectElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [Project],
                html: '<app-project></app-project>'
            });
        });

        it('should not render any content if there is not a match', async () => {
            await testWindow.flush();
            expect(element.textContent).toEqual('');
        });

        it('should work with a name passed', async () => {
            element.match = {
                path: '',
                url: '',
                isExact: false,
                params: {
                    name: 'stencil'
                }
            };

            await testWindow.flush();
            expect(element.textContent).toEqual(
                'Hello! My name is stencil. My name was passed in through a route param!'
            );
        });
    });
});
