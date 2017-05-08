import React, { Component } from 'react';
import classNames from 'classnames/bind';

import RatioConfig from './config.json';

export default class RatioContent extends Component {
    render() {
        return (
            <div className={classNames(
                `${RatioConfig.itcssNamespace}__content`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}