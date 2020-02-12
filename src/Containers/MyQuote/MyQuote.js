import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Clipboard,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';
import Container from '../../components/Container';
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import heart1 from '../../assets/icons/heart1.png';
import heart2 from '../../assets/icons/heart2.png';
import share from '../../assets/icons/share.png';
import copy from '../../assets/icons/copy.png';
import myList from '../../assets/icons/myList.png';

const getScreen1Styles = (animation, width) => {
  const image2TranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  const imageScale = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return {
    Image2: {
      transform: [
        {
          translateX: image2TranslateX,
        },
        {
          scale: imageScale,
        },
      ],
    },
  };
};

const getScreen3Styles = (animation, width, index) => {
  const inputRange = [width * (index - 1), width * index, width * (index + 2)];
  const imageScale = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });
  return {
    Image1: {
      transform: [
        {
          scale: imageScale,
        },
      ],
    },
  };
};

class MyQuote extends React.Component {
  state = {
    quotes: [
      {
        quote:
          "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me atmy best.",
        writer: 'Marilyn Monroe',
      },
      {
        quote:
          "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me atmy best.",
        writer: 'Marilyn Monroe',
      },
      {
        quote: "I'm selfish, impatient and a little insecure33.",
        writer: 'Marilyn Monroe',
      },
      {
        quote: "I'm selfish, impatient and a little insecure44.",
        writer: 'Marilyn Monroe',
      },
      {
        quote: "I'm selfish, impatient and a little insecure55.",
        writer: 'Marilyn Monroe',
      },
      {
        quote: "I'm selfish, impatient and a little insecure66.",
        writer: 'Marilyn Monroe',
      },
      {
        quote: "I'm selfish, impatient and a little insecure77.",
        writer: 'Marilyn Monroe',
      },
    ],
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me atmy best.",
    writer: 'Marilyn Monroe',
    liked: false,
    animation: new Animated.Value(0),
  };

  render() {
    const {width, height} = Dimensions.get('window');
    const {liked, quote, writer, animation, quotes} = this.state;

    const screen1Styles = getScreen1Styles(animation, width);
    return (
      <Container backgroundImage={bg1} overlay>
        <View style={styles.container}>
          <View style={styles.myListView}>
            <Image source={myList} style={styles.myListIcon} />
          </View>
          <FlatList
            style={{flex: 1}}
            pagingEnabled={true}
            horizontal={true}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: animation,
                  },
                },
              },
            ])}
            data={quotes}
            renderItem={({item, index}) => (
              <View style={{width, justifyContent: 'center',paddingHorizontal:10}}>
                <Animated.Text
                  style={[
                    styles.quote,
                    index === 0
                      ? screen1Styles.Image2
                      : getScreen3Styles(animation, width, index).Image1,
                  ]}>
                  {item.quote}
                </Animated.Text>
                <Animated.Text
                  style={[
                    styles.writer,
                    index === 0
                      ? screen1Styles.Image2
                      : getScreen3Styles(animation, width, index).Image1,
                  ]}>
                  -{item.writer}
                </Animated.Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <View style={styles.footerIcon}>
            <TouchableOpacity onPress={() => this.setState({liked: !liked})}>
              <Image
                source={heart1}
                style={{
                  ...styles.imageStyle,
                  ...{tintColor: liked ? 'red' : '#fff'},
                }}
              />
            </TouchableOpacity>
            {/*<TouchableOpacity>*/}
            {/*  <Image*/}
            {/*    source={heart2}*/}
            {/*    style={{*/}
            {/*      ...styles.imageStyle,*/}
            {/*      ...{*/}
            {/*        tintColor: '#fff',*/}
            {/*      },*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity onPress={() => Clipboard.setString(quote)}>
              <Image source={copy} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default MyQuote;
