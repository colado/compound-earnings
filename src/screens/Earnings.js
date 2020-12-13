import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Earnings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Current USD investment: 0</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Token</Text>
          <Text style={styles.text}>Allocation</Text>
          <Text style={styles.text}>Projected earnings</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>DAI</Text>
          <Text style={styles.text}>100%</Text>
          <Text style={styles.text}>101</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>USDC</Text>
          <Text style={styles.text}>0%</Text>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>USDT</Text>
          <Text style={styles.text}>0%</Text>
          <Text style={styles.text}>0</Text>
        </View>
        <View>
          <Text>Blended interest rate</Text>
          <Text>Total projected earnings: 101</Text>
        </View>
        <Button
          title="Go to Allocation Screen"
          onPress={() => navigation.navigate('Allocation')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
});

export default Earnings;
