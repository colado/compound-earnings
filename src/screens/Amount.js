import React from 'react';
import { Button, Text, View, TextInput, SafeAreaView } from 'react-native';

const Amount = ({ navigation }) => {
  const [input, onInputChange] = React.useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Enter USD investment</Text>
        <TextInput
          onChangeText={(text) => onInputChange(text)}
          keyboardType="numeric"
          placeholder="Enter amount in USD"
        />
        <Button
          disabled={!input}
          title="Confirm"
          onPress={() => navigation.navigate('Allocation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Amount;
