import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// 🟠 Home Component
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="red" />
        <Text style={[styles.title, { color: 'red' }]}>
          Bienvenido a la pantalla principal
        </Text>
      </View>
    </View>
  );
}

// 🟢 Detalle Component (Pantalla destino del botón)
function Detalle() {
  return (
    <View style={[styles.container, { backgroundColor: '#eee' }]}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Detalles Usuario</Text>
      <Text style={{ color: 'blue' }}>Usando Navegacion Stack</Text>
    </View>
  );
}

// 🟢 Profile Component con botón azul que navega a Detalle
function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={[styles.title, { color: 'green' }]}>Perfil usuario</Text>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Detalle')}>
          <Text style={styles.buttonText}>Detalles de Usuario</Text>
        </Pressable>
      </View>
    </View>
  );
}

// 🔵 Settings Component
function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="settings-outline" size={28} color="blue" />
        <Text style={[styles.title, { color: 'blue' }]}>
          Configuraciones de usuario
        </Text>
      </View>
    </View>
  );
}

// Navegador de Tabs
const Tab = createBottomTabNavigator();

// Stack Navigator para incluir navegación a Detalle
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

// App principal con navegación por stack (para Detalle)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Detalle" component={Detalle} options={{ title: 'Detalle' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Estilos compartidos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
