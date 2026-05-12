import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Map as MapIcon, CheckCircle2, Clock, Edit3, ChevronRight } from 'lucide-react-native';

interface CommuneProps {
  name: string;
  zone: string;
  count: string;
  limit: string;
  hours: string;
  status: 'Authorized' | 'Pending';
  colorVariant?: string;
}

export const CommuneCard = ({ name, zone, count, limit, hours, status }: CommuneProps) => {
  const isAuth = status === 'Authorized';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={[styles.iconBox, { backgroundColor: isAuth ? '#1a5276' : '#ffddb9' }]}>
            <MapIcon size={20} color={isAuth ? '#fff' : '#663e00'} />
          </View>
          <View>
            <Text style={styles.communeName}>{name}</Text>
            <Text style={styles.zoneText}>{zone}</Text>
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: isAuth ? '#006d37' : '#ffb300' }]}>
          <Text style={styles.badgeText}>{isAuth ? 'Autorizado' : 'Pendiente'}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>LÍMITE VENDEDORES</Text>
          <Text style={styles.statValue}>{count} / {limit}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>HORARIO INSPECCIÓN</Text>
          <Text style={styles.statValue}>{hours}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnOutline}>
          <Text style={styles.btnOutlineText}>Ver Reglas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIcon}>
          <Edit3 size={18} color="#003b5a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#e6e8ea', elevation: 2 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBox: { padding: 8, borderRadius: 10 },
  communeName: { fontSize: 16, fontWeight: '700', color: '#003b5a' },
  zoneText: { fontSize: 12, color: '#72787f' },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 11, fontWeight: '700', color: '#fff' },
  statsRow: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#f2f4f6', marginTop: 12, paddingVertical: 12 },
  statItem: { flex: 1 },
  statLabel: { fontSize: 10, fontWeight: '800', color: '#72787f', letterSpacing: 0.5 },
  statValue: { fontSize: 14, color: '#003b5a', marginTop: 2 },
  actions: { flexDirection: 'row', gap: 8 },
  btnOutline: { flex: 1, height: 40, borderRadius: 8, borderWidth: 1, borderColor: '#003b5a', justifyContent: 'center', alignItems: 'center' },
  btnOutlineText: { color: '#003b5a', fontWeight: '600', fontSize: 13 },
  btnIcon: { width: 40, height: 40, backgroundColor: '#eceef0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }
});