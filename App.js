import { StyleSheet, View } from 'react-native';
import Countries from "./components/Countries";
export default function App() {
  return (
        <View style={styles.container}>
          <Countries/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
