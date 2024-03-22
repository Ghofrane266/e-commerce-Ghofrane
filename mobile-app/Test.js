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
    
     
     <View style={{justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity  style={{backgroundColor:"blue" , width:200,height:35,borderRadius:100,top:20}}>
        <Text style={{textAlign:"center",justifyContent:"center",marginTop:5}}>Login</Text>
      </TouchableOpacity>
      <Text style={{top:10}}>Forgot Password</Text>
      </View>
    </View>
     
  )
}


