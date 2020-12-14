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
            {!Object.keys(supplyRate).some((asset) => supplyRate[asset]) ? (
              <Text style={styles.bodyText}>
                Compound data could not be fetched. If problem persists, please
                reload the app
              </Text>
            ) : (
              Object.keys(supplyRate).map((asset) => (
                <Text key={asset} style={styles.bodyText}>
                  {asset}: {Number(supplyRate[asset]).toFixed(2)} %
                </Text>
              ))
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
    marginVertical: 5,
    fontSize: 16,
  },
});

export default Home;
