import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    borderRadius: 6,
    height: 40,
    width: 300,
  },
  buttonGroupContainer: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    height: 40,
    width: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    color: '#AAAAAA',
  },
  buttonActive: {
    backgroundColor: '#212121',
    borderWidth: 1,
    borderColor: '#444444',
  },
  buttonText: {
    fontWeight: '700',
    color: '#AAAAAA',
  },
  buttonTextActive: {
    color: '#E1E1E1',
  },
  mask: {
    height: 40,
    width: 150,
    backgroundColor: '#212121',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 6,
  },
});

export default styles;
