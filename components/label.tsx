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
        marginTop:8,
        marginStart:8,
        marginBottom:4,
        paddingVertical:8,
        paddingHorizontal:4,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        // borderBottomWidth:1
    },
    labelName:{
        fontSize:20,
        margin:0,
        userSelect:'none',
        fontWeight:'bold'
    },

    link:{
        fontSize: 16,
        color: '#2294f2ff'
    }

})