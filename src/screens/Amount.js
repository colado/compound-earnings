import React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import StateContext from '../StateContext';

const Amount = ({ navigation }) => {
  const { currentInvestment, setCurrentInvestment } = React.useContext(
    StateContext,
  );
  const [input, onInputChange] = React.useState(currentInvestment);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Enter USD investment</Text>
          <TextInput
            style={styles.input}
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
  title: {
    fontSize: 26,
  },
  input: {
    marginVertical: 40,
    fontSize: 32,
  },
});

export default Amount;
