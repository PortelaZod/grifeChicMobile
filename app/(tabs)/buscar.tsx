import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { app } from "@/components/firebase";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import DB from "@/components/db";
import ItemCard from "@/components/item_card";

export default function Buscar() {

    type itens = {
        name: string,
        img: string,
        preco: string,
        cod: string,
        grade: string[],
        plus: boolean,
        colecao: string,
    }

    const [data, setData] = useState<itens[]>([]);
    const [onFocus, setOnFocus] = useState(false);
    const [search, setSeach] = useState<string>('');

    useEffect(() => {
        async function firebaseData() {
            const data = await new DB('grife_chic').getFirebaseData()
            setData(data)
        }
        firebaseData()
    }, [])

    console.log(search)

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <View style={styles.seachBar}>
                <TextInput placeholder="Buscar" value={search} style={styles.input} onFocus={() => setOnFocus(true)} onBlur={() => [setOnFocus(false)]} onChangeText={text => setSeach(text)} />

                <MaterialIcons name="search" style={{ display: onFocus === false ? 'flex' : 'none' }} size={28} />

                <TouchableOpacity onPress={() => [setOnFocus(false), setSeach('')]}>
                    <MaterialIcons name="close" color={'white'} style={{ backgroundColor: 'black', display: onFocus === false ? 'none' : 'flex' }} size={28} />
                </TouchableOpacity>

            </View>

            <FlatList style={{ display: search === '' ? 'none' : 'flex' }} showsVerticalScrollIndicator={false} numColumns={2} data={data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))} renderItem={({ item }) => <ItemCard cod={item.cod} grade={item.grade} img={item.img} name={item.name} preco={item.preco} key={item.cod} />} />

        </View>
    )
}

const styles = StyleSheet.create({
    seachBar: {

        borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
        marginHorizontal: 'auto',
        marginBlock: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },

    input: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: 'white'
    }
})