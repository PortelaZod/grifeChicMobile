import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useEffect, useState } from "react";
import { app } from '@/components/firebase';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default function Sacola() {


    interface itens {
        name: string,
        img: string,
        preco: string,
        cod: string,
        grade: string[],
        plus: boolean,
        colecao: string,
    }

    const db = getFirestore(app)

    const [state, setState] = useState<itens[]>();


console.log(state)

    useEffect(() => {

        async function firebaseDados() {
            const data: itens[] = []
            const querySnapshot = await getDocs(collection(db, 'grife_chic'))
            querySnapshot.forEach(item => data.push(item.data() as itens))
            setState(data.slice(0,5))
        }
        firebaseDados();
    }, [])

    function ItemSacola(item: any) {

        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: item.img }}></Image>

                <View style={styles.itemInfo}>
                    <Text>{item.name}</Text>
                    <Text>{item.cod}</Text>
                    <Text>{`R$ ${item.preco}`}</Text>
                    <Button color={'red'} title="Remover" onPress={() => setState(state?.filter(selected=> selected.cod != item.cod))}></Button>
                </View>
            </View>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={state} renderItem={({ item }) => <ItemSacola name={item.name} preco={item.preco} img={item.img} cod={item.cod}></ItemSacola>}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginTop: 8
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 8
    },
    itemInfo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})