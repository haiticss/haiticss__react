import React, { Component } from 'react';
import classNames from 'classnames/bind';

import FlagConfig from './config.json';

export default class FlagImg extends Component {
    render() {
        return (
            <div className={classNames(
                `${FlagConfig.itcssNamespace}__img`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}