import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  quote: {
    fontSize: '20@s',
    textAlign: 'justify',
    fontFamily: 'DidactGothic-Regular',
    elevation: 3,
  },
  writer: {
    fontSize: '25@s',
    fontFamily: 'DancingScript-SemiBold',
    alignSelf: 'flex-end',
    elevation: 3,
  },
});
export default styles;
