import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View style={styles.container2}><Text>Kole World</Text></View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    borderRadius: 500,
    width:'90%',
    height:'75%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
