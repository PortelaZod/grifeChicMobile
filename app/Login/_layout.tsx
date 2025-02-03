import { View } from "react-native";
import { Slot } from "expo-router";
import Navbar from "@/components/navbar";
import LinkBar from "@/components/linkBar";

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            <Slot></Slot>
        </View>
    )
}