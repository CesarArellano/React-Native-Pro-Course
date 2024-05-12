import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284258',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: 'purple',
  },
  orangeBox: {
    backgroundColor: 'orange',
    top: 50,
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});

// Homework 1
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     flex: 1,
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });

// Homework 2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     backgroundColor: '#284258',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//     width: '100%',
//   },
// });

//Homework 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     backgroundColor: '#284258',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//     alignSelf: 'flex-end',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//     alignSelf: 'center',
//   },
// });

// Homework 4
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     backgroundColor: '#284258',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//     alignSelf: 'flex-end',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//     alignSelf: 'center',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//     alignSelf: 'flex-start',
//   },
// });

// Homework 5
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#284258',
//   },
//   box: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });

// Homework 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//   },
//   box: {
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     flex: 1,
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     flex: 1,
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//     flex: 2,
//   },
// });

// Homework 7
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });

// Homework 8
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//     left: 100,
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });

//Homework 9
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//     top: 100,
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//     left: 100,
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });

// Homework 10:
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#284258',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: 'purple',
//   },
//   orangeBox: {
//     backgroundColor: 'orange',
//     top: 50,
//   },
//   blueBox: {
//     backgroundColor: 'blue',
//   },
// });
