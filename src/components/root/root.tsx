import { Component } from '@stencil/core';

@Component({
    tag: 'app-root'
})
export class Root
{
    render() {
        return (
            <div>
                <header class='nav'>
                    <h1>Stencil App Starter</h1>
                </header>

                <main>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                            <stencil-route url='/' component='app-home' exact={true} />
                            <stencil-route url='/project/:projectId' component='app-project' />
                        </stencil-route-switch>
                    </stencil-router>
                </main>
            </div>
        );
    }
}
