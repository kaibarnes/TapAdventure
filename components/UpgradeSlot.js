import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import OwnedUpgrade from './OwnedUpgrade';

export default class UpgradeSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upgraded: false };

    this.renderEquipment = this.renderEquipment.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
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
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonStyles: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
