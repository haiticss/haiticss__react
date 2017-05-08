import React, { Component } from 'react';
import classNames from 'classnames/bind';

import RatioConfig from './config.json';

import RatioContent from './RatioContent';

export default class Ratio extends Component {
    static Config = RatioConfig;
    static Content = RatioContent;

    render() {
        let ratioModifier = (this.props.ratio ? `${RatioConfig.itcssNamespace}--${this.props.ratio}` : null);

        return (
            <div className={classNames(
                RatioConfig.itcssNamespace,
                ratioModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
