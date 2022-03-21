import {View, Text, StyleSheet} from "react-native";

export default function Country({item: country}) {
    return <View style={styles.container} item={country}>
        <Text style={styles.name}>{country.name.common}</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        padding: 5,
        paddingLeft: 9
    },
    name: {
        fontSize: 22
    }
})
