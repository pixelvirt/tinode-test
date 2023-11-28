/* This is just a static page to display when no conversation is selected. */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Tinode } from 'tinode-sdk';

import { APP_NAME } from '../config.js';

export default class LogoView extends React.PureComponent {
  render() {
    const version = APP_NAME + ' (' + Tinode.getLibrary() + ')';
    return (
      <div id="dummy-view">
        <div>
          <a href="https://youtube.com/">
            <img id="logo" alt="logo" src="img/logo.svg" />
            <h2>PriceBlick Chat</h2>
          </a>
          <p><FormattedMessage id="label_client" defaultMessage="Client hello:"
            description="Label for a client version" /> {version}</p>
          <p><FormattedMessage id="label_server" defaultMessage="Server:"
            description="Label for a server version" /> {this.props.serverVersion} ({this.props.serverAddress})</p>
        </div>
      </div>
    );
  }
};
