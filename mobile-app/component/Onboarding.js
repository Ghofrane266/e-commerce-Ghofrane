import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { data } from '../constant/OnboardingData'

export default function Onboarding() {
    const {width}=useWindowDimensions()
  return (
    <View style={styles.contain} >
    <FlatList horizontal pagingEnabled
        data={data}
        renderItem={({item}) => <Image style={{width:width,height:800,objectFit:"cover"}} source={item.url} title={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})