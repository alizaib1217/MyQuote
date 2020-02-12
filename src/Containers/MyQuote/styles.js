import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native'

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal:Platform.OS==="ios"? '20@s':'0@s',
  },
  myListView: {
    alignItems: 'flex-end',
  },
  myListIcon: {
    height: '30@s',
    width: '30@s',
    tintColor: '#fff',
  },
  quote: {
    fontSize: '20@s',
    textAlign: 'justify',
    fontFamily: 'DidactGothic-Regular',
  },
  writer: {
    fontSize: '25@s',
    fontFamily: 'DancingScript-SemiBold',
    alignSelf: 'flex-end',
  },
  footerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: '30@s',
    width: '30@s',
    marginLeft: '10@s',
    tintColor: '#fff',
  },
});
export default styles;
