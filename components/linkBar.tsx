import { Link } from "expo-router"
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"

type li = {
    nome: string,
    id: number
}

export default function LinkBar() {

    const links = [
        {
            nome: 'Camisetas Nacionais',
            id: 1
        },
        {
            nome: 'Importadas Malha Peruana',
            id: 2
        },
        {
            nome: 'Importadas Fio 40.01',
            id: 3
        },
        {
            nome: 'Camisetas Polo',
            id: 4
        },
        {
            nome: 'Bermudas e Shorts',
            id: 5
        },
    ]

    return (
        <ScrollView
            horizontal
            centerContent
            showsHorizontalScrollIndicator={false}
            >
            {links.map(item=> <View style={styles.main}><Link href={'/'} style={styles.title}>{item.nome}</Link></View>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',

        display:'flex',
        alignItems:'center'

    },
    title: {
        color: 'white',
        marginHorizontal: 8,
        marginVertical: 0,
        padding: 8,
        fontSize: 20,
    },
})