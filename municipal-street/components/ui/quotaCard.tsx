import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuotaProps {
  total: number;
  current: number;
}

export const QuotaCard = ({ total, current }: QuotaProps) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestión de Cupos</Text>
        <Text style={styles.totalValue}>{total}</Text>
      </View>
      
      <View style={styles.statsRow}>
        <Text style={styles.subLabel}>Ocupación Actual</Text>
        <Text style={styles.progressText}>{current} / {total}</Text>
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percentage}%` }]} />
      </View>
      
      <Text style={styles.alertBadge}>{percentage}% de la capacidad alcanzada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: '#eceef0', elevation: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '700', color: '#003b5a' },
  totalValue: { fontSize: 24, fontWeight: '600', color: '#003b5a' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  subLabel: { fontSize: 14, color: '#41474e' },
  progressText: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  progressBar: { height: 16, backgroundColor: '#e0e3e5', borderRadius: 8, overflow: 'hidden', marginBottom: 8 },
  progressFill: { height: '100%', backgroundColor: '#61de8a' },
  alertBadge: { fontSize: 12, fontWeight: '700', color: '#007239' }
});