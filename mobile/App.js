import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Main from './Main'
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => Main)
export default function App() {
  return (
    
    <Provider  store={store}>
        <Main/>
    </Provider>
  )
}

const styles = StyleSheet.create({})