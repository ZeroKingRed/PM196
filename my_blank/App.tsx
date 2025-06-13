// Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizaTexto = () => { setContenido('State Modificado'); };

  return (
    <Text onPress={actualizaTexto} style={styles.text}>
      {contenido}
    </Text>
  );
};

const Botton = () => {
  const [presionar, setPresiona] = useState('The One Piece');
  const actualizaButton = () => { setPresiona('Is real'); };

  return (
    <Button onPress={actualizaButton} title={presionar} />
  );
};

const Botton2 = () => {
  const [textoBoton, setTextoBoton] = useState('Orehuas');
  const cambiarTexto = () => { setTextoBoton('¡Monkey D. Luffy!'); };

  return (
    <Button onPress={cambiarTexto} title={textoBoton} />
  );
};

// Main
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto />

      <Botton />
      <Botton2 />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
