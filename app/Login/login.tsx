import { useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getDocs, collection, getDoc, getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/components/firebase";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Link, router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Login() {


    type data = {
        bairro: string,
        cep: string,
        email: string,
        endereco: string,
        nome: string,
        sobrenome: string,
        tel: string
    }

    // const navigate = useNavigation()
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [user, setUser] = useState<data>();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const uid = user.uid;
                const docRef = doc(db, 'users', uid);
                const docSnap = getDoc(docRef)
                docSnap.then(item => {
                    const data = item.data();
                    setUser(data as data)
                })

            } else {
                console.log('usuario deslogado')
            }
        })
    }, [])

    const auth = getAuth();
    const db = getFirestore(app);

    function logar(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user.uid)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    return (
        <View style={styles.main}>

            <View style={styles.container}>

                {/* <TouchableOpacity onPress={()=> router.back()}>
                <MaterialCommunityIcons name="arrow-left" size={24} style={styles.arrow}></MaterialCommunityIcons>
            </TouchableOpacity> */}

                {/* <Text style={styles.icon}>Login</Text> */}

                <Image style={styles.logo} source={require('@/assets/layout_imgs/suit.png')} />

                <TextInput style={styles.input} placeholder="E-mail" onChangeText={(email: string) => setEmail(email)}></TextInput>
                <TextInput style={styles.input} placeholder="Senha" onChangeText={(senha: string) => setSenha(senha)} ></TextInput>

                <Button title="Entrar" color={'black'} onPress={() => logar(email ? email : '', senha ? senha : '')} />

                <Button title="logOut" color={'black'} onPress={() => signOut(auth)} />

                <Text>{user?.nome}</Text>

                <Link href='..' style={styles.link}>Criar Conta</Link>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        gap: 8,
        maxWidth: 350,
        minWidth: 320,
        zIndex:3
    },
    link: {
        textAlign: "center",
        marginHorizontal: 16,
        textDecorationLine: 'underline',
        color: '#2294f2ff',
        fontSize: 20,
    },
    icon: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
    logo: {
        width: 45,
        height: 45,
        marginHorizontal: 'auto',
        marginVertical: 8,
    },
    input: {
        height: 50,
        borderBlockColor: 'black',
        fontSize: 18,
        paddingHorizontal: 16,
    },
    arrow: {
        position: 'fixed',
        top: 16,
        margin: 16

    },
    main: {
        flex: 1,
        margin: 'auto'
    },

    dnone: {
        display: 'none'
    }

})

