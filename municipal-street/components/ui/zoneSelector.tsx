import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

export const ZoneSelector = ({ label, value }: { label: string, value: string }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.selector}>
      <Text style={styles.value}>{value}</Text>
      <ChevronDown size={20} color="#41474e" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', color: '#41474e', marginBottom: 8 },
  selector: {
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c1c7cf',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  value: { fontSize: 16, color: '#191c1e' }
});