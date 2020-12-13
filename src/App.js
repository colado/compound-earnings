import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Earnings from './screens/Earnings';
import Allocation from './screens/Allocation';
import Amount from './screens/Amount';

const App = () => {
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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Earnings" component={EarningsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
