import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import img10 from '../assets/img10.jpg'
import img from '../assets/img.jpg'
import { Image } from 'react-native'
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { screendata } from '../constant/screenData'

import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { marginTop: 30 }]}>
      <Text style={{ fontSize: 18, fontWeight: "500", color: "#14366F" }}>Home</Text>
      <View style={{ width, height: "25%" }}>
        <Text style={styles.title}>Enjoy 30% off on select Items!</Text>
        <FlatList 
        horizontal pagingEnabled
        data={screendata}
        renderItem={({item}) => <Image source={item.url} style={[{width, objectFit: "cover",height:"100%"},styles.image]} />}
        keyExtractor={item => item.id}
      />
       
        <TouchableOpacity style={[styles.button, { justifyContent: "flex-end" }]}>
          <Text style={styles.text}>Shop now</Text>
          <Ionicons name="cart-outline" size={24} color="#14366F" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={{ flexDirection:"row",fontSize: 20, fontWeight: "500", color: "#14366F", marginVertical: 10, right: 100 }}>Recommended</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}

      >

        <View style={{ flexDirection: "row", marginVertical: 10, gap: 20,paddingHorizontal:5 }}>
          <Image source={require('../assets/img4.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />
          <Image source={require('../assets/img5.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />
          <Image source={require('../assets/img6.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />
          <Image source={require('../assets/img7.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />
          <Image source={require('../assets/img8.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />
          <Image source={require('../assets/img9.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 30 }} />


        </View>
      </ScrollView>
      <Text style={{ flexDirection:"row",fontSize: 20, fontWeight: "500", color: "#14366F", marginVertical: 5, right: 115 }}>Best Sellers</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
     
      >

        <View style={{  flexDirection:"row",gap: 20, marginBottom: 100 ,paddingHorizontal:5}}>
          <View>
            <Image source={require('../assets/img7.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>15$</Text>

          </View>
          <View>
            <Image source={require('../assets/img9.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>20$</Text>

          </View>
          <View>
            <Image source={require('../assets/img3.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>30$</Text>

          </View>
          <View>
            <Image source={require('../assets/img1.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>20$</Text>

          </View>
          <View>
            <Image source={require('../assets/img8.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>20$</Text>

          </View>
          <View>
            <Image source={require('../assets/img2.jpg')} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }} />
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>plante de serpent</Text>
            <Text style={{ color: "#2C7865", fontWeight: "600" }}>20$</Text>

          </View>

        </View>
      </ScrollView>
    
          

    
            


    </View>


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
  button: {
    position: "absolute",
    width: 120,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#D9EDBF",
    marginVertical: 100
  },
  text: {
    textAlign: "center",
    top: 19,
    color: "#14366F",
    fontWeight: "500",
    marginHorizontal: 18,
    left: 10
  },
  icon: {
    marginHorizontal: 8,

  },
  title: {
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    color: "#14366F",
    fontWeight: "800",
    // marginHorizontal:18,
    zIndex: 2,
    fontSize: 28,
    marginVertical: 20

  }
})