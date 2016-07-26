import { Component } from 'react';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <h1>Posts Page</h1>

                {this.props.children}
            </div>
        );
    }
}
