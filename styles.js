import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
  touchable: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#ffffff'
  },
  btn: {
    minWidth: 76,
    minHeight: 36,
    paddingHorizontal: 16,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 2
      }
    })
  }
});