import React from 'react';
import { Slider } from 'react-native-elements';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import StateContext from '../StateContext';

const Allocation = ({ navigation }) => {
  const {
    allocationPercentage,
    setAllocations,
    currentInvestment,
  } = useContext(StateContext);
  const [sliderValues, setSliderValues] = React.useState(allocationPercentage);

  const handleChange = (value, id) => {
    const valueDifference = value - sliderValues[id];
    // Calculate the sum of the values of remaining sliders in order to assess
    // how much each slider should move so that they reach 0 or 100 at the same time
    let sumOfOtherValues = Object.keys(sliderValues).reduce((acc, curr) => {
      if (curr === id) return acc;
      return acc + sliderValues[curr];
    }, 0);

    const newValues = {};

    for (const [k, v] of Object.entries(sliderValues)) {
      if (k === id) {
        newValues[k] = value;
      } else {
        // Calculate how much each of the non-selected sliders should move based on how far it is from the target distance
        newValues[k] =
          value === 100 || (v === 0 && sumOfOtherValues)
            ? 0
            : // If sumOfOtherValues is 0 then remaining sliders are in the same position so they should move the same distance
              v - valueDifference * (v / sumOfOtherValues || 0.5);
      }
    }

    setSliderValues(newValues);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Allocate your funds among the following assets</Text>
        <Text>
          DAI: ${(currentInvestment * (sliderValues.DAI / 100)).toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValues.DAI}
          onValueChange={(value) => handleChange(value, 'DAI')}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text>
          USDC: ${(currentInvestment * (sliderValues.USDC / 100)).toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValues.USDC}
          onValueChange={(value) => handleChange(value, 'USDC')}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text>
          USDT: ${(currentInvestment * (sliderValues.USDT / 100)).toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValues.USDT}
          onValueChange={(value) => handleChange(value, 'USDT')}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <Button
        title="Confirm"
        onPress={() => {
          setAllocations(sliderValues);
          navigation.navigate('Earnings');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});

export default Allocation;
