import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

const Earnings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Earnings Scren</Text>
        <Button
          title="Go to Allocation Screen"
          onPress={() => navigation.navigate('Allocation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Earnings;
