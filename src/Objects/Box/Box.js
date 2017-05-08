import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BoxConfig from './config.json';

import BoxContent from './BoxContent';

export default class Box extends Component {
    static Config = BoxConfig;
    static Content = BoxContent;

    render() {
        let spaceModifier = (this.props.spacing ? `${BoxConfig.itcssNamespace}--space-${this.props.spacing}` : null);

        return (
            <div className={classNames(
                BoxConfig.itcssNamespace,
                spaceModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
