import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Customcomponent = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
      },

  container: {
    width: 100,  
    height: 100, 
    backgroundColor: 'blue',  
    justifyContent: 'center', 
    alignItems: 'center',      
    display: 'flex',  
  },
  text: {
    color: 'white',  
    fontSize: 16     
  }
});

export default Customcomponent;
