import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Total extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.buttonStyles}
        underlayColor="darkred"
        // onPress={this.props.handlePress}
      >
        <Text style={styles.textStyles}>1</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyles: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    color: 'white',
    fontSize: 20
  }
});
