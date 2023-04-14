/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { signal } from '@preact/signals-react';
import React from 'react';
import { Text } from 'react-native';

const s = signal(0);
setInterval(() => (s.value += 1), 1_000);

// const useBindedSignal = <T,>(state: T) => {
//   const s = useSignal(state);
//   if (s.peek() !== state) {
//     s.value = state;
//   }

//   return s;
// };

function App(): JSX.Element {
  console.log('rerender');

  return (
    <Text
      style={{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      {s}
    </Text>
  );
}

export default App;
