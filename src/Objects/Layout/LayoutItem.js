import React, { Component } from 'react';
import classNames from 'classnames/bind';

import LayoutConfig from './config.json';

export default class LayoutItem extends Component {
    render() {
        return (
            <div className={classNames(
                `${LayoutConfig.itcssNamespace}__item`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}