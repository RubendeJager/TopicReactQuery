import {FlatList, LogBox, Text, View, Dimensions, StyleSheet} from "react-native";
import Country from "./Country";
import {useEffect, useState} from "react";

LogBox.ignoreLogs(['Setting a timer']);



export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const fetchCountries = async () => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const responseJSON = await response.json();
            setCountries(responseJSON);
        } catch (error) {
            setError(true);
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    return <View style={styles.flatlistContainer}>
        {isLoading &&
            <Text>Data is loading...</Text>
        }

        {isError &&
            <Text>Error while fetching the data</Text>
        }

        {!isLoading && !isError &&
            <View>
                <FlatList data={countries} renderItem={Country} keyExtractor={country => country.name.common}/>
            </View>
        }


    </View>
}

const styles = StyleSheet.create({
    flatlistContainer: {
        width: Dimensions.get("window").width,
        marginTop: 24
    }
})
