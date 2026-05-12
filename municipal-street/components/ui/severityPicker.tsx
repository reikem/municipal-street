import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SeverityPickerProps {
  selected: 'Bajo' | 'Medio' | 'Alto';
  onSelect: (val: any) => void;
}

export const SeverityPicker = ({ selected, onSelect }: SeverityPickerProps) => {
  const options = ['Bajo', 'Medio', 'Alto'];
  
  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          onPress={() => onSelect(opt)}
          style={[
            styles.option,
            selected === opt && (opt === 'Alto' ? styles.selectedAlto : styles.selectedDefault)
          ]}
        >
          <Text style={[styles.text, selected === opt && styles.selectedText]}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8 },
  option: { flex: 1, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderWidth: 2, borderColor: '#c1c7cf' },
  text: { fontSize: 14, fontWeight: '600', color: '#41474e' },
  selectedDefault: { backgroundColor: '#eceef0', borderColor: '#003b5a' },
  selectedAlto: { backgroundColor: '#ffdad6', borderColor: '#ba1a1a' },
  selectedText: { color: '#003b5a', fontWeight: '700' }
});