import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './components/Onboarding';
import BottomTabs from './components/BottomTabs';
import Login from './components/Login';
import SignUp from './components/SignUp';






export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <View style={{flex:1}}>
    <Provider store={store}>
    <NavigationContainer >
     <Stack.Navigator  initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
     <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
     
    </Stack.Navigator>
    </NavigationContainer>
   
 
    </Provider>
    </View>
  )

}

// const styles = StyleSheet.create({
//     ghofrane: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
       
//       },
//     });
    
  
