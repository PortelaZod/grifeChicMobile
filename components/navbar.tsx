import { Image, StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList,Dimensions } from 'react-native';
import { router, Link } from 'expo-router';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';

const ViewSize = Dimensions.get('window').width

export default function Navbar() {

    const [relativeSize, setRelativeSize] = useState(ViewSize)
    Dimensions.addEventListener('change', ()=> setRelativeSize(Dimensions.get('window').width))

    const links = [
        {
            nome: 'Camisetas Nacionais',
            id: 1
        },
        {
            nome: 'Importadas',
            id: 2
        },
        {
            nome: 'Polo',
            id: 4
        },
        {
            nome: 'Bermudas e Shorts',
            id: 5
        },
    ]

    const navIconsSize: number = 24;
    const [state, setState] = useState<boolean>();


    return (
        <View style={styles.navbar}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* <Image source={require('@/assets/layout_imgs/suit.png')} style={styles.logo} /> */}
                <Text style={styles.navbarBrand}>Grife Chic</Text>

            </View>

            {links.map(link => <Link key={link.id} style={{ color: 'white', fontSize: 18, display:relativeSize < 768 ? 'none' : 'flex' }} href={'..'}>{link.nome}</Link>)}

        </View>
    );
}

const styles = StyleSheet.create({

    navbar: {
        backgroundColor: 'black',
        height: 50,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        width: 32,
        height: 32,
        marginEnd: 8,
    },

    navbarBrand: {
        fontSize: 24,
        color: 'white',
        userSelect:'none'
    },

    iconsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    navbarIcons: {
        marginHorizontal: 8
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    bagLength: {
        color: 'red',
    },


});