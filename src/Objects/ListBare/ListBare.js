import React, { Component } from 'react';
import classNames from 'classnames/bind';

import ListBareConfig from './config.json';

export default class ListBare extends Component {
    static Config = ListBareConfig;

    render() {
        return (
            <ul className={classNames(
                ListBareConfig.itcssNamespace,
                this.props.className
            )}>
                {this.props.children}
            </ul>
        );
    }
}
