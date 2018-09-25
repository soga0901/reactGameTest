import React, { PureComponent } from "react";
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
} from "react-native";
import { GameLoop } from "react-native-game-engine";
import BOY_IMAGE from './images/Idle.gif';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: WIDTH / 2 - RADIUS,
      y: HEIGHT / 2 - RADIUS
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
    return (
      <GameLoop
        style={styles.container}
        onUpdate={this.updateHandler}
      >
        <Image
          source={BOY_IMAGE}
          style={[styles.player, { left: this.state.x, top: this.state.y }]}
        />
        {/* <View
          style={[styles.player, { left: this.state.x, top: this.state.y }]}
        /> */}
      </GameLoop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    // backgroundColor: "pink",
    resizeMode: 'contain',
    width: 50,
    height: 70,
    // width: RADIUS * 2,
    // height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => BestGameEver);
