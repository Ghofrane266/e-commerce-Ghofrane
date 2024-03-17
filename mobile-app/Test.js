import { Text, TextInput, View ,ToutchableOpacity, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Test() {
  return (
    <View style={{flex:1,justifyContent:"center"}}>
     <View style={{alignItems:"center",gap:20}}>
     <Text style={{fontSize:24,color:"black"}}>Login</Text>
      <TextInput placeholder='email' style={{background:"white"}}/>
      <TextInput placeholder='password'style={{background:"white"}}/>
     </View>
    
      <View style={{justifyContent:"center",alignItems:"center",gap:20}}>
      <TouchableOpacity  style={{backgroundColor:"blue" , width:100,height:50,borderRadius:100}}>
        <Text style={{alignItems:"center"}}>Login</Text>
      </TouchableOpacity>
      <Text>Forgot Password</Text>
      </View>
    </View>
  )
}


