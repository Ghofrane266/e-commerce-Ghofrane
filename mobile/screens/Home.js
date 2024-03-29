import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { getProducts } from '../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import imgp from '../assets/imgp.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { screendata } from '../constant/screenData'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { logout } from '../store/auth'
import { searchProduct } from '../store/data'


export default function Home() {
  const { width, height } = useWindowDimensions();
  const productStore = useSelector((state) => state.products.products);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const searchData = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(searchProduct())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flexDirection: "row" }}>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileStack")}>
          <Image source={imgp} style={{ width: 50, height: 50, margin: 8, marginVertical: 10, borderRadius: 100 }} />
        </TouchableOpacity>
        <Text style={{ marginVertical: 22, color: "#00AFB9" }}> welcome!</Text>
        <MaterialIcons name="notifications-none" size={30} color="#00AFB9" style={{ left: 140, marginVertical: 15 }} />

        <TouchableOpacity onPressIn={() => dispatch(logout())}>
          <AntDesign name="logout" color="#00AFB9" size={22} style={{ left: 160, marginVertical: 20 }} />
        </TouchableOpacity>

      </View>
      <View style={{
        backgroundColor: "#fff", flexDirection: "row", paddingVertical: 9, borderRadius: 16
        , marginVertical: 8,
        shadowColor: "#00AFB9",
        elevation: 8,
        width: "96%",
        left: 8
      }}>
        < FontAwesome name="search" size={20} color="#00AFB9" style={{ paddingLeft: 15, top: 4 }} />
        <TextInput style={{ paddingLeft: 20, fontSize: 16 }} placeholder='search' onChange={dispatch(getProducts())} />
      </View>


      <ScrollView  >

        <FlatList

          horizontal pagingEnabled
          data={screendata}
          renderItem={({ item }) => <Image source={item.url} style={[{ width, objectFit: "cover", height: 210, marginVertical: 15, borderRadius: 30 }, styles.image]} />}
          keyExtractor={(item) => item.id.toString()}
        />

        {/* */}

        {/* ---body-- */}
        <View >
          <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8, color: "#00AFB9", fontWeight: "700" }}>Categories :</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

          >

            <View style={{ flexDirection: "row", marginVertical: 10, gap: 20, paddingHorizontal: 5 }}>



              <TouchableOpacity style={{ backgroundColor: "#14366F", width: "20%", height: 40, borderRadius: 100 }}>
                <Text style={{ color: "#fff", top: 10, textAlign: "center", fontWeight: '500' }}>Single Brand</Text>
              </TouchableOpacity>



              <TouchableOpacity style={{ backgroundColor: "#14366F", width: "20%", height: 40, borderRadius: 100 }}>
                <Text style={{ textAlign: "center", color: "#fff", top: 10, fontWeight: '500' }}>Market Places</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: "#14366F", width: "20%", height: 40, borderRadius: 100 }}>
                <Text style={{ textAlign: "center", color: "#fff", top: 10, fontWeight: '500' }}>Online retail shops</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: "#14366F", width: "20%", height: 40, borderRadius: 100 }}>
                <Text style={{ textAlign: "center", color: "#fff", top: 10, fontWeight: '500' }}>Transcational sites</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "#14366F", width: "16%", height: 40, borderRadius: 100 }}>
                <Text style={{ textAlign: "center", color: "#fff", fontWeight: '500' }}>Auction websites</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8, color: "#00AFB9", fontWeight: "700" }}>
            Our Products :
          </Text>
          <ScrollView>


            {productStore && productStore.items.map((product) => (
              <View key={product.id} style={{ flexDirection: "row", alignItems: "center", padding: 15, marginTop: 10, borderRadius: 15, backgroundColor: "#fff", width: "90%", left: 18, marginVertical: 10, shadowColor: "#14366F", elevation: 10 }}>
                <Image source={{ uri: product.url }} resizeMode="cover" style={{ width: 100, height: 100, borderRadius: 10, }} />
                <View style={{ width: "65%", paddingHorizontal: 20 }}>
                  <Text style={{ flex: 1, color: "#14366F", fontWeight: "600", paddingVertical: 15 }}>{product.title}</Text>
                  <Text style={{ flex: 1, color: "#14366F", fontWeight: "600", bottom: 10 }}>${product.price}</Text>
                  <TouchableOpacity style={{ backgroundColor: "#14366F", width: "50%", alignSelf: "center", height: 30, borderRadius: 100 }} onPress={() => navigation.navigate("Details", { productId: product.id })} >
                    <Text style={{ textAlign: "center", color: "white", fontWeight: '600', top: 5 }}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))

            }


          </ScrollView>







        </View>




      </ScrollView>






    </SafeAreaView>







  )
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {

    justifyContent: "center",

  },


})
