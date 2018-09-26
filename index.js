import React, { PureComponent } from "react";
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import Player from './entities/Player';
import { MoveFinger } from './parts/systems';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

export default class GameTest extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: WIDTH / 2 - RADIUS,
      y: HEIGHT / 2 - RADIUS,
      // running: false,
    };
  }

  updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };

  render() {
    const {
      x,
      y,
    } = this.state;

    return (
      <GameEngine
        style={styles.container}
        onUpdate={this.updateHandler}
        systems={[MoveFinger]}
        running
        entities={{
          1: { position: [x,  y], renderer: <Player /> }
        }}
      >
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => GameTest);
