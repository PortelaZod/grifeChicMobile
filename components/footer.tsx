import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Footer() {


    const marcas = [
        {
            id: 1,
            nome: 'Tommy Hilfiger',
        },
        {
            id: 2,
            nome: 'Calvin Klein',
        },
        {
            id: 3,
            nome: 'Boss',
        },
        {
            id: 4,
            nome: 'Jhon Jhon',
        },
        {
            id: 5,
            nome: 'Lacoste',
        },
        {
            id: 6,
            nome: 'Colci',
        },
        {
            id: 7,
            nome: 'Reserva',
        },
    ]

    const tamanhos = [
        {
            id: 1,
            tam: 'P'
        },
        {
            id: 2,
            tam: 'M'
        },
        {
            id: 3,
            tam: 'G'
        },
        {
            id: 4,
            tam: 'GG'
        },
        {
            id: 8,
            tam: '38'
        },
        {
            id: 9,
            tam: '39'
        },
        {
            id: 10,
            tam: '40'
        },
        {
            id: 11,
            tam: '41'
        },
        {
            id: 12,
            tam: '42'
        },
        {
            id: 13,
            tam: '44'
        },
        {
            id: 14,
            tam: 'Plus Size'
        },

    ]

    return (
        <View>
            <View style={{ marginBottom: 8 }}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', userSelect: 'none', marginVertical: 8 }}>Tamanhos</Text>

                <View style={{ backgroundColor: 'black', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {tamanhos.map(item => <Link style={styles.links} key={item.id} href={'..'}>{item.tam}</Link>)}
                </View>

            </View>

            {/* <Image style={{ width: bannerSize, height: bannerSize - (bannerSize * 0.7), margin: 'auto' }} resizeMode='cover' source={require('@/assets/layout_imgs/Promo Black FRIDAY.jpeg')} /> */}

            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', userSelect: 'none', marginTop: 8 }}>Marcas</Text>
                <View style={{ height: 70, marginVertical: 16, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 4 }}>
                    <Image style={{ width: 70, height: 70 }} resizeMode='contain' source={require('@/assets/layout_imgs/logos/cavalera.png')} />
                    <Image style={{ width: 70, height: 70 }} resizeMode='contain' source={require('@/assets/layout_imgs/logos/nike.png')} />
                    <Image style={{ width: 70, height: 70 }} resizeMode='contain' source={require('@/assets/layout_imgs/logos/adidas.png')} />
                    <Image style={{ width: 70, height: 70 }} resizeMode='cover' source={require('@/assets/layout_imgs/logos/polo2.png')} />
                </View>
                <View style={{ backgroundColor: 'black', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {marcas.map(item => <Link style={styles.links} key={item.id} href={'..'}>{item.nome}</Link>)}
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    links: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 16,
        marginVertical: 16
    }
});