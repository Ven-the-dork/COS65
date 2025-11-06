import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Keyboard,
  Alert,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmed = text.trim();
    if (trimmed === '') {
      Alert.alert('Empty input', 'Please enter an item before adding.');
      return;
    }

    const newItem = { id: Date.now().toString(), value: trimmed };
    // add new item at top of list
    setItems(prev => [newItem, ...prev]);
    setText('');
    Keyboard.dismiss();
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Favorite Clothing Brands</Text>
      <Text style={styles.description}>Add an item in the box then press ADD</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          onSubmitEditing={addItem}
        />

        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No items yet. Add one above.</Text>}
        contentContainerStyle={items.length === 0 && styles.flatEmpty}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  description: { textAlign: 'center', color: '#6b7280', marginBottom: 12 },

  inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    marginLeft: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  buttonText: { color: '#fff', fontWeight: '700' },

  itemRow: {
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  itemText: { fontSize: 16 },

  empty: { textAlign: 'center', color: '#9ca3af', marginTop: 8 },
  flatEmpty: { flex: 1, justifyContent: 'center' },
});
