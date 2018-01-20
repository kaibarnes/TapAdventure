import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import EquipmentOne from './EquipmentOne';
import OwnedUpgrade from './OwnedUpgrade';

export default class UpgradeSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upgraded: false };

    this.renderEquipment = this.renderEquipment.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
  //somehow handle this in the app instead?
  handlePress() {
    const { money, damage, upgradePrice } = this.props;
    if (money > upgradePrice) {
      this.setState({ upgraded: true });
      this.props.handlePress(damage, upgradePrice);
    }
  }
  renderEquipment() {
    if (!this.state.upgraded) {
      return (
        <View>
          <TouchableHighlight
            style={styles.buttonStyles}
            underlayColor="darkred"
            onPress={this.handlePress}
          >
            <View>
              <ImageBackground
                source={this.props.image}
                style={styles.imageStyles}
              >
                <Text style={styles.textStyles}>{this.props.upgradePrice}</Text>
              </ImageBackground>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    return <OwnedUpgrade />;
  }
  render() {
    return <View style={styles.container}>{this.renderEquipment()}</View>;
  }
}

const styles = StyleSheet.create({
  imageStyles: {
    height: 50,
    width: 50
  },
  textStyles: {},
  container: {
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonStyles: {
    backgroundColor: 'black',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    color: 'white',
    fontSize: 20
  }
});
