import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

const Settings = ({ visible, unshowModal, reset }) => {
  const {
    containerStyle,
    modalStyle,
    exitContainerStyle,
    exitButtonStyle,
    resetButtonStyle,
    resetButtonTextStyle,
    modalImage,
    textContainer,
    header
  } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <View style={modalStyle}>
          <TouchableHighlight style={exitContainerStyle} onPress={unshowModal}>
            <Image
              style={exitButtonStyle}
              source={require('../assets/icons/exit.png')}
            />
          </TouchableHighlight>
          <Image
            style={modalImage}
            source={require('../assets/backgrounds/plains.png')}
          />
          <View style={textContainer}>
            <Text style={header}>Start again!</Text>
            <Text>Fancy another go?</Text>
            <Text>Why not try again from the start?</Text>
          </View>
          <TouchableHighlight
            onPress={reset}
            style={resetButtonStyle}
            underlayColor="#aa3311"
          >
            <Text style={resetButtonTextStyle}>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalStyle: {
    backgroundColor: 'white',
    position: 'relative',
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    overflow: 'hidden'
  },
  modalImage: {
    width: 300,
    height: 150
  },
  exitContainerStyle: {
    top: 5,
    right: 5,
    position: 'absolute',
    zIndex: 10
  },
  exitButtonStyle: {
    width: 35,
    height: 35
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  resetButtonStyle: {
    borderColor: '#e03c3c',
    borderRadius: 30,
    borderWidth: 2,
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  resetButtonTextStyle: {
    color: '#e03c3c',
    fontSize: 20
  }
};

export default Settings;
