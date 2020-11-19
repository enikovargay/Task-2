import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from "react-native-router-flux";


const MyText = () => {
  return (
    <View style={styles.container}>
      <Text 
      style={styles.welcome}
      onPress={() => Actions.home()}>
        Text Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#611462',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default MyText;