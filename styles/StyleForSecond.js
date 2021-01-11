import {StyleSheet, Dimensions} from 'react-native'

const win = Dimensions.get('window');
 const h = win.height;
 const w = win.width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kubik: {
    width: 40,
    height: 40,
  },
  imageStyle: {
    width: w, 
    height: h-20 ,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  kubik: {
    borderRadius: 50,
    margin: 2,
    height: 30,
    width: 30,
  }
})