import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#006BD0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: '#00182C',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
