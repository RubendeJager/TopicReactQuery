import {useQuery} from "react-query";
import {FlatList, LogBox, Text, View, Dimensions, StyleSheet} from "react-native";
import Country from "./Country";

LogBox.ignoreLogs(['Setting a timer']);

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return await response.json();
}

export default function Countries() {
    const {data, status} = useQuery('countries', fetchCountries);

    return <View>
        {status === 'loading' && (
            <Text>Data is loading...</Text>
        )}

        {status === 'error' && (
            <Text>Error while fetching the data</Text>
        )}

        {status === 'success' && (
            <View style={styles.flatlistContainer}>
                <FlatList data={data} renderItem={Country} keyExtractor={country => country.name.common}/>
            </View>
        )}
    </View>
}

const styles = StyleSheet.create({
    flatlistContainer: {
        width: Dimensions.get("window").width,
        marginTop: 24
    }
})
