import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './components/Onboarding';
import BottomTabs from './components/BottomTabs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function Main() {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.auth?.me);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(me());
      }
    })();
  }, [dispatch]);
  return (

    
    <NavigationContainer >
      {!user?(
     <Stack.Navigator  initialRouteName="Onboarding"screenOptions={{headerShown:false}}>
     <Stack.Screen name="Onboarding" component={Onboarding} />
    

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      
    </Stack.Navigator>
     ):(
      <BottomTabs/>
      )}
      </NavigationContainer>
 
   
  
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
    
  
