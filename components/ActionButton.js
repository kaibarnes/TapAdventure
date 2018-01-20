import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class ActionButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.buttonStyles}
          underlayColor="red"
          onPress={this.props.handlePress}
        >
          <Image
            source={require('../assets/weapons/dagger.png')}
            style={styles.backgroundImage}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 90,
    width: 90,
    borderRadius: 45
  },
  container: {
    flex: 1
  },
  buttonStyles: {
    backgroundColor: 'darkred',
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    fontSize: 30
  }
});
