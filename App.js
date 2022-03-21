import { StyleSheet, View } from 'react-native';
import {QueryClient, QueryClientProvider} from "react-query";
import Countries from "./components/Countries";
const queryClient = new QueryClient()
export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Countries/>
        </View>
      </QueryClientProvider>
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
