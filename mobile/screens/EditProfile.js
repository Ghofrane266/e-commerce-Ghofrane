import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import imgp from '../assets/imgp.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 22 }}>
      <View style={{ marginHorizontal: 5, flexDirection: "row", justifyContent: "center" ,marginVertical:15}}>
        <TouchableOpacity style={{ position: "absolute", left: 0 }} onPress={() => navigation.navigate("Profile")}>
          <Feather name="arrow-left" size={26} color="#14366F" />
        </TouchableOpacity>
      <Text style={{ fontWeight: "600", color: "#14366F", fontSize: 18 }}>Edit Profile</Text>
      </View>
      <ScrollView>
        <View style={{alignItems:"center",marginVertical:22}}>
          <TouchableOpacity onPress={{}}>
          <Image source={imgp} style={{height:150,width:150,borderRadius:85,borderWidth:2,borderColor:"#14366F"}}/>
          <View style={{position:"absolute",bottom:0,right:4,zIndex:9999}}>
          <MaterialIcons name="photo-camera" size={32} color="#14366F" />
          </View>
          </TouchableOpacity>
        </View>
      <View >

     <View style={{flexDirection:"column",marginBottom:6}}>
      <Text style={{fontWeight:"500",fontSize:18,color:"#14366F"}}>Full Name :</Text>
      <View style={{height:44,width:"100%",borderColor:"#14366F",borderWidth:1,borderRadius:4,marginVertical:6,justifyContent:"center",paddingLeft:8}}>
        <TextInput placeholder='Name' autoCorrect={false} editable={true} style={{shadowColor:"#14366F"}}/>
      </View>

     </View>
     <View style={{flexDirection:"column",marginBottom:6}}>
      <Text style={{fontWeight:"500",fontSize:18,color:"#14366F"}}>Occupation :</Text>
      <View style={{height:44,width:"100%",borderColor:"#14366F",borderWidth:1,borderRadius:4,marginVertical:6,justifyContent:"center",paddingLeft:8}}>
        <TextInput placeholder='Occupation' autoCorrect={false} editable={true} style={{shadowColor:"#14366F"}}/>
      </View>

     </View>
     <View style={{flexDirection:"column",marginBottom:6}}>
      <Text style={{fontWeight:"500",fontSize:18,color:"#14366F"}}>Email :</Text>
      <View style={{height:44,width:"100%",borderColor:"#14366F",borderWidth:1,borderRadius:4,marginVertical:6,justifyContent:"center",paddingLeft:8}}>
        <TextInput placeholder='Email' autoCorrect={false} editable={true} style={{shadowColor:"#14366F"}}/>
      </View>

     </View>
     <View style={{flexDirection:"column",marginBottom:6}}>
      <Text style={{fontWeight:"500",fontSize:18,color:"#14366F"}}>Address :</Text>
      <View style={{height:44,width:"100%",borderColor:"#14366F",borderWidth:1,borderRadius:4,marginVertical:6,justifyContent:"center",paddingLeft:8}}>
        <TextInput placeholder='Address' autoCorrect={false} editable={true} style={{shadowColor:"#14366F"}}/>
      </View>

     </View>
     <View style={{flexDirection:"column",marginBottom:6}}>
      <Text style={{fontWeight:"500",fontSize:18,color:"#14366F"}}>Phone :</Text>
      <View style={{height:44,width:"100%",borderColor:"#14366F",borderWidth:1,borderRadius:4,marginVertical:6,justifyContent:"center",paddingLeft:8}}>
        <TextInput placeholder='Phone' autoCorrect={false} editable={true} style={{shadowColor:"#14366F"}}/>
      </View>

     </View>
     
        <TouchableOpacity style={{width:134,height:40,justifyContent:"center",alignItems:"center,",backgroundColor:"#14366F",borderRadius:10,marginHorizontal:100}} onPress={() => navigation.navigate("EditProfile")}>
          <Text style={{color:"#fff",fontWeight:"800", textAlign:"center",fontSize:18}}>Save</Text>
        </TouchableOpacity>
      
      </View>





      </ScrollView>






    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})