import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, Clock, Eye, Download } from 'lucide-react-native';
import { Permission } from '@/type/type';


export const PermissionItem = ({ item }: { item: Permission }) => {
  const isPaid = item.status === 'paid';

  return (
    <View style={styles.container}>
      <View style={[styles.dateBadge, { backgroundColor: item.colorHex }]}>
        <Text style={styles.monthText}>{item.month}</Text>
        <Text style={styles.yearText}>{item.year}</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.itemTitle}>Permiso de Vía Pública</Text>
            <Text style={styles.idText}>ID: {item.code}</Text>
          </View>
          <View style={[styles.statusBadge, isPaid ? styles.paidBadge : styles.pendingBadge]}>
            {isPaid ? <CheckCircle2 color="white" size={12} fill="white" /> : <Clock color="white" size={12} fill="white" />}
            <Text style={styles.statusText}>{isPaid ? 'Pagado' : 'Pendiente'}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          {isPaid ? (
            <>
              <TouchableOpacity style={styles.linkBtn}><Eye color="#003b5a" size={18} /><Text style={styles.linkText}>Ver</Text></TouchableOpacity>
              <TouchableOpacity style={styles.linkBtn}><Download color="#003b5a" size={18} /><Text style={styles.linkText}>Bajar</Text></TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.payNowBtn}><Text style={styles.payNowText}>Pagar Ahora</Text></TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 16, height: 120, flexDirection: 'row', overflow: 'hidden', borderWidth: 1, borderColor: '#c1c7cf', marginBottom: 12 },
  dateBadge: { width: 85, alignItems: 'center', justifyContent: 'center' },
  monthText: { fontSize: 22, fontWeight: '800', color: '#00210c' },
  yearText: { fontSize: 14, fontWeight: '600', color: '#00210c' },
  content: { flex: 1, padding: 12, justifyContent: 'space-between' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  itemTitle: { fontSize: 15, fontWeight: '700', color: '#191c1e' },
  idText: { fontSize: 12, color: '#72787f' },
  statusBadge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, gap: 4 },
  paidBadge: { backgroundColor: '#006d37' },
  pendingBadge: { backgroundColor: '#ffae42' },
  statusText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 15 },
  linkBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  linkText: { color: '#003b5a', fontWeight: '700', fontSize: 14 },
  payNowBtn: { backgroundColor: '#003b5a', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 8 },
  payNowText: { color: '#fff', fontWeight: '700', fontSize: 13 }
});