import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
  },
  myListView: {
    alignItems: 'flex-end',
  },
  myListIcon: {
    height: '30@s',
    width: '30@s',
    tintColor: '#002E5B',
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
  },
  imageStyle: {
    height: '30@s',
    width: '30@s',
    marginRight: '10@s',
    tintColor: '#bbc3d3',
  },
});
export default styles;
