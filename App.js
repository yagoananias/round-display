import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
 
import SegmentedRoundDisplay from 'react-native-segmented-round-display';
 
const App = () => {
  const examples = [
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 40,
        },
      ],
    },
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 15,
        },
      ],
    },
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    }
  ];
 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {examples.map((example, i) => (
            <SegmentedRoundDisplay key={i} {...example} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
 
export default App;