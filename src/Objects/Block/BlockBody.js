import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BlockConfig from './config.json';

export default class BlockBody extends Component {
    render() {
        return (
            <div className={classNames(
                `${BlockConfig.itcssNamespace}__body`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}