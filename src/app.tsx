import React from 'react';
import { AntchainProvider } from '@antchain/jssdk/react';
import 'antd/dist/antd.dark.css';

export function rootContainer(container: React.ReactElement) {
  return React.createElement(AntchainProvider, null, container);
}
