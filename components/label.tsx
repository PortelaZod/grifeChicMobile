import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

type label = {
    name: string,
}


export default function Label(props:label) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelName}>{props.name}</Text>
            
            <Link style={styles.link} href={'/login'}>Ver mais</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:40,
        marginTop:4,
        marginStart:4,
        marginBottom:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:4,
        paddingHorizontal:8
    },
    labelName:{
        fontSize:20,
        margin:0,
    },

    link:{
        fontSize: 16,
        color: '#2294f2ff'
    }

})