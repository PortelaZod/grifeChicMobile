import DB from "@/components/db"
import { Text, View } from "react-native"

export default function Itens() {
    
    new DB('grife_chic').getFirebaseData().then(item=> item)

    return (
        <View>
            <Text>pagina 1 </Text>
        </View>
    )
}