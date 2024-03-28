import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getProduct } from '../store/products';
import { Image } from 'react-native';



export default function Details() {

  const navigation = useNavigation()
  const product = useSelector((state) => state.products.product)
  const route = useRoute();
  const { productId } = route.params;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(productId))

  }, [dispatch, productId]);



  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "700", marginBottom: 15, fontSize: 24, color: "#00AFB9" }}>Product Details:</Text>
      {product && (
        <View key={product.id} style={{ alignItems: "center", padding: 15, marginTop: 10, borderRadius: 15, backgroundColor: "#fff", width: "90%", marginVertical: 10, shadowColor: "#14366F", elevation: 10 }}>
          <Image source={{ uri: product.url }} resizeMode="cover" style={{ width: 100, height: 200, borderRadius: 10, marginVertical: 20 }} />
          <View >
            <Text style={{ color: "#00AFB9", fontWeight: "600", top: 10, fontSize: 20 }}>Product Title:</Text>

            <Text style={{ color: "#14366F", fontWeight: "600", paddingVertical: 10, fontSize: 20 }}>{product.title}</Text>
            <Text style={{ color: "#00AFB9", fontWeight: "600", bottom: 10, fontSize: 20 }}>Price:</Text>

            <Text style={{ color: "#14366F", fontWeight: "600", bottom: 10, fontSize: 20 }}>${product.price}</Text>
            <Text style={{ color: "#00AFB9", fontWeight: "700", bottom: 10, fontSize: 20 }}>Description:</Text>

            <Text style={{ color: "#14366F", fontWeight: "600", bottom: 10, textAlign: "center", paddingRight: 10, right: 4, fontSize: 18 }}>{product.description}</Text>

          </View>
          <TouchableOpacity style={{ backgroundColor: "#00AFB9", width: "50%", alignSelf: "center", height: 30, borderRadius: 100, marginVertical: 10 }} onPress={{}} >
            <Text style={{ textAlign: "center", color: "white", fontWeight: '600', top: 5 }}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


})