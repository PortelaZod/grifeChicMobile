import { Link, router } from "expo-router"

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
        <View style={{paddingVertical:16,backgroundColor:'black'}}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={links}
                horizontal
                centerContent
                contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center' }}
                renderItem={({ item }) =>
                    <Link style={{ color: 'white', fontSize: 18, marginHorizontal: 8,marginVertical:0 }} href={'..'} >{item.nome}</Link>} />

        </View>
    )
}
