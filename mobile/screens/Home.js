import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { getProducts } from '../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import imgp from '../assets/imgp.png'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { screendata } from '../constant/screenData'
import { Button } from 'react-native-paper'



export default function Home() {
  const { width, height } = useWindowDimensions();
  const productStore = useSelector((state) => state?.products.products)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image source={imgp} style={{ width: 45, height: 45, margin: 5, marginVertical: 10 }} />
        </TouchableOpacity>
        <Text style={{ marginVertical: 20, color: "#00AFB9" }}> welcome!</Text>
        
        <MaterialIcons name="notifications-none" size={30} color="#00AFB9" style={{ left: 200, marginVertical: 15 }} />
        < FontAwesome name="search" size={24} color="#00AFB9" style={{ marginVertical: 18, left: 130 }} />
        
      </View>
      {/* <View style={{ flexDirection: "row", backgroundColor: 'white', borderRadius: 50, maxWidth: width, height: 50 }}>
        <Feather name="search" size={24} color="#14366F" style={{ marginVertical: 15, marginHorizontal: 10 }} />
        <TextInput placeholder='Search' placeholderTextColor={"#14366F"} style={{ backgroundColor: "white", maxWidth: width, paddingHorizontal: 110 }} />
      </View> */}

      <FlatList
        horizontal pagingEnabled
        data={screendata}
        renderItem={({ item }) => <Image source={item.url} style={[{ width, objectFit: "cover", height: "100%", marginVertical: 15 }, styles.image]} />}
        keyExtractor={item => item.id}
      />

      {/* ---body-- */}
      <ScrollView >
        <View >
        <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8, color: "#00AFB9", fontWeight: "700" }}>Categories :</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        
        >
        
        <View style={{ flexDirection: "row", marginVertical: 10, gap: 20, paddingHorizontal: 5 }}>
        <View>
        <Image source={require('../assets/photo.png')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 40 }} />
        <TouchableOpacity>
        <Text style={{ left: 8, color: "#14366F" }}>Single Brand</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image source={require('../assets/photo.png')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 40 }} />
                <TouchableOpacity>
                <Text style={{ left: 8, color: "#14366F" }}>Market Places</Text>
                </TouchableOpacity>
                </View>
                <View>
                <Image source={require('../assets/photo.png')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 40 }} />
                <TouchableOpacity>
                <Text style={{ left: 8, color: "#14366F" }}>Online retail shops</Text>
                </TouchableOpacity>
                </View>
                <View>
                <Image source={require('../assets/photo.png')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 40 }} />
                <TouchableOpacity>
                  <Text style={{ left: 8, color: "#14366F" }}>Transcational sites</Text>
                  </TouchableOpacity>
                  </View>
                  <View>
                  <Image source={require('../assets/photo.png')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 40 }} />
                  <TouchableOpacity>
                  <Text style={{ left: 8, color: "#14366F" }}>Auction websites</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                  </ScrollView>
                </View> 

      <View>
          <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8, color: "#00AFB9", fontWeight: "700" }}>
          Our Products :
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >

      <View style={{flexDirection:"row"}}>
      {productStore.map((product)=>{
        <View key={product.id} style={styles.card}>
          <Image source={{uri:product.url}} style={styles.cardImage}/>
          <Text>{product.title}</Text>
          <Text>${product.price}</Text>
          <Button onPress={()=>navigation.navigate("Details",{product})} title="go to details"/>
          </View>
      })

    }

      </View>
    </ScrollView>

     
  




      </View>




       </ScrollView> 




    

</SafeAreaView>







  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",

  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 200,

    }
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  }


}
)