import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AlertTriangle, Info } from 'lucide-react-native';

interface AlertMarkerProps {
  type: 'danger' | 'warning' | 'info';
  label: string;
  top: string | number;
  left: string | number;
}

export const AlertMarker = ({ type, label, top, left }: AlertMarkerProps) => {
  const isDanger = type === 'danger';
  const color = isDanger ? '#ba1a1a' : type === 'warning' ? '#6f4400' : '#003b5a';

  return (
    <View style={[styles.container, { top: typeof top === 'string' ? parseFloat(top) : top, left: typeof left === 'string' ? parseFloat(left) : left }]}>
      <View style={[styles.badge, { backgroundColor: color }]}>
        {isDanger ? <AlertTriangle size={14} color="#fff" /> : <Info size={14} color="#fff" />}
        <Text style={styles.badgeText}>{label}</Text>
      </View>
      <View style={[styles.pin, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: 'absolute', alignItems: 'center' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, elevation: 6 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  pin: { width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#fff', marginTop: -2 }
});