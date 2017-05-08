import React, { Component } from 'react';
import classNames from 'classnames/bind';

import LayoutConfig from './config.json';

import LayoutItem from './LayoutItem';

export default class Layout extends Component {
    static Config = LayoutConfig;
    static Item = LayoutItem;

    render() {
        let spaceModifier           = (this.props.spacing ? `${LayoutConfig.itcssNamespace}--space-${this.props.spacing}` : null),
            verticalAlignModifier   = (this.props['v-alignment'] ? `${LayoutConfig.itcssNamespace}--${this.props['v-alignment']}` : null),
            horizontalAlignModifier = (this.props['h-alignment'] ? `${LayoutConfig.itcssNamespace}--${this.props['h-alignment']}` : null),
            reverseModifier         = (this.props.flip ? `${LayoutConfig.itcssNamespace}--reverse` : null);

        return (
            <div className={classNames(
                LayoutConfig.itcssNamespace,
                spaceModifier,
                verticalAlignModifier,
                horizontalAlignModifier,
                reverseModifier,
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}
