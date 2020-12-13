import React from 'react';
import { Button, Text, View, TextInput, SafeAreaView } from 'react-native';
import StateContext from '../StateContext';

const Amount = ({ navigation }) => {
  const { currentInvestment, setCurrentInvestment } = React.useContext(
    StateContext,
  );
  const [input, onInputChange] = React.useState(currentInvestment);
  return (
    <SafeAreaView>
      <View>
        <Text>Enter USD investment</Text>
        <TextInput
          onChangeText={(text) => onInputChange(text)}
          keyboardType="numeric"
          placeholder="Enter investment in USD"
          value={input > 0 ? input.toString() : ''}
        />
        <Button
          disabled={!input}
          title="Confirm"
          onPress={() => {
            setCurrentInvestment(Number(input));
            navigation.navigate('Allocation');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Amount;
