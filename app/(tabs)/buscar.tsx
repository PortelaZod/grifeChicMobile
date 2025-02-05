import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import DB from "@/components/db";
import ItemCard from "@/components/item_card";

type itens = {
    name: string,
    img: string,
    preco: string,
    cod: string,
    grade: string[],
    plus: boolean,
    colecao: string,
};

type fun = (search: string) => void;

export default function Buscar() {

    const [data, setData] = useState<itens[]>([]);
    const [onFocus, setOnFocus] = useState(false);
    const [search, setSearch] = useState<string>('');

    class searches {
        id;
        value;

        constructor(id: number, value: string) {
            this.id = id;
            this.value = value;
        }
    }

    const quickSearches = [
        new searches(1, 'Camiseta'),
        new searches(2, 'Bermuda'),
        new searches(3, 'Regata'),
        new searches(4, 'Plus size')
    ]

    useEffect(() => {
        async function firebaseData() {
            const data = await new DB('grife_chic').getFirebaseData()
            setData(data)
        }
        firebaseData()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <View style={{ backgroundColor: "black", alignItems: "center", flexDirection: "row", }}>

                <View style={styles.seachBar}>
                    <TextInput placeholder="Buscar" value={search} style={[styles.input, { outline: "none" }]} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} onChangeText={text => setSearch(text)} />

                    <MaterialIcons name="search" style={{ display: search != '' ? 'none' : 'flex' }} size={28} />

                    <TouchableOpacity onPress={() => (setSearch(''))} >
                        <MaterialIcons name="close" style={{ display: search != '' ? 'flex' : 'none' }} size={28} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={() => alert('oi')}>
                    <MaterialIcons name="filter-list" color={'white'} size={28} style={{ marginHorizontal: 8 }} />
                </TouchableOpacity>

            </View>

            <ScrollView style={{ display: search != '' ? 'none' : 'flex' }}>
                {quickSearches.map(item => <QuickSearch key={item.id} f={setSearch as fun} x={item.value} />)}
            </ScrollView>


            <FlatList style={{ display: search === '' ? 'none' : 'flex' }} showsVerticalScrollIndicator={false} numColumns={2} data={data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))} renderItem={({ item }) => <ItemCard cod={item.cod} grade={item.grade} img={item.img} name={item.name} preco={item.preco} key={item.cod} />} />

        </View >
    )
}

function QuickSearch({ x, f }: { x: string, f: fun }) {

    return (
        <TouchableOpacity onPress={() => f(x)}>
            <View style={{ flexDirection: "row", padding: 8, alignItems: "center" }}>
                <MaterialIcons name="search" color={'#0d6dfcff'} style={{ marginInlineEnd: 8 }} size={20} />
                <Text style={{ fontSize: 18 }} >{x}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    seachBar: {
        flex: 1,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        marginInlineStart: 16,
        marginBlock: 8,
        backgroundColor: "white",
    },

    input: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        height: 40,
        fontSize: 18
    }
})