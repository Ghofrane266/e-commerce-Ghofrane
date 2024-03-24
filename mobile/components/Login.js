import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.hello}>Login here</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Welcome back you've been missed!
        </Text>
      </View>

      <View style={{ marginVertical: 30}} >
        <TextInput style={styles.input} placeholder='Email' />
      </View>
      <View >
        <TextInput style={styles.input} placeholder='Password' />
      </View>
      <View >
        <Text style={styles.forgottext}>
          Forgot your password?
        </Text>

      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.sign}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <Text style={styles.account} >Create new account</Text>
        </TouchableOpacity>
       <View>
        <Text style={styles.continue}>
        Or continue with
        </Text>
       </View>
       <View style={{flexDirection:"row",marginVertical:15,gap:15}}>
        <TouchableOpacity style={styles.google}>
        <Ionicons name="logo-google" size={24} color="#14366F" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name="facebook" size={24} color="#14366F" />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name="apple" size={24} color="#14366F" />
        </TouchableOpacity>
       </View>

    </View>





  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 45,
   fontWeight: '500',
    color: "#00AFB9",
    marginTop:40,
    marginVertical:10

  },
  text: {
    color: "#14366F",
    fontSize: 18,
    fontWeight: "500",
    maxWidth: "70%",
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 10

  },

  input: {
    backgroundColor: "white",
    height: 50,
    width: 300,
    paddingHorizontal: 20,
    elevation: 25,
    shadowColor: "#00AFB9",
    borderRadius: 100
  },
  
  forgottext: {
    left: 70,
    color:"#14366F",
    marginVertical:25,
    fontSize:15,
    fontWeight:"500"
  },
  button:{
    backgroundColor:"#00AFB9",
    width:300,
    height:50,
    borderRadius:100,
    marginVertical:10
    
  },
  sign:{
    color:"white",
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
    marginVertical:10,
  },
  account:{
    fontSize:15,
    color:"#14366F",
    fontWeight:"500",
    marginVertical:20
  },
  continue:{
 fontSize:15,
 color:"#00AFB9",
 fontWeight:"400",
 marginTop:20
 
  }
})