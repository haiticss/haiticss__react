import React, { Component } from 'react';
import classNames from 'classnames/bind';

import FlagConfig from './config.json';

export default class FlagBody extends Component {
    render() {
        return (
            <div className={classNames(
                `${FlagConfig.itcssNamespace}__body`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}