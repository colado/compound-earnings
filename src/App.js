import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Earnings from './screens/Earnings';
import Allocation from './screens/Allocation';
import Amount from './screens/Amount';
import StateContext from './StateContext';

const App = () => {
  const [state, setState] = React.useState({
    supplyRate: {
      DAI: undefined,
      USDC: undefined,
      USDT: undefined,
      error: false,
    },
    allocationPercentage: {
      DAI: 100,
      USDC: 0,
      USDT: 0,
    },
    currentInvestment: 0,
    setAllocations: (value) => changeState(value, 'allocationPercentage'),
    setCurrentInvestment: (value) => changeState(value, 'currentInvestment'),
  });

  const changeState = (value, key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  React.useEffect(() => {
    const fetchSupplyRates = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(
          'https://api.compound.finance/api/v2/ctoken',
          options,
        ).then((res) => res.json());

        const interestValues = {};

        response.cToken.forEach((cToken) => {
          if (
            cToken.underlying_symbol === 'DAI' ||
            cToken.underlying_symbol === 'USDC' ||
            cToken.underlying_symbol === 'USDT'
          )
            interestValues[cToken.underlying_symbol] = (
              Number(cToken.supply_rate.value) * 100
            ).toFixed(6);
        });

        setState((prevState) => ({
          ...prevState,
          supplyRate: interestValues,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          supplyRate: {
            ...prevState.supplyRate,
            error: true,
          },
        }));
      }
    };

    fetchSupplyRates();
  }, []);

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const EarningsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="Amount" component={Amount} />
      <Stack.Screen name="Allocation" component={Allocation} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <StateContext.Provider value={state}>
        <Tab.Navigator
          tabBarOptions={{
            labelPosition: 'beside-icon',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Earnings" component={EarningsStack} />
        </Tab.Navigator>
      </StateContext.Provider>
    </NavigationContainer>
  );
};

export default App;
