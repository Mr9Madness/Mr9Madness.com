import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'app-project'
})

export class Project {
    @Prop() match: MatchResults;

    render() {
        if (this.match && this.match.params.projectId) {
            return (
                <div class='app-project'>
                    <p>
                        Hello! My name is {this.match.params.projectId}.
                        My name was passed in through a route param!
                    </p>
                </div>
            );
        }
    }
}
