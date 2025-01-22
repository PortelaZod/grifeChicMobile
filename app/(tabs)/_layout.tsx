import Navbar from "@/components/navbar";
import { Slot, Stack, Tabs } from "expo-router";
import { View, StatusBar, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LinkBar from "@/components/linkBar";


export default function Layout() {
    return (

        <View style={styles.main}>
            <StatusBar backgroundColor={'black'} />
            <Navbar />
            <Tabs>

                <Tabs.Screen
                    name="index"
                    options={{
                        headerTitleAlign: 'center',
                        title: 'Inicio',
                        headerTitle: 'Grife Chic | Moda Masculina',
                        headerShown:false,
                        tabBarIcon: () => <Image style={{ width: 24, height: 24 }} source={require('@/assets/layout_imgs/suit.png')} />,
                        // tabBarIcon: ()=> <MaterialCommunityIcons name="home" size={24} />
                    }} />

                <Tabs.Screen
                    name="pesquisa"
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="magnify" size={24} />
                    }} />

                <Tabs.Screen
                    name="sacola"
                    options={{
                        title: 'Sacola',
                        tabBarIcon: () => <MaterialCommunityIcons name="shopping" size={24} />,
                        tabBarBadge: 5
                    }} />

                <Tabs.Screen
                    name="login"
                    options={{
                        headerShown: false,
                        title: 'Conta',
                        tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} />
                    }} />

            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: 'red'
    },
    header: {
        // backgroundColor: 'red'
    },
    stack: {
        // backgroundColor: 'red'
    }
})