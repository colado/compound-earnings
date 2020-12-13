import React from 'react';
import { Slider } from 'react-native-elements';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Allocation = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Enter USD investment</Text>
        <Text>DAI</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text>USDC</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text>USDT</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <Button title="Confirm" onPress={() => navigation.navigate('Earnings')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});

export default Allocation;
