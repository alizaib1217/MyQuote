import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import heart1 from '../../../assets/icons/heart1.png';
import heart2 from '../../../assets/icons/heart2.png';
import share from '../../../assets/icons/share.png';
import copy from '../../../assets/icons/copy.png';
import arrow from '../../../assets/icons/upArrow.png';
class FabButton extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 10,
    }).start();
    this.open = !this.open;
  };

  render() {
    const topStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };
    const middleStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -85],
          }),
        },
      ],
    };
    const bottomStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60],
          }),
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -65],
          }),
        },
      ],
    };
    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onCopyPress}>
          <Animated.View
            style={[styles.buttonStyle, styles.topButton, bottomStyle]}>
            <Image
              style={{width: 20, height: 20, tintColor: 'white'}}
              source={copy}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.props.onSharePress}>
          <Animated.View
            style={[styles.buttonStyle, styles.middleButton, middleStyle]}>
            <Image
              style={{width: 20, height: 20, tintColor: 'white'}}
              source={share}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.props.onHeartPress}>
          <Animated.View
            style={[styles.buttonStyle, styles.secondary, topStyle]}>
            <Image
              style={{width: 20, height: 20, tintColor: 'white'}}
              source={heart2}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.buttonStyle, styles.menu, rotation]}>
            <Image
              style={{width: 25, height: 25, tintColor: 'white'}}
              source={arrow}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    right: 50,
  },
  buttonStyle: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 20,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: 'black',
  },
  topButton: {
    // position: 'absolute',
    // bottom:80,
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
  },
  middleButton: {
    // position: 'absolute',
    // right:80,
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
  },
  secondary: {
    // position: 'absolute',
    // top:80,
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
  },
});

export default FabButton;
