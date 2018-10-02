import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BOY_IMAGE from '../images/Idle.gif';

const RADIUS = 25;
const rightEnd = 330;
const leftEnd = -20;

const styles = StyleSheet.create({
  player: {
    position: "absolute",
    resizeMode: 'contain',
    width: 50,
    height: 70,
    borderRadius: RADIUS * 2
  }
});

const Player = (props) => {
  const { position } = props;
  let x = position[0];
  let y = position[1];

  if (x >= rightEnd) x = rightEnd;
  if (x <= leftEnd) x = leftEnd;

  return (
    <View>
      <Image
        source={BOY_IMAGE}
        style={[styles.player, { left: x, top: y }]}
      />
    </View>
  );
};

export default Player;
