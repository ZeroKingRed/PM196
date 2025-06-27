import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  /* ---------------- Splash ---------------- */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 s de splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Cargando…</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  /* ---------------- Registro ---------------- */
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [acepta, setAcepta] = useState(false);

  const registrar = () => {
    if (!nombre.trim() || !email.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    if (!acepta) {
      Alert.alert(
        'Términos no aceptados',
        'Debes aceptar los términos y condiciones.'
      );
      return;
    }
    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nEmail: ${email}`);
    // Si quieres reiniciar el formulario:
    setNombre('');
    setEmail('');
    setAcepta(false);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#9ca3af"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.termsRow}>
            <Text style={styles.termsText}>
              Aceptar términos y condiciones
            </Text>
            <Switch
              value={acepta}
              onValueChange={setAcepta}
              thumbColor={acepta ? '#00c853' : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#a7f0ba' }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={registrar}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

/* ---------------- Estilos ---------------- */
const styles = StyleSheet.create({
  /* Splash */
  splash: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: { color: 'white', fontSize: 28, marginBottom: 20 },

  /* Fondo general */
  background: { flex: 1 },

  /* Contenedor para centrar el formulario */
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  /* Tarjeta semitransparente */
  form: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: 24,
    borderRadius: 12,
  },

  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },

  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#ffffff',
    marginBottom: 12,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  termsText: { color: '#ffffff', fontSize: 14, flex: 1, paddingRight: 10 },

  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
