import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    borderWidth: 2,
    borderColor: 'red',
  },
  text: {
    fontSize: 24,
    color: 'whitesmoke',
  },
  jokeText: {
    marginLeft: 20,
    marginTop: 30,
    color: 'whitesmoke',
    textAlign: 'center',
    width: '90%',
    fontSize: 48,
    borderWidth: 2,
    borderColor: 'red',
  },
  touchToReveal: {
    textAlign: 'center',
    color: '#262272',
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'red',
  },
  punchline: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 32,
    borderWidth: 2,
    borderColor: 'red',
  },
  bigButton: {
    backgroundColor: '#0000ff',
    padding: 26,
    borderRadius: 20,
    borderWidth: 2,
    margin: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  hidden: {
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    width: '65%',
    height: 85,
    padding: 25,
    borderWidth: 2,
    borderRadius: 16,
    marginTop: 225, 
    marginRight: 25,
    marginLeft: 70,
  },

  show: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 88,
    padding: 16,

  },
});