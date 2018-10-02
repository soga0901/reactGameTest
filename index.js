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
import Enemy from './entities/Enemy';
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

  render() {
    const {
      x,
      y,
    } = this.state;

    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        running
        entities={{
          1: { position: [160, 600], renderer: <Player /> },
          2: { position: [3, 100], renderer: <Enemy />, speed: 8 },
          3: { position: [4, 100], renderer: <Enemy />, speed: 4 },
          4: { position: [5, 100], renderer: <Enemy />},
        }}
      >
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
});

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => GameTest);
