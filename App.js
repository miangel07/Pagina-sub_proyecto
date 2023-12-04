
import { StyleSheet, Button ,Text, View} from 'react-native';

 import Login from './screens/Login.jsx'; 
import AlmacenarReact from './screens/RegistroReact.jsx';
import AlamacenarExpo from './screens/RegistroExpo.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tap=createNativeStackNavigator();
export default function App() {
const   useState=('Home');
  return (
   
  
 <NavigationContainer>
  <Tap.Navigator initialRouteName='Login'>
 <Tap.Screen name='Login' component={Login}/>
 <Tap.Screen name='Expo' component={AlamacenarExpo}/>
 <Tap.Screen name='React' component={AlmacenarReact}/>
  </Tap.Navigator>
 </NavigationContainer>

  
          
  
  );
}



