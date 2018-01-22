import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Enemy extends React.Component {
  constructor(props) {
    super(props);
    const { monsters, currentMonster } = this.props;
    this.state = { activeMonster: monsters[currentMonster] };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props.monsters[this.props.currentMonster]);
    if (nextProps.health < 1 && this.props.health >= 1) {
      this.props.onDeath(this.props.monsters);
    }
  }
  render() {
    const { monsters, currentMonster } = this.props;
    const { maxHealth, image } = monsters[currentMonster];
    const { health, damage } = this.props;
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
