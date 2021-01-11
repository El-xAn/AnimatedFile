import {Dimensions, StyleSheet} from 'react-native'

const win = Dimensions.get('window')
    const w = win.width;
    const h = win.height;
    
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animText: {
    marginTop: 10,
    color: 'green',
  },
  textStyle: {
    fontSize: 25,    
  },
  button: {
    width: w - 250,
    height: 70,
    margin: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  blueLoad: {
    height: 30,
    width: 30,
    backgroundColor: 'blue'
  },
  redLoad: {
    height: 30,
    width: 30,
    backgroundColor: 'red'
  }
})