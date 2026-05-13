import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, Clock, AlertTriangle, ReceiptText, CreditCard, Download } from 'lucide-react-native';

interface PaymentItemProps {
  month: string;
  date: string;
  amount: string;
  id: string;
  status: 'paid' | 'pending' | 'overdue';
  onPress: () => void;
}

export const PaymentItem = ({ month, date, amount, id, status, onPress }: PaymentItemProps) => {
  const isPaid = status === 'paid';
  const isOverdue = status === 'overdue';

  return (
    <View style={[styles.container, isOverdue && styles.overdueBorder]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.monthText}>{month}</Text>
          <Text style={[styles.dateText, isOverdue && styles.errorText]}>
            {isPaid ? `Pagado el ${date}` : `Vence el ${date}`}
          </Text>
        </View>
        
        <View style={[
          styles.badge, 
          status === 'paid' && styles.paidBadge,
          status === 'pending' && styles.pendingBadge,
          status === 'overdue' && styles.overdueBadge
        ]}>
          {status === 'paid' && <CheckCircle2 size={14} color="#fff" />}
          {status === 'pending' && <Clock size={14} color="#2b1700" />}
          {status === 'overdue' && <AlertTriangle size={14} color="#fff" />}
          <Text style={[styles.badgeText, (status === 'paid' || status === 'overdue') ? styles.whiteText : styles.darkText]}>
            {status === 'paid' ? 'AUTORIZADO' : status === 'pending' ? 'PENDIENTE' : 'VENCIDO'}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.idText}>{isPaid ? `ID: ${id}` : `Ref: ${id}`}</Text>
          <Text style={[styles.amount, isOverdue ? styles.errorText : styles.primaryText]}>{amount}</Text>
        </View>

        <TouchableOpacity 
          style={[styles.actionButton, status === 'pending' ? styles.payButton : styles.outlineButton]} 
          onPress={onPress}
        >
          {status === 'paid' && <ReceiptText size={18} color="#003b5a" />}
          {status === 'pending' && <CreditCard size={18} color="#fff" />}
          {status === 'overdue' && <Download size={18} color="#003b5a" />}
          <Text style={[styles.actionText, status === 'pending' ? styles.whiteText : styles.primaryText]}>
            {status === 'paid' ? 'Ver Recibo' : status === 'pending' ? 'Pagar Ahora' : 'PDF Multa'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#eceef0' },
  overdueBorder: { borderLeftWidth: 4, borderLeftColor: '#ba1a1a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  monthText: { fontSize: 17, fontWeight: '700', color: '#191c1e' },
  dateText: { fontSize: 13, color: '#72787f' },
  errorText: { color: '#ba1a1a', fontWeight: '600' },
  badge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, gap: 4 },
  paidBadge: { backgroundColor: '#006d37' },
  pendingBadge: { backgroundColor: '#FFBF00' },
  overdueBadge: { backgroundColor: '#ba1a1a' },
  badgeText: { fontSize: 11, fontWeight: '800' },
  whiteText: { color: '#fff' },
  darkText: { color: '#2b1700' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  idText: { fontSize: 12, color: '#72787f', marginBottom: 2 },
  amount: { fontSize: 20, fontWeight: '800' },
  primaryText: { color: '#003b5a' },
  actionButton: { flexDirection: 'row', alignItems: 'center', height: 44, paddingHorizontal: 16, borderRadius: 10, gap: 8 },
  payButton: { backgroundColor: '#003b5a', elevation: 2 },
  outlineButton: { borderWidth: 2, borderColor: '#003b5a' },
  actionText: { fontSize: 14, fontWeight: '700' },
});