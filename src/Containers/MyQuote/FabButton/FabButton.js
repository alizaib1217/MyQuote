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
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
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
              style={{width: 20, height: 20, tintColor: 'white'}}
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
    bottom: 80,
    right: 40,
  },
  buttonStyle: {
    position: 'absolute',
    width: wp('11%'),
    height: wp('11%'),
    borderRadius: wp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.41,
    elevation: 2,
    shadowColor: '#F02A4B',
  },
  menu: {
    // backgroundColor: '#FF0000',
    // backgroundColor: '#002E5B',
    backgroundColor: '#41436A',
  },
  topButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#F54768',
  },
  middleButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#974063',
  },
  secondary: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FF9678',
  },
});

export default FabButton;
