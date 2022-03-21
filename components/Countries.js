import {FlatList, LogBox, Text, View, Dimensions, StyleSheet} from "react-native";
import Country from "./Country";

LogBox.ignoreLogs(['Setting a timer']);


export default function Countries() {

    return <View>

        {/*<View style={styles.flatlistContainer}>
            <FlatList data={data} renderItem={Country} keyExtractor={country => country.name.common}/>
        </View>*/}
        )}
    </View>
}

const styles = StyleSheet.create({
    flatlistContainer: {
        width: Dimensions.get("window").width,
        marginTop: 24
    }
})
