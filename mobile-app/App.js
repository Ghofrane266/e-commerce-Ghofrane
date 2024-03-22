import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Test from './Test';
import Onboarding from './component/Onboarding';
import BottomTabs from './component/BottomTabs';




export default function App() {
  return (
    <View style={styles.ghofrane}>
       {/* <Test/> */}
      {/* <Onboarding/> */}
      <BottomTabs/>
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
    
  