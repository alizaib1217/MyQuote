import React from 'react';
import {AsyncStorage, View} from 'react-native';
import MyQuote from './src/Containers/MyQuote/MyQuote';

class App extends React.Component {
  async componentDidMount(): void {
    let liked = await AsyncStorage.getItem('LIKED');
    if (!liked) {
      await AsyncStorage.setItem('LIKED', `[]`);
    }
  }

  render() {
    return <MyQuote />;
  }
}
export default App;

console.disableYellowBox = true;
