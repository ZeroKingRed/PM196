import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  TextInput,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const KEYBOARD_MODES = Platform.OS === 'ios'
  ? ['none', 'on-drag', 'interactive']  
  : ['none', 'on-drag'];   
const App = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [horizontal, setHorizontal] = useState(false);
  const [showIndicators, setShowIndicators] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [bounces, setBounces] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(false);

  const [keyboardIdx, setKeyboardIdx] = useState(0);
  const keyboardDismissMode = KEYBOARD_MODES[keyboardIdx];

  const [text, setText] = useState('');

  const scrollToEnd = () => {
    if (scrollViewRef.current?.scrollToEnd) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const changeKeyboardMode = () =>
    setKeyboardIdx((i) => (i + 1) % KEYBOARD_MODES.length);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.controls}>
        <Text style={styles.title}>Controles del ScrollView</Text>

        <View style={styles.controlRow}>
          <Text>Horizontal:</Text>
          <Switch
            value={horizontal}
            onValueChange={(v) => {
              setHorizontal(v);
              if (!v) setPagingEnabled(false);
            }}
          />
        </View>

        <View style={styles.controlRow}>
          <Text>Mostrar indicadores:</Text>
          <Switch value={showIndicators} onValueChange={setShowIndicators} />
        </View>

        <View style={styles.controlRow}>
          <Text>Scroll habilitado:</Text>
          <Switch value={scrollEnabled} onValueChange={setScrollEnabled} />
        </View>

        <View style={styles.controlRow}>
          <Text>Efecto rebote:</Text>
          <Switch value={bounces} onValueChange={setBounces} />
        </View>

        <View style={styles.controlRow}>
          <Text>Modo página:</Text>
          <Switch
            value={pagingEnabled}
            onValueChange={setPagingEnabled}
            disabled={!horizontal}
          />
        </View>

        <View style={styles.controlRow}>
          <Text>Teclado al scroll:</Text>
          <Button title={keyboardDismissMode} onPress={changeKeyboardMode} />
        </View>

        <View style={styles.buttonRow}>
          <Button title="Ir al inicio" onPress={scrollToTop} />
          <Button title="Ir al final" onPress={scrollToEnd} />
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showIndicators}
        showsVerticalScrollIndicator={showIndicators}
        scrollEnabled={scrollEnabled}
        bounces={bounces}
        pagingEnabled={pagingEnabled}
        keyboardDismissMode={keyboardDismissMode}

        snapToInterval={horizontal && pagingEnabled ? width : undefined}
        decelerationRate={horizontal && pagingEnabled ? 'fast' : 'normal'}
      >
        {['orange', 'blue', 'green', 'red', 'black'].map((color, i) => (
          <View
            key={color}
            style={[
              styles.block,
              {
                backgroundColor: color,
                width: horizontal ? width * 0.8 : width - 20,
              },
            ]}
          >
            <Text style={styles.blockText}>Bloque {i + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe aquí..."
              value={text}
              onChangeText={setText}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

//estilos xd
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },

  controls: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  scrollView: { flex: 1 },
  contentContainer: { padding: 10 },

  block: {
    height: 150,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  blockText: { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { backgroundColor: 'white', width: '100%', padding: 8, borderRadius: 5 },
});

export default App;
