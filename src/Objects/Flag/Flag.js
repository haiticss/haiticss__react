import React, { Component } from 'react';
import classNames from 'classnames/bind';

import FlagConfig from './config.json';
import FlagImg from './FlagImg';
import FlagBody from './FlagBody';

export default class Flag extends Component {
    static Config = FlagConfig;

    static Img = FlagImg;
    static Body = FlagBody;

    render() {
        let spaceModifier       = (this.props.spacing ? `${FlagConfig.itcssNamespace}--space-${this.props.spacing}` : null),
            alignmentModifier   = (this.props.alignment ? `${FlagConfig.itcssNamespace}--${this.props.alignment}` : null),
            reverseModifier     = (this.props.flip ? `${FlagConfig.itcssNamespace}--reverse` : null);

        return (
            <div className={classNames(
                FlagConfig.itcssNamespace,
                spaceModifier,
                alignmentModifier,
                reverseModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
