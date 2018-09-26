import React, { PureComponent } from "react";
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { GameLoop } from "react-native-game-engine";
import ENEMY_RIGHT_IMAGE from '../images/enemy_right.gif';
import ENEMY_LEFT_IMAGE from '../images/enemy_left.gif';

const RADIUS = 25;

const rightEnd = 320;
const leftEnd = -20;

const styles = StyleSheet.create({
  enemy: {
    position: "absolute",
    resizeMode: 'contain',
    width: 100,
    height: 70,
    borderRadius: RADIUS * 2
  }
});

class Enemy extends PureComponent {
  static defaultProps = {
    speed: 1,
  }
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      direction: 'right',
    };
  }

  componentDidMount() {
    this.setState({
      x: this.props.position[0],
      y: this.props.position[1],
    });
  }

  _moveEnemy() {
    const {
      x,
      direction,
    } = this.state;
    const {
      speed,
    } = this.props;

    if (direction === 'right') {
      this.setState({
        x: x + speed,
      });
    } else {
      this.setState({
        x: x - speed,
      });
    }
  }

  updateHandler = ({ touches, screen, time }) => {
    const {
      x,
      direction,
    } = this.state;
    if (x >= rightEnd) {
      this.setState({
        direction: 'left',
      });
    } else if (x <= leftEnd) {
      this.setState({
        direction: 'right',
      });
    }

    this._moveEnemy();
  };

  render() {
    const {
      x,
      y,
      direction,
    } = this.state;

    const renderImage = direction === 'right' ? ENEMY_RIGHT_IMAGE : ENEMY_LEFT_IMAGE;

    return (
      <GameLoop
        onUpdate={this.updateHandler}
      >
        <Image
          source={renderImage}
          style={[styles.enemy, { left: x, top: y }]}
        />
      </GameLoop>
    );
  }
};

export default Enemy;
