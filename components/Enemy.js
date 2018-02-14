import React from 'react';
import { View, Image } from 'react-native';

export default class Enemy extends React.Component {
  constructor(props) {
    super(props);
    const { monsters, currentMonster } = this.props;
    this.state = { activeMonster: monsters[currentMonster] };
  }
  componentWillReceiveProps(nextProps) {
    // stops onDeath being called multiple times
    if (nextProps.health < 1 && this.props.health >= 1) {
      this.props.onDeath(this.props.monsters);
    }
  }
  render() {
    const { monsters, currentMonster } = this.props;
    const { maxHealth, image } = monsters[currentMonster];
    // 280 is the width of the health bar
    const shownHealth = this.props.health / maxHealth * 280;
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
