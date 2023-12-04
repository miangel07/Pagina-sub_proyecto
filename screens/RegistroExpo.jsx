import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';


const RegistroExpo=()=>{
    const[nombre,setNombre]=useState("");
    const[usuario,setUsuario]=useState("");
    const[clave,setClave]=useState("");
    const[telefono,setTelefono]=useState("");

    const[storedNombre,setStoredNombre]=useState("");
    const[storedUsuario,setStoredUsuario]=useState("");
    const[storedClave,setStoredClave]=useState("");
    const[storedTelefono,setStoredTelefono]=useState("");

    useEffect(()=>{
        recuperarDatos();
    },[]);
    const guardarDatos=async()=>{
        try {
            await SecureStore.setItemAsync("nombre",nombre);
            await SecureStore.setItemAsync("usuario",usuario);
            await SecureStore.setItemAsync("clave",clave);
            await SecureStore.setItemAsync("telefono",telefono);
            
        } catch (error) {
            console.error("error al guardar datos.",error);           
        }
    };

    const recuperarDatos=async()=>{
        try {
            const storedNombre = await SecureStore.getItemAsync("nombre");
            const storedUsuario = await SecureStore.getItemAsync("usuario"); 
            const storedClave = await SecureStore.getItemAsync("clave"); 
            const storedTelefono = await SecureStore.getItemAsync("telefono"); 

            if(storedNombre !== null && storedUsuario !== null && storedClave !== null && storedTelefono!==null){
                setStoredNombre(storedNombre);
                setStoredUsuario(storedUsuario);
                setStoredClave(storedClave);
                setStoredTelefono(storedTelefono);
            }
           
        } catch (error) {
            console.error("error al recuperar datos",error);
        }

    };
    return (
        <View style={styles.contenedor}>
            <Text style={styles.name}>MIGUEL OSORIO</Text>
        <TextInput style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        />
        <TextInput style={styles.input}
        placeholder='Usuario'
        value={usuario}
        onChangeText={(text)=>setUsuario(text)}/>

        <TextInput style={styles.input}
     
        placeholder='clave'
        value={clave}
        onChangeText={(text)=>setClave(text)} secureTextEntry/>
        
        <TextInput style={styles.input}
        placeholder='telefono'
        value={telefono}
        onChangeText={(text)=>setTelefono(text)} keyboardType="phone-pad"/>

        <View style={styles.vista}>
        <Button title="Guardar Datos" onPress={guardarDatos} />
        </View>
        <View style={styles.vista}>
        <Button title="Mostrar Datos" onPress={recuperarDatos} />
        </View>
        <Text style={styles.name}>Nombre almacenado: {storedNombre}</Text>
        <Text style={styles.name}>usuario almacenado: {storedUsuario}</Text>
        <Text style={styles.name}>clave almacenado: {storedClave}</Text>
        <Text style={styles.name}>telefono almacenado: {storedTelefono}</Text>
        </View>
        );
        }
        const styles = StyleSheet.create({
        input:{
        height: 40,
        margin: 20 ,
        padding:5,
        borderWidth: 1,
        borderRadius:0,
        },
        name:{
            textAlign:"center",
            fontWeight:"900"

        },

        vista:{
        display:"flex",
        color:"white",
        padding:10,
        width:350,
        backgroundColor: '',
        }
        });
        
        export default RegistroExpo

