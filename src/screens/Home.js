import React from 'react';
import { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import StateContext from '../StateContext';

const Home = () => {
  const { supplyRate } = useContext(StateContext);
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome, Tomas</Text>
      </View>
      <View>
        <Text>Current supply interest rate</Text>
        <Text>DAI: {supplyRate.DAI && Number(supplyRate.DAI).toFixed(2)}%</Text>
        <Text>
          USDC: {supplyRate.USDC && Number(supplyRate.USDC).toFixed(2)}%
        </Text>
        <Text>
          USDT: {supplyRate.USDT && Number(supplyRate.USDT).toFixed(2)}%
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
