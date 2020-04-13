import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Animated,
  Dimensions,
  FlatList,
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
import FabButton from './FabButton/FabButton';
import quotes from './quoteList';
import {
  getScreen1Styles,
  getScreen3Styles,
} from './FabButton/animationFunctions';
import {GetQuoteList} from '../../api/quotes';

class MyQuote extends React.Component {
  state = {
    quotes: [],
    liked: false,
    animation: new Animated.Value(0),
    currentViewableIndex: 0,
  };

  componentDidMount(): void {
    GetQuoteList()
      .then(res => res.data)
      .then(response => {
        this.setState({
          quotes: response,
        });
      })
      .catch(error => console.warn(error));
  }

  handleScroll({viewableItems, changed}) {
    const {animation, quotes} = this.state;
    console.warn(viewableItems);
  }

  onCopyQuote() {
    const {} = this.state;
  }

  onShareQuote() {}

  onLikeQuote() {}

  render() {
    const {width} = Dimensions.get('window');
    const {animation, quotes} = this.state;
    const screen1Styles = getScreen1Styles(animation, width);
    return (
      <Container backgroundImage={bg1} overlay>
        <View style={styles.container}>
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
            // onViewableItemsChanged={this.handleScroll.bind(this)}
            // viewabilityConfig={{
            //   itemVisiblePercentThreshold: 50,
            // }}
            extraData={this.state}
            data={quotes}
            renderItem={({item, index}) => (
              <View
                style={{
                  width,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Animated.Text
                  style={[
                    styles.quote,
                    index === 0
                      ? screen1Styles.Image2
                      : getScreen3Styles(animation, width, index).Image1,
                  ]}>
                  {item.text}
                </Animated.Text>
                <Animated.Text
                  style={[
                    styles.writer,
                    index === 0
                      ? screen1Styles.Image2
                      : getScreen3Styles(animation, width, index).Image1,
                  ]}>
                  -{item.author}
                </Animated.Text>
              </View>
            )}
            keyExtractor={(item, index) => `${index}`}
          />
          <FabButton
            onCopyPress={this.onCopyQuote.bind(this)}
            onSharePress={this.onShareQuote.bind(this)}
            onHeartPress={this.onLikeQuote.bind(this)}
          />
        </View>
      </Container>
    );
  }
}

export default MyQuote;
