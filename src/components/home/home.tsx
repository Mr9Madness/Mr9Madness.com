import { Component } from '@stencil/core';

@Component({
    tag: 'app-home'
})
export class Home {
    render() {
        return (
            <div class='app-home'>
                <p>
                    Welcome to the Stencil App Starter.
                    You can use this starter to build entire apps all with
                    web components using Stencil!
                    Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
                </p>

                <stencil-route-link url='/project/flipflop'>
                    <button>
                        Project page
                    </button>
                </stencil-route-link>
            </div>
        );
    }
}
