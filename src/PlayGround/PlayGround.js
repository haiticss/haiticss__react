import React, { Component } from 'react';
import classNames from 'classnames/bind';

export default class PlayGround extends Component {
    render() {
        console.log(this.props.object.Config);
        return React.createElement(
            this.props.object,
            {
                className: classNames(
                    this.props.className
                )
            },
            this.props.children
        );
    }
}