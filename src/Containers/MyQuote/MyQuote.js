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
  AsyncStorage,
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
import Share from 'react-native-share';
import Clipboard from '@react-native-community/clipboard';
import {
  getScreen1Styles,
  getScreen3Styles,
} from './FabButton/animationFunctions';
import {GetQuoteList} from '../../api/quotes';
import quoteList from '../../mockData/quotes.json';

class MyQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      animation: new Animated.Value(0),
      currentViewableIndex: 0,
      liked: false,
    };
    this.handleViewableItemsChanged = this.handleViewableItemsChanged.bind(
      this,
    );
    this.viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
  }
  async handleViewableItemsChanged({viewableItems}) {
    let liked = await this.getLikedStatus();
    this.setState({
      currentViewableIndex: viewableItems[0].index,
    });
  }

  componentDidMount(): void {
    this.setState({
      quotes: quoteList,
    });
  }

  onCopyQuote() {
    const {currentViewableIndex, quotes} = this.state;
    let quote = quotes[currentViewableIndex];
    Clipboard.setString(`${quote.text} - ${quote.author}`);
  }

  onShareQuote() {
    const {currentViewableIndex, quotes} = this.state;
    let quote = quotes[currentViewableIndex];
    let options = {
      message: `${quote.text} - ${quote.author}`,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  async onLikeQuote() {
    const {currentViewableIndex, quotes} = this.state;
    let liked = await AsyncStorage.getItem('LIKED');
    liked = JSON.parse(liked);
    let index = liked.indexOf(currentViewableIndex);
    this.setState({liked: !this.state.liked});

    if (index > -1) {
      liked.splice(index, 1);
      await AsyncStorage.setItem('LIKED', JSON.stringify(liked));
    } else {
      liked.push(currentViewableIndex);
      await AsyncStorage.setItem('LIKED', JSON.stringify(liked));
    }
  }

  async getLikedStatus() {
    const {currentViewableIndex, quotes} = this.state;
    let liked = await AsyncStorage.getItem('LIKED');
    liked = JSON.parse(liked);
    let index = liked.indexOf(currentViewableIndex);
    if (index > -1) {
      this.setState({liked: true});
    } else {
      this.setState({liked: false});
    }
  }

  render() {
    const {width} = Dimensions.get('window');
    const {animation, quotes, liked, currentViewableIndex} = this.state;
    const screen1Styles = getScreen1Styles(animation, width);
    return (
      <Container backgroundImage={currentViewableIndex % 2 ? bg1 : bg3} overlay>
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
            onViewableItemsChanged={this.handleViewableItemsChanged}
            viewabilityConfig={this.viewabilityConfig}
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
            liked={liked}
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
