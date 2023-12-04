import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react'; 
import react, {useState } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import PantallaUno from './RegistroExpo';
import PantallaDos from './RegistroReact';  */

const RegistroLogin =({navigation}) => {

    return ( 
        <View >
             <View>
      <Text style={{marginTop:80,textAlign:"center",fontWeight:"900"}}>Login</Text>
      
      <TextInput style={style.input} placeholder="ingrese su Usuario"/>
      <TextInput style={style.input} placeholder="ingrese su Contraseña"/>
    <View style={{gap:50,display:"flex"}} >
    <Button  title={'React'} onPress={()=> navigation.push('React')} />
    <Button title={'Expo'} onPress={()=> navigation.push('Expo')} />
    </View>

      
      </View>
<View>

</View>

      
          </View>
    );
  };
 const style =StyleSheet.create({
vista:{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap:30,
    marginTop:200,
    backgroundColor:"#f5f6f7"
},
input:{
    height: 40,
    margin:12,
    padding:10,
    borderWidth:1,
    borderRadius:10,
}
}); 
  export default RegistroLogin
  


