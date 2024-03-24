import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Onboarding from './components/Onboarding';
import BottomTabs from './components/BottomTabs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nextbutton from './components/Nextbutton';
import Home from './screens/Home';



export default function App() {
  return (
    <View style={styles.ghofrane}>
      {/* <SignUp/> */}
      {/* <Login/>  */}
      {/* <Onboarding/> */}
    <Home/>
      {/* <BottomTabs/> */}
    </View>
 
  )

}

const styles = StyleSheet.create({
    ghofrane: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
    });
    
  
