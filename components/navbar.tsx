import { Image, StyleSheet, View, Text, Pressable, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { router, Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
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

                <Image source={require('@/assets/layout_imgs/suit.png')} style={styles.logo} />
                <Text style={styles.navbarBrand}>Grife Chic</Text>

            </View>

            <View style={{flexDirection:'row',}}>
                <FontAwesome style={{marginHorizontal:8}} name='instagram' size={30} />
                <FontAwesome style={{marginHorizontal:8}} name='whatsapp' size={30} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    navbar: {
        backgroundColor: 'white',
        height: 60,
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
        userSelect: 'none',
        marginEnd: 8
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