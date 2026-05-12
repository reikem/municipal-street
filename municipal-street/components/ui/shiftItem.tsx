import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Edit2, Sun, Cloud, Moon } from 'lucide-react-native';

interface ShiftItemProps {
  type: 'morning' | 'afternoon' | 'night';
  name: string;
  timeRange: string;
  inspectors: number;
}

export const ShiftItem = ({ type, name, timeRange, inspectors }: ShiftItemProps) => {
  const getIcon = () => {
    switch (type) {
      case 'morning': return <Sun size={20} color="#001e30" />;
      case 'afternoon': return <Cloud size={20} color="#00210c" />;
      case 'night': return <Moon size={20} color="#fff" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'morning': return '#cbe6ff';
      case 'afternoon': return '#7bf8a1';
      case 'night': return '#003b5a';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: getBgColor() }]}>
          {getIcon()}
        </View>
        <View>
          <Text style={styles.shiftName}>{name}</Text>
          <Text style={styles.shiftDetails}>{timeRange} • {inspectors} Inspectores</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Edit2 size={18} color="#72787f" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f2f4f6',
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e3e5'
  },
  content: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconContainer: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  shiftName: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  shiftDetails: { fontSize: 12, color: '#41474e' }
});