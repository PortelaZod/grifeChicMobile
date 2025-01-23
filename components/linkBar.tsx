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
        <FlatList
            style={{height:50,maxHeight:50,backgroundColor:'black'}}
            showsHorizontalScrollIndicator={false}
            data={links}
            horizontal
            centerContent
            contentContainerStyle={{justifyContent:'space-around',backgroundColor:'black', alignItems:'center',}}
            renderItem={({ item }) =>
                <Link style={{color:'white', fontSize:18,marginHorizontal:8}} href={'..'}>{item.nome}</Link>} />
    )
}
