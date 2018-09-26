import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import BOY_IMAGE from '../images/Idle.gif';

const RADIUS = 25;

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
  const x = position[0];
  const y = position[1]

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
