import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import ActionButton from './components/ActionButton';
import Money from './components/Money';
import EquipmentOne from './components/EquipmentOne';
import OwnedUpgrade from './components/OwnedUpgrade';
import UpgradeSlot from './components/UpgradeSlot';
import Enemy from './components/Enemy';
import Settings from './components/Settings';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      damage: 1,
      health: 10,
      showModal: false,
      currentMonster: 0
    };

    this.reset = this.reset.bind(this);
    this.reduceHealth = this.reduceHealth.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
    this.showModal = this.showModal.bind(this);
    this.unshowModal = this.unshowModal.bind(this);
  }
  reset() {
    this.setState({
      money: 0,
      damage: 1,
      health: 10,
      showModal: false,
      currentMonster: 0
    });
  }
  showModal() {
    this.setState({ showModal: true });
  }
  unshowModal() {
    this.setState({ showModal: false });
  }
  reduceHealth() {
    this.setState(
      { health: this.state.health - this.state.damage },
      console.log(this.state.health, this.state.damage)
    );
  }
  handleDeath(reward, maxHealth) {
    this.setState(
      {
        money: this.state.money + reward,
        health: maxHealth,
        currentMonster: this.state.currentMonster + 1
      },
      () => console.log(this.state.currentMonster)
    );
  }
  upgrade(damage, upgradePrice) {
    this.setState({
      damage: damage,
      money: this.state.money - upgradePrice
    });
  }
  render() {
    const upgrades = [
      {
        name: 'Dagger',
        damage: 5,
        upgradePrice: 10,
        image: require('./assets/weapons/dagger.png')
      },
      {
        name: 'Shortsword',
        damage: 20,
        upgradePrice: 100,
        image: require('./assets/weapons/shortsword.png')
      },
      {
        name: 'Longsword',
        damage: 50,
        upgradePrice: 1000,
        image: require('./assets/weapons/longsword.png')
      },
      {
        name: 'Greatsword',
        damage: 200,
        upgradePrice: 10000,
        image: require('./assets/weapons/greatsword.png')
      }
    ];
    const monsters = [
      {
        maxHealth: 10,
        reward: 20,
        image: require('./assets/enemies/bird.png')
      },
      {
        maxHealth: 100,
        reward: 50,
        image: require('./assets/enemies/ghost.png')
      },
      {
        maxHealth: 500,
        reward: 200,
        image: require('./assets/enemies/sorcerer.png')
      }
    ];

    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/backgrounds/plains.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.settingsIcon}>
          <TouchableWithoutFeedback onPress={this.showModal}>
            <Image source={require('./assets/icons/settings.png')} />
          </TouchableWithoutFeedback>
        </View>
        <Money money={this.state.money} />
        <Enemy
          currentMonster={this.state.currentMonster}
          monsters={monsters}
          onDeath={this.handleDeath}
          health={this.state.health}
          damage={this.state.damage}
        />
        <ActionButton handlePress={this.reduceHealth} />
        <View style={styles.upgradesContainer}>
          {upgrades.map(upgrade => (
            <UpgradeSlot
              {...upgrade}
              money={this.state.money}
              key={upgrade.name}
              handlePress={this.upgrade}
            />
          ))}
        </View>
        <Settings
          reset={this.reset}
          unshowModal={this.unshowModal}
          visible={this.state.showModal}
        >
          Modal Test
        </Settings>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  settingsIcon: {
    position: 'absolute',
    top: 30,
    right: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  upgradesContainer: {
    height: 100,
    flexDirection: 'row'
  }
});
