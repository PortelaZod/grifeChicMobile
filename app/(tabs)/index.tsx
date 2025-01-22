import ItemCard from '@/components/item_card';
import { Image, StyleSheet, Platform, View, Text, StatusBar, ScrollView, FlatList, Button, Dimensions, TouchableOpacity } from 'react-native';
import { app } from '@/components/firebase';
import { Children, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '@/components/navbar';
import { Link } from 'expo-router';
import Label from '@/components/label';


export default function HomeScreen() {

  interface itens {
    name: string,
    img: string,
    preco: string,
    cod: string,
    grade: string[],
    plus: boolean,
    colecao: string,
  }

  const db = getFirestore(app)
  Dimensions.addEventListener('change', () => setBannerSize(Dimensions.get('window').width))
  const [state, setState] = useState<itens[]>();
  const [item, setItem] = useState('');
  const [bannerSize, setBannerSize] = useState(Dimensions.get('window').width);

  useEffect(() => {

    async function firebaseDados() {
      const data: itens[] = []
      const querySnapshot = await getDocs(collection(db, 'grife_chic'))
      querySnapshot.forEach(item => data.push(item.data() as itens))
      setState(data)
    }
    firebaseDados();
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >

      <Image style={{ width: bannerSize, height: bannerSize - (bannerSize * 0.7), margin: 'auto' }} resizeMode='cover' source={require('@/assets/layout_imgs/Carousel_whtas.jpeg')} />

      <View style={{height:70, marginVertical:8,flexDirection:'row',justifyContent:'space-around'}}>
        <Image style={{width:70,height:70}} resizeMode='contain' source={require('@/assets/layout_imgs/logos/cavalera.png')}/>
        <Image style={{width:70,height:70}} resizeMode='contain' source={require('@/assets/layout_imgs/logos/nike.png')}/>
        <Image style={{width:70,height:70}} resizeMode='contain' source={require('@/assets/layout_imgs/logos/adidas.png')}/>

        <Image style={{width:70,height:70}} resizeMode='cover' source={require('@/assets/layout_imgs/logos/polo2.png')}/>
      </View>

      <View style={{ flex: 1 }}>
        <Label name={'Camisetas nacionais'} />
        <FlatList
          centerContent={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state?.filter(item => item.colecao == 'NACIONAL').slice(0, 4)}
          renderItem={({ item }) =>
            <ItemCard img={item.img} name={item.name} preco={item.preco} cod={item.cod} grade={item.grade} black={false} />
          } />
      </View>

      <View style={{ flex: 1, }}>
        <Label name={'Importadas malha Peruana'} />
        <FlatList centerContent={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state?.filter(item => item.colecao == 'IMPORTADAS_PERUANAS').slice(0, 4)}
          renderItem={({ item }) =>
            <ItemCard img={item.img} name={item.name} preco={item.preco} cod={item.cod} grade={item.grade} black={false} />
          } />
      </View>

      <Image style={{ width: bannerSize, height: bannerSize - (bannerSize * 0.75), margin: 'auto' }} resizeMode='cover' source={require('@/assets/layout_imgs/Promo Black FRIDAY.jpeg')} />

      <View style={{ flex: 1 }}>
        <Label name={'Importadas fio 40.01 '} />
        <FlatList centerContent={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state?.filter(item => item.colecao == 'IMPORTADAS_40.01').slice(0, 4)}
          renderItem={({ item }) =>
            <ItemCard img={item.img} name={item.name} preco={item.preco} cod={item.cod} grade={item.grade} black={true} />
          } />
      </View>

      <View style={{ flex: 1 }}>
        <Label name={'Camisetas Polo'} />
        <FlatList centerContent={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state?.filter(item => item.colecao == 'CAMISETAS_POLO').slice(0, 4)}
          renderItem={({ item }) =>
            <ItemCard img={item.img} name={item.name} preco={item.preco} cod={item.cod} grade={item.grade} black={true} />
          } />
      </View>

      <Image style={{ width: bannerSize, height: bannerSize - (bannerSize * 0.7), margin: 'auto' }} resizeMode='cover' source={require('@/assets/layout_imgs/carousel.jpeg')} />

      <View style={{ flex: 1 }}>
        <Label name={'Bermudas e Shorts'} />
        <FlatList centerContent={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state?.filter(item => item.colecao == 'BERMUDAS_E_SHORTS').slice(0, 4)}
          renderItem={({ item }) =>
            <ItemCard img={item.img} name={item.name} preco={item.preco} cod={item.cod} grade={item.grade} black={false} />
          } />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
