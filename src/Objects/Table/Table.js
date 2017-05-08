import React, { Component } from 'react';
import classNames from 'classnames/bind';

import TableConfig from './config.json';

export default class Table extends Component {
    static Config = TableConfig;

    render() {
        let spaceModifier = (this.props.spacing ? `${TableConfig.itcssNamespace}--space-${this.props.spacing}` : null),
            fixedModifier = (this.props.fix ? `${TableConfig.itcssNamespace}--fixed` : null);

        return (
            <table className={classNames(
                TableConfig.itcssNamespace,
                spaceModifier,
                fixedModifier,
                this.props.className
            )}>
                {this.props.children}
            </table>
        );
    }
}
