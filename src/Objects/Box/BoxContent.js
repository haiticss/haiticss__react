import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BoxConfig from './config.json';

export default class BoxContent extends Component {
    render() {
        return (
            <div className={classNames(
                `${BoxConfig.itcssNamespace}__content`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}