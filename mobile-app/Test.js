import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Test() {
  return (
    <View style={{flex:1}}>
     <View style={{alignItems:"center"}}>
     <Text style={{fontSize:24,color:"black"}}>Login</Text>
      <TextInput placeholder='email' style={{background:"white"}}/>
      <TextInput placeholder='password'style={{background:"white"}}/>
      <ToutchableOpacity>
        <Text>Login</Text>
      </ToutchableOpacity>

     </View>

    </View>
  )
}

const styles = StyleSheet.create({})
