import React from 'react';
import { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import StateContext from '../StateContext';

const Home = () => {
  const { supplyRate } = useContext(StateContext);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Welcome, Tomas</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Current supply interest rate</Text>
            {supplyRate.error ? (
              <Text style={styles.error}>
                Compound data could not be fetched. Please try reloading the app
              </Text>
            ) : (
              <View>
                <Text style={styles.bodyText}>
                  DAI: {supplyRate.DAI && Number(supplyRate.DAI).toFixed(2)}%
                </Text>
                <Text style={styles.bodyText}>
                  USDC: {supplyRate.USDC && Number(supplyRate.USDC).toFixed(2)}%
                </Text>
                <Text style={styles.bodyText}>
                  USDT: {supplyRate.USDT && Number(supplyRate.USDT).toFixed(2)}%
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
  body: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 5,
  },
  bodyText: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: 'red',
  },
});

export default Home;
