import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

const Settings = ({ children, visible, unshowModal, reset }) => {
  const {
    containerStyle,
    innerContainerStyle,
    exitContainerStyle,
    exitButtonStyle,
    textStyle,
    resetButtonStyle,
    resetButtonTextStyle
  } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <View style={innerContainerStyle}>
          <TouchableHighlight style={exitContainerStyle} onPress={unshowModal}>
            <Image
              style={exitButtonStyle}
              source={require('../assets/icons/exit.png')}
            />
          </TouchableHighlight>
          <Text style={textStyle}>{children}</Text>
          {/* <TouchableHighlight style={resetButtonStyle}>
            <Text style={resetButtonTextStyle}>Reset</Text>
          </TouchableHighlight> */}
          <Button onPress={reset} title="Reset" color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainerStyle: {
    backgroundColor: 'white',
    position: 'relative',
    height: 400,
    width: 300,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 5
  },
  exitContainerStyle: {
    top: 0,
    right: 0,
    alignSelf: 'flex-end'
  },
  exitButtonStyle: {
    width: 25,
    height: 25
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
  // resetButtonStyle: {
  //   backgroundColor: 'red',
  //   height: 30
  // },
  // resetButtonTextStyle: {
  //   color: 'white',
  //   fontSize: 20
  // }
};

export default Settings;
