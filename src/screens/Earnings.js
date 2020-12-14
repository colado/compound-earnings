import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
      <ScrollView>
        <View style={styles.container}>
          {!currentInvestment ? (
            <Text style={styles.bodyText}>
              You haven't entered any investment yet
            </Text>
          ) : (
            <View style={styles.table}>
              <Text style={styles.bodyText}>
                Current USD investment: {currentInvestment}
              </Text>
              <View style={styles.row}>
                <Text style={styles.bodyText}>Token</Text>
                <Text style={styles.bodyText}>USD investment</Text>
                <Text style={styles.bodyText}>Projected earnings</Text>
              </View>
              {Object.keys(allocationPercentage).map((token) => {
                return (
                  <View key={token} style={styles.row}>
                    <Text style={styles.bodyText}>{token}</Text>
                    <Text style={styles.bodyText}>
                      {projections[token].investment &&
                        projections[token].investment.toFixed(2)}
                    </Text>
                    <Text style={styles.bodyText}>
                      {projections[token].projectedEarnings &&
                        projections[token].projectedEarnings.toFixed(2)}
                    </Text>
                  </View>
                );
              })}
              <View>
                <Text style={styles.bodyText}>
                  Blended interest rate:{' '}
                  {(projections.interests / currentInvestment).toFixed(2)}%
                </Text>
                <Text style={styles.bodyText}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
  },
  bodyText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 26,
  },
  table: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    padding: 10,
  },
});

export default Earnings;
