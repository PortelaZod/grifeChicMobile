import LinkBar from "@/components/linkBar";
import Navbar from "@/components/navbar";
import { View } from "react-native";
import { app } from "@/components/firebase";
import { getDocs, collection, getFirestore } from "firebase/firestore";

export default function Buscar() {

    return (
        <View>
            <Navbar />
            <LinkBar />
        </View>
    )
}