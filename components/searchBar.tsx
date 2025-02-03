import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchBar() {

    const [focused, setFocused] = useState(false)

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Buscar" />

            <TouchableOpacity>
                <MaterialIcons name="search" size={32} />
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 320,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        margin: 'auto',
        paddingEnd: 8,
    },
    input: {
        width: 320,
        height: 40,
        padding: 16,
        fontSize: 18,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderWidth: 0,
        borderColor: 'transparent',
    },
    isfocused: {
        borderWidth: 0,
        borderColor: 'transparent'
    }
})