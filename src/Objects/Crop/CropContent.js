import React, { Component } from 'react';
import classNames from 'classnames/bind';

import CropConfig from './config.json';

export default class CropContent extends Component {
    render() {
        let alignmentModifier = (this.props.alignment ? `${CropConfig.itcssNamespace}--space-${this.props.alignment}` : null);

        return (
            <div className={classNames(
                CropConfig.itcssNamespace,
                alignmentModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}