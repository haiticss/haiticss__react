import React, { Component } from 'react';
import classNames from 'classnames/bind';

import CropConfig from './config.json';

import CropContent from './CropContent';

export default class Crop extends Component {
    static Config = CropConfig;
    static Content = CropContent;

    render() {
        return (
            <div className={classNames(
                CropConfig.itcssNamespace,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
