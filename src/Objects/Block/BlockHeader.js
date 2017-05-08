import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BlockConfig from './config.json';

export default class BlockHeader extends Component {
    render() {
        return (
            <div className={classNames(
                `${BlockConfig.itcssNamespace}__header`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
