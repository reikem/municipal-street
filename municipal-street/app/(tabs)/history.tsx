import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { Verified, Receipt } from 'lucide-react-native';
import { BentoCard } from '@/components/ui/bentoCard';
import { PaymentItem } from '@/components/ui/paymentItem';

const MOCK_PAYMENTS = [
  { id: '1', month: 'Diciembre 2024', date: '12 Dic, 2024', amount: '$150.00', txn: '#TXN-992834', status: 'paid' },
  { id: '2', month: 'Enero 2025', date: '15 Ene, 2025', amount: '$150.00', txn: '#REQ-1120', status: 'pending' },
  { id: '3', month: 'Noviembre 2024', date: '15 Nov, 2024', amount: '$165.00', txn: 'Multa-042', status: 'overdue' },
];

export default function HistoryScreen() {
  const [filter, setFilter] = useState('Todos');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollPadding}>
      
      {/* Resumen Superior usando BentoCard Reutilizado */}
      <BentoCard 
        variant="light" 
        title="Total Pagado 2024"
        icon={<Verified size={20} color="#006d37" fill="#7bf8a1" />}
      >
        <View style={styles.summaryContent}>
          <Text style={styles.totalAmount}>$1,850.00</Text>
          <View style={styles.summaryFooter}>
            <View>
              <Text style={styles.summaryLabel}>Próximo Vencimiento</Text>
              <Text style={styles.summaryValue}>15 Ene, 2025</Text>
            </View>
            <View>
              <Text style={styles.summaryLabel}>Saldo Pendiente</Text>
              <Text style={[styles.summaryValue, { color: '#ba1a1a' }]}>$0.00</Text>
            </View>
          </View>
        </View>
      </BentoCard>

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
        {['Todos', 'Pagados', 'Pendientes', 'Vencidos'].map((item) => (
          <TouchableOpacity 
            key={item} 
            onPress={() => setFilter(item)}
            style={[styles.filterChip, filter === item && styles.filterChipActive]}
          >
            <Text style={[styles.filterText, filter === item && styles.filterTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Pagos */}
      <View style={styles.listSection}>
        {MOCK_PAYMENTS.map((payment) => (
          <PaymentItem
            key={payment.id}
            month={payment.month}
            date={payment.date}
            amount={payment.amount}
            id={payment.txn}
            status={payment.status as any}
            onPress={() => console.log('Acción sobre pago', payment.id)}
          />
        ))}
      </View>

      {/* Decoración Final */}
      <View style={styles.emptyState}>
        <Receipt size={48} color="#c1c7cf" />
        <Text style={styles.emptyText}>Mostrando pagos del último año</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollPadding: { padding: 16, paddingBottom: 100 },
  summaryContent: { marginTop: -4 },
  totalAmount: { fontSize: 32, fontWeight: '800', color: '#003b5a', marginBottom: 12 },
  summaryFooter: { flexDirection: 'row', gap: 24, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#f2f4f6' },
  summaryLabel: { fontSize: 12, color: '#72787f', textTransform: 'uppercase' },
  summaryValue: { fontSize: 15, fontWeight: '700', color: '#191c1e' },
  
  filterBar: { flexDirection: 'row', marginBottom: 20 },
  filterChip: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: '#e6e8ea', marginRight: 8 },
  filterChipActive: { backgroundColor: '#1a5276' },
  filterText: { fontSize: 14, fontWeight: '600', color: '#41474e' },
  filterTextActive: { color: '#fff' },

  listSection: { gap: 4 },
  emptyState: { alignItems: 'center', marginTop: 40, opacity: 0.5 },
  emptyText: { marginTop: 8, fontSize: 14, color: '#72787f' }
});