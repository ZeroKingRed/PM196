import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

// 🟢 Profile Component
function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={[styles.title, { color: 'green' }]}>
          Perfil de usuario
        </Text>
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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
});
