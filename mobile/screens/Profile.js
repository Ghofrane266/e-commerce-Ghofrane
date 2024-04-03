import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import imgp from '../assets/imgp.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {useSelector } from 'react-redux'


export default function Profile() {
  const userProfile=useSelector((state)=>state.auth.me)

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: "100%", height: 200, backgroundColor: "#00AFB9" }}>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image source={imgp} resizeMode='contain' style={{ height: 155, width: 155, borderRadius: 999, borderColor: "#fff", borderWidth: 2, marginTop: -90 }} />
        <Text style={{ fontSize: 20, marginVertical: 15, fontWeight: "800" }}>{userProfile.fullName}</Text>
        {/* <Text style={{ fontSize: 17, fontWeight: "400" }}>{userProfile.Occupation}</Text> */}
        <View style={{ flexDirection: "row", marginVertical: 6, alignItems: "center", paddingRight: 5 }}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text style={{ fontWeight: "400", fontSize: 17 }}>{userProfile.address}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 5 }}>
          <Feather name="phone" size={24} color="black" />
          <Text style={{ fontWeight: "400", fontSize: 17 }}>{userProfile.phone}</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 2, alignItems: "center", paddingLeft: 8 }}>
          <Entypo name="email" size={24} color="black" />
          <Text style={{ fontWeight: "500", marginLeft: 5 }}>{userProfile.email}</Text>
        </View>
        <View style={{ flex: 1, paddingVertical: 8, flexDirection: "row", gap: 15 }}>

          <TouchableOpacity>
            <FontAwesome5 name="instagram" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="linkedin" size={30} color="black" style={{ left: 4 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="facebook" size={30} color="black" />

          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", marginBottom: 40 }}>
          <TouchableOpacity style={{ width: 134, height: 40, justifyContent: "center", alignItems: "center,", backgroundColor: "#00AFB9", borderRadius: 10, }} onPress={() => navigation.navigate("EditProfile")}>
            <Text style={{ color: "#fff", fontWeight: "700", textAlign: "center", fontSize: 17 }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>



















    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})