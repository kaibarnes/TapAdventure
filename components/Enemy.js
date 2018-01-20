import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Enemy extends React.Component {
  constructor(props) {
    super(props);
    const { monsters, currentMonster } = this.props;
    this.state = { activeMonster: monsters[currentMonster] };

    // this.state = { activeMonster: monsters[currentMonster], nextMonster: 1 };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props.monsters[this.props.currentMonster]);
    if (nextProps.health < 1 && this.props.health >= 1) {
      // stores the old reward so it can be passed to the callback
      const reward = this.state.activeMonster.reward;
      // this.setState(
      //   { activeMonster: this.props.monsters[this.state.nextMonster] },
      //   () => {
      // const { maxHealth } = this.state.activeMonster;

      const { maxHealth } = nextProps.monsters[nextProps.currentMonster];
      this.props.onDeath(reward);

      // this.setState({
      //   activeMonster: this.props.monsters[nextProps.currentMonster]
      // });
      // this.setState({ nextMonster: this.state.nextMonster + 1 });
      //   }
      // );
    }
  }
  render() {
    const { monsters, currentMonster } = this.props;
    const { maxHealth, image } = monsters[currentMonster];
    const { health, damage } = this.props;
    // console.log(health);
    // console.log(maxHealth);
    // 280 is the width I want for the health bar
    // Find a better way so that it is responsive
    const shownHealth = health / maxHealth * 280;
    return (
      <View style={styles.container}>
        <View style={[styles.healthBar, { width: shownHealth }]} />
        <Image style={styles.enemyStyles} source={image} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 4,
    justifyContent: 'center',
    width: 280
  },
  healthBar: {
    height: 10,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10
  },
  enemyStyles: {
    alignSelf: 'center'
  }
};
