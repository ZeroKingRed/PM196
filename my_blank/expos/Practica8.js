import { Alert, View, Text, Button, StyleSheet, Platform } from "react-native";

export default function App() {
  const showAlert = (message) => {
    if (Platform.OS === 'web') {
      window.alert(message);
    } else {
      Alert.alert('Alerta', message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Buttons Test</Text>

      <View style={styles.section}>
        <Text style={styles.description}>Botón básico</Text>
        <Button
          title="Presióname"
          onPress={() => showAlert('¡Botón presionado!')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón de color:</Text>
        <Button
          title="Botón de color"
          color="#f194ff"
          onPress={() => showAlert('¡Botón de color presionado!')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón deshabilitado:</Text>
        <Button
          title="Deshabilitado"
          disabled
          onPress={() => showAlert('No debería ejecutarse')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Dos botones:</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Izquierda"
            onPress={() => showAlert('Botón izquierdo presionado')}
          />
          <View style={styles.buttonSpacer} />
          <Button
            title="Derecha"
            onPress={() => showAlert('Botón derecho presionado')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSpacer: {
    width: 10,
  },
});