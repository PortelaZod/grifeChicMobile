import ItemCard from '@/components/item_card';
import { Image, StyleSheet, Platform, View, Text, StatusBar, ScrollView, FlatList, Button, Dimensions, TextInput } from 'react-native';
import { app } from '@/components/firebase';
import { Children, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '@/components/navbar';
import { SearchBar } from 'react-native-screens';

export default function HomeScreen() {

    const DeviceWidth = Dimensions.get('window').width

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
    const [item, setItem] = useState('');
    const [text,setText] = useState<string>();

    function search(){
        setState(state?.filter(e=> e.name.includes(text)))
    }

    useEffect(() => {

        async function firebaseDados() {
            const data: itens[] = []
            const querySnapshot = await getDocs(collection(db, 'grife_chic'))
            querySnapshot.forEach(item => data.push(item.data() as itens))
            setState(data)
        }
        firebaseDados();
    }, [])

    return (

        <View style={styles.main}>
            <View>
                <TextInput placeholder='PESQUISE' style={{height:50}} onChangeText={(e)=> setText(e) } />
                <Button title='ok' onPress={()=> search()}></Button>
            </View>
            <FlatList
                style={{flex:1}}
                numColumns={DeviceWidth <= 480 ? 2 : 4}
                columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'center', }}
                showsVerticalScrollIndicator={false}
                data={state}
                renderItem={({ item }) => <ItemCard name={item.name} cod={item.cod} grade={item.grade} img={item.img} preco={item.preco}></ItemCard>}
            />

        </View >

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    searchBar:{
        flex:1,
        height:100,
    }
});