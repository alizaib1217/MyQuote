import React from 'react';
import {SafeAreaView, Image, Dimensions, StatusBar, View} from 'react-native';
import Colors from '../constants/colors';

export default class Container extends React.Component {
  render() {
    const {backgroundImageStyle, overlay, children} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={[styles.container, this.props.style]}>
          {this.props.backgroundImage && (
            <Image
              source={this.props.backgroundImage}
              style={[styles.backgroundImage, backgroundImageStyle]}
            />
          )}
          {overlay && <View style={styles.overlayStyle} />}
          {children}
        </SafeAreaView>
      </>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
};
