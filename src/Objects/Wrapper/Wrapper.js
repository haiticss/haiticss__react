import React, { Component } from 'react';
import classNames from 'classnames/bind';

import WrapperConfig from './config.json';

export default class Wrapper extends Component {
    static Config = WrapperConfig;

    render() {
        let fromModifier    = (this.props.from ? `${WrapperConfig.itcssNamespace}--from@${this.props.from}` : null),
            toModifier      = (this.props.to ? `${WrapperConfig.itcssNamespace}--to@${this.props.to}` : null);

        return (
            <div className={classNames(
                WrapperConfig.itcssNamespace,
                fromModifier,
                toModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
