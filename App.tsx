/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { signal } from '@preact/signals-react';
import React from 'react';
import { Text, View } from 'react-native';

const s = signal(0);
setInterval(() => (s.value += 1), 1_000);

function App(): JSX.Element {
  console.log('rerender');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
        }}>
        Preact signals counter: {s}
      </Text>
    </View>
  );
}

export default App;
