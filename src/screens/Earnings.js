import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StateContext from '../StateContext';

const Earnings = ({ navigation }) => {
  const {
    allocationPercentage,
    currentInvestment,
    supplyRate,
  } = React.useContext(StateContext);
  const [projections, setProjections] = React.useState({
    DAI: {},
    USDC: {},
    USDT: {},
    totalEarnings: 0,
    interests: 0,
  });

  React.useEffect(() => {
    const newProjections = Object.keys(allocationPercentage).reduce(
      (acc, curr) => {
        const investment =
          currentInvestment * (allocationPercentage[curr] / 100);
        const projectedEarnings =
          investment + (investment * supplyRate[curr]) / 100;

        acc[curr] = {
          investment,
          projectedEarnings,
        };
        acc.totalEarnings = acc.totalEarnings
          ? acc.totalEarnings + projectedEarnings
          : projectedEarnings;
        acc.interests = acc.interests
          ? acc.interests + investment * supplyRate[curr]
          : investment * supplyRate[curr];
        return acc;
      },
      {},
    );

    setProjections(newProjections);
  }, [allocationPercentage, currentInvestment, supplyRate]);

  return (
    <SafeAreaView>
      {!currentInvestment ? (
        <Text>You haven't entered any investment yet</Text>
      ) : (
        <View>
          <Text>Current USD investment: {currentInvestment}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>Token</Text>
            <Text style={styles.text}>USD investment</Text>
            <Text style={styles.text}>Projected earnings</Text>
          </View>
          {Object.keys(allocationPercentage).map((token) => {
            return (
              <View key={token} style={styles.row}>
                <Text style={styles.text}>{token}</Text>
                <Text style={styles.text}>
                  {projections[token].investment &&
                    projections[token].investment.toFixed(2)}
                </Text>
                <Text style={styles.text}>
                  {projections[token].projectedEarnings &&
                    projections[token].projectedEarnings.toFixed(2)}
                </Text>
              </View>
            );
          })}
          <View>
            <Text>
              Blended interest rate:{' '}
              {(projections.interests / currentInvestment).toFixed(2)}%
            </Text>
            <Text>
              Total projected earnings:{' '}
              {projections.totalEarnings &&
                projections.totalEarnings.toFixed(2)}
            </Text>
          </View>
        </View>
      )}
      <Button
        title={
          currentInvestment
            ? 'Enter a different investment amount'
            : 'Enter an investment amount'
        }
        onPress={() => navigation.navigate('Amount')}
      />
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
