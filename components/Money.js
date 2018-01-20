import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Money extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.moneyStyle}>{this.props.money}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  moneyStyle: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'transparent'
  }
});
