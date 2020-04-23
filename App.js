import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/home';
import Header from './src/components/header';
import Body from './src/components/body';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Body />
      </Home>
    );
  }
}
