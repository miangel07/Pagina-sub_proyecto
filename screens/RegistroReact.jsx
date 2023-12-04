import React, { useState, useEffect } from "react";
import { View, Text, TextInput,Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AlmacenarReact = () => {
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [telefono, setTelefono] = useState('');

    const[storedNombre,setStoredNombre]=useState("");
    const[storedUsuario,setStoredUsuario]=useState("");
    const[storedClave,setStoredClave]=useState("");
    const[storedTelefono,setStoredTelefono]=useState("");

    useEffect(() =>{
        //Recuperar el valor almacenado al cargar la aplicacion
        retrieveData();
    }, []);

    const storeData =async ()=>{
        try{
            //almacenar datos en AsyncStorage
            await AsyncStorage.setItem('nombre',nombre);
            await AsyncStorage.setItem('usuario',usuario);
            await AsyncStorage.setItem('clave',clave);
            await AsyncStorage.setItem('telefono',telefono);
            alert('Datos almacenados con exito');
        }catch(error){
            console.error("Error al almacenar datos", error);
        }
    };
    
    const retrieveData= async ()=>{
        try {
            const storedNombre = await AsyncStorage.getItem('nombre');
            const storedUsuario = await AsyncStorage.getItem('usuario');
            const storedClave = await AsyncStorage.getItem('clave');
            const storedTelefono = await AsyncStorage.getItem('telefono');
            if (storedNombre !== null && storedUsuario !== null && storedClave !== null && storedTelefono!==null ){
                setStoredNombre(storedNombre);
                setStoredUsuario(storedUsuario);
                setStoredClave(storedClave);
                setStoredTelefono(storedTelefono);
            }
        } catch (error) {
            console.error("Error al recuperar datos", error);
        }
    };

    return (
    <View style={{ padding:20,backgroundColor:"#f5f6f7" }}>
        <Text style={style.name}>MIGUEL OSORIO</Text>
        <TextInput
        style= {{height:40, borderColor: 'gray', borderWidth:1, marginVertical:10}}
        placeholder="ingrese su nombre"
        value={setNombre}
        onChangeText={(text) => setNombre(text)}
        />

        <TextInput
        style= {{height:40, borderColor: 'gray', borderWidth:1, marginVertical:10}}
        placeholder="ingrese su usuario"
        value={setUsuario}
        onChangeText={(text) => setUsuario(text)}
        />

         <TextInput
        style= {{height:40, borderColor: 'gray', borderWidth:1, marginVertical:10}}
        placeholder="ingrese su clave"
        value={setClave}
        onChangeText={(text) => setClave(text) }secureTextEntry
        />

         <TextInput
        style= {{height:40, borderColor: 'gray', borderWidth:1, marginVertical:10}}
        placeholder="ingrese su telefono"
        value={setTelefono}
        onChangeText={(text) => setTelefono(text)}keyboardType="phone-pad"
        />

        <View style={style.vista} >
            <Button title="Guardar" onPress={storeData}/>
        </View>
        <View style={style.vista} >
            <Button title="Monstrar" onPress={retrieveData}/>
        </View>
        
        <Text  style= {{marginTop:20,textAlign:"center",fontWeight:"900"}}>Valor Nombre: {storedNombre}</Text>
        <Text  style= {{marginTop:20,textAlign:"center",fontWeight:"900"}}>Valor Usuario: {storedUsuario}</Text>
        <Text  style= {{marginTop:20,textAlign:"center",fontWeight:"900"}}>Valor Clave: {storedClave}</Text>
        <Text  style= {{marginTop:20,textAlign:"center",fontWeight:"900"}}>Valor Telefono: {storedTelefono}</Text>
    </View>
    );
};

const style =StyleSheet.create({
    input: {
        height: 40,
        margin:12,
        padding:10,
        borderWidth:1,
        borderRadius:10,
    },
    vista:{
        padding:10
    },
    name:{
  textAlign:"center",
  fontWeight:"900"
    }
});
export default AlmacenarReact; 