import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Onboarding from './component/Onboarding';
import BottomTabs from './component/BottomTabs';
import Login from './component/Login';
import SignUp from './component/SignUp';



export default function App() {
  return (
    <View style={styles.ghofrane}>
      {/* <SignUp/> */}
      <Login/> 
      {/* <Onboarding/> */}
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
    
  