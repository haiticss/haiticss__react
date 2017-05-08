import React, { Component } from 'react';
import classNames from 'classnames/bind';

import BlockConfig from './config.json';

import BlockHeader from './BlockHeader';
import BlockBody from './BlockBody';
import BlockFooter from './BlockFooter';

export default class Block extends Component {
    static Config = BlockConfig;

    static Header = BlockHeader;
    static Body = BlockBody;
    static Footer = BlockFooter;


    render() {
        let spaceModifier       = (this.props.spacing ? `${BlockConfig.itcssNamespace}--space-${this.props.spacing}` : null),
            alignmentModifier   = (this.props.alignment ? `${BlockConfig.itcssNamespace}--${this.props.alignment}` : null),
            stretchModifier     = (this.props.stretch ? `${BlockConfig.itcssNamespace}--stretch` : null);

        return (
            <div className={classNames(
                BlockConfig.itcssNamespace,
                spaceModifier,
                alignmentModifier,
                stretchModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
