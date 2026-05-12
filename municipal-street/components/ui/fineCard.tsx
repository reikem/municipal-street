import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar, CircleDollarSign, ChevronRight, CheckCircle2, Clock, Gavel } from 'lucide-react-native';

interface FineCardProps {
  folio: string;
  merchant: string;
  date: string;
  amount: string;
  location: string;
  status: 'Pagada' | 'Pendiente' | 'Apelación';
}

export const FineCard = ({ folio, merchant, date, amount, location, status }: FineCardProps) => {
  const statusConfig = {
    Pagada: { color: '#006d37', bg: '#7bf8a1', icon: CheckCircle2 },
    Pendiente: { color: '#ba1a1a', bg: '#ffdad6', icon: Clock },
    Apelación: { color: '#663e00', bg: '#ffddb9', icon: Gavel },
  };

  const Config = statusConfig[status];

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.folio}>Folio: {folio}</Text>
          <Text style={styles.merchant}>{merchant}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: Config.bg }]}>
          <Config.icon size={14} color={Config.color} />
          <Text style={[styles.badgeText, { color: Config.color }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.metaItem}>
          <Calendar size={16} color="#72787f" />
          <Text style={styles.metaText}>{date}</Text>
        </View>
        <View style={styles.metaItem}>
          <CircleDollarSign size={16} color="#72787f" />
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.location} numberOfLines={1}>Ubicación: {location}</Text>
        <View style={styles.detailBtn}>
          <Text style={styles.detailText}>Detalles</Text>
          <ChevronRight size={16} color="#003b5a" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#e0e3e5', elevation: 2 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  folio: { fontSize: 12, fontWeight: '600', color: '#72787f' },
  merchant: { fontSize: 18, fontWeight: '700', color: '#003b5a', marginTop: 2 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#f2f4f6' },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  metaText: { fontSize: 14, color: '#41474e' },
  amountText: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  location: { fontSize: 12, color: '#72787f', flex: 1 },
  detailBtn: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  detailText: { fontSize: 13, fontWeight: '700', color: '#003b5a' }
});