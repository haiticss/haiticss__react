import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BlockConfig from './config.json';

export default class BlockFooter extends Component {
    render() {
        return (
            <div className={classNames(
                `${BlockConfig.itcssNamespace}__footer`,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}