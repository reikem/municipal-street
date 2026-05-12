import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserCircle2 } from 'lucide-react-native';

interface MapMarkerProps {
  label: string;
  color: string;
  top: string | number;
  left: string | number;
}

export const MapMarker = ({ label, color, top, left }: MapMarkerProps) => (
  <View style={[styles.markerContainer, { top: typeof top === 'number' ? top : parseFloat(top as string), left: typeof left === 'number' ? left : parseFloat(left as string) }]}>
    <View style={[styles.badge, { backgroundColor: color }]}>
      <UserCircle2 size={14} color="#fff" />
      <Text style={styles.badgeText}>{label}</Text>
    </View>
    <View style={[styles.dot, { backgroundColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  markerContainer: { position: 'absolute', alignItems: 'center' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, elevation: 4, marginBottom: 4 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  dot: { width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#fff' }
});