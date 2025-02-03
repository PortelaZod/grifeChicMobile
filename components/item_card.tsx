import { router } from "expo-router";
import { memo, useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

export type ItemProps = { name: string, img: string, cod: string, grade: string[], preco: string, black: boolean };


function ItemCard(dados: ItemProps) {

    const [windowSize, SetWindowSize] = useState({
        width: Dimensions.get('window').width * 0.23,
        heigth: Dimensions.get('window').height,
    });

    const [mobileSize, setMobileSize] = useState({
        width: Dimensions.get('window').width * 0.6,
        heigth: Dimensions.get('window').height,
    });

    let windowSizeEvent = Dimensions.addEventListener('change', () => {

        SetWindowSize({
            width: Dimensions.get('window').width * 0.23,
            heigth: Dimensions.get('window').height,
        })

        setMobileSize({
            width: Dimensions.get('window').width * 0.43,
            heigth: Dimensions.get('window').height,
        })
    })

    const parcelado = parseFloat(dados.preco) / 3
    const valor = parcelado + (parcelado * 0.05)
    const desconto = parseFloat(dados.preco);
    const valorDesconto = desconto + (desconto * 0.1)
    const [display, setDisplay] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log(dados)}>
                <View style={{ overflow: 'hidden' }}>
                    <Image
                        onLoadEnd={() => setDisplay(false)}
                        resizeMode="cover"
                        style={{
                            width: Dimensions.get('window').width <= 768 ? mobileSize.width : windowSize.width,
                            height: Dimensions.get('window').width <= 768 ? mobileSize.width : windowSize.width + windowSize.width * 0.25
                        }}
                        source={{ uri: dados.img }}>
                    </Image>
                </View>

                <View style={[styles.cardBody]}>
                    <Text style={[styles.itemNome, { width: Dimensions.get('window').width <= 768 ? mobileSize.width : windowSize.width, }]}>{dados.name}</Text>
                    <Text style={styles.itemCod}>{dados.cod}</Text>
                    <Text style={styles.itemGrade}>{dados.grade.toString().replaceAll(',', ' | ')}</Text>
                    <Text style={styles.itemDesconto}>{`R$ ${valorDesconto.toFixed(2)}`}</Text>
                    <Text style={styles.itemPreco}>{`R$ ${dados.preco}`}</Text>
                    <Text style={styles.itemParcelado}>{`3x R$ ${valor.toFixed(2)}`}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default ItemCard

const styles = StyleSheet.create({
    container: {
        margin: 4,
        overflow: 'hidden',
        backgroundColor: 'white',
    },

    cardBody: {
        minWidth: 137,
        flex: 1
    },

    itemNome: {
        fontSize: 18,
        textAlign: 'left',
        minWidth: 137,
    },

    itemCod: {
        fontSize: 14,
        opacity:.6
    },

    itemGrade: {
        fontSize: 14,
        color: '#B00101',
        fontWeight:'bold'
    },
    itemDesconto: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        // color:'#a5abb0ff',
        opacity: .6
    },

    itemPreco: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    itemParcelado: {
        fontSize: 14
    }

})