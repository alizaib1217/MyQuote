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

class MyQuote extends React.Component {
  state = {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me atmy best.",
    writer: 'Marilyn Monroe',
    liked: false,
  };

  render() {
    const {liked, quote, writer} = this.state;
    return (
      <Container backgroundImage={bg1} overlay>
        <View style={styles.container}>
          <View style={styles.myListView}>
            <Image source={myList} style={styles.myListIcon} />
          </View>
          <View>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.writer}>-{writer}</Text>
          </View>
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
