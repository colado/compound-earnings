import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome, Tomas</Text>
      </View>
      <View>
        <Text>Current supply interest rate</Text>
        <Text>DAI: 0.1%</Text>
        <Text>USDC: 0.2%</Text>
        <Text>USDT: 0.1%</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
