import { Image, StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, Dimensions, TextInput } from 'react-native';
import { router, Link } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const ViewSize = Dimensions.get('window').width

export default function Navbar() {

    const [relativeSize, setRelativeSize] = useState(ViewSize)
    Dimensions.addEventListener('change', () => setRelativeSize(Dimensions.get('window').width))

    const navIconsSize: number = 24;
    const [state, setState] = useState<boolean>();


    return (
        <View style={styles.navbar}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                {/* <Image source={require('@/assets/layout_imgs/suit.png')} style={styles.logo} /> */}

                <TouchableOpacity onPress={()=> router.replace('/')}>
                    <Text style={styles.navbarBrand}>Grife Chic</Text>
                </TouchableOpacity>


            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                <TouchableOpacity onPress={() => (router.push('/buscar'))}>
                    <MaterialIcons name='search' size={30} style={{ marginHorizontal: 8 }} />
                </TouchableOpacity>

                <FontAwesome style={{ marginHorizontal: 8 }} name='instagram' size={30} />
                <FontAwesome style={{ marginHorizontal: 8 }} name='whatsapp' size={30} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    navbar: {
        backgroundColor: 'white',
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 0
    },

    logo: {
        width: 32,
        height: 32,
        marginEnd: 8,
    },

    navbarBrand: {
        fontSize: 24,
        userSelect: 'none',
        marginEnd: 8,
        fontWeight: 'bold'
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