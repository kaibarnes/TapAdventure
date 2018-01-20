import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class OwnedUpgrade extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>X</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  textStyles: {
    color: 'white',
    fontSize: 70
  }
});
