import { Text, View, Pressable } from 'react-native';
import { Cssify } from '../../src';
// import { StyleSheet } from '../../src';

// const st = StyleSheet.create({
//   container: {
//     condition: {
//       maxWidth: 1500,
//       minWidth: 100,
//     },
//     colorMode: 'dark',
//     style: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       shadowOffset: {
//         width: 0,
//         height: -0,
//       },
//       shadowOpacity: 0.1,
//       shadowRadius: 0,
//     },
//   },
// });

// const { styles, ids } = st;

// const css = Cssify.create(
//   {
//     xyz: {
//       style: {
//         background: 'red',
//       },
//       // condition: '@media (min-width: 640px)',
//       // colorMode: 'dark',
//     },
//   },
//   'style',
//   'prefix'
// );

export default function App() {
  return (
    <View
    // dataSet={{ media: ids.container }}
    // style={styles.container}
    >
      <Text
      // dataSet={{ media: ids.containershort }}
      // style={styles.containershort}
      >
        Hello Box
      </Text>
    </View>
  );
}
