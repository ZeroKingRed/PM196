//Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useStat } from 'react';


const Texto=()=>{
    const [contenido, setContenido]=useState('¨Hola Mundo')
    const actualizaTexto=()=>{setContenido('State Modificado')}
    return(
        <Text onPress={actualizaTexto}>{contenido} </Text>
    )
}

//Main

export default function App() {
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />      

      <Texto>"hola"</Texto>  
      <Texto>"Mundo"</Texto> 
      <Texto>"React Native"</Texto>

      <Button title="Presioname"/>

    </View>


  );
}
//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});