import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AppContainer extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>👋</Text>
      </View>
    );
  }
}

export default AppContainer;
