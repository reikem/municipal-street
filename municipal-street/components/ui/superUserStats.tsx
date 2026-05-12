import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp, Users, Wallet } from 'lucide-react-native';

interface StatCardProps {
  title: string;
  value: string;
  footer: string;
  icon: React.ReactNode;
  variant?: 'light' | 'primary';
}

const StatCard = ({ title, value, footer, icon, variant = 'light' }: StatCardProps) => (
  <View style={[styles.card, variant === 'primary' ? styles.cardPrimary : styles.cardLight]}>
    <Text style={[styles.label, variant === 'primary' ? styles.textWhiteOp : styles.textGrey]}>{title}</Text>
    <Text style={[styles.value, variant === 'primary' && styles.textWhite]}>{value}</Text>
    <View style={styles.footerRow}>
      {icon}
      <Text style={[styles.footerText, variant === 'primary' ? styles.textSecFixed : styles.textGreen]}>{footer}</Text>
    </View>
  </View>
);

export const SuperUserStats = () => (
  <View style={styles.container}>
    <StatCard 
      title="TOTAL VENDEDORES" 
      value="1,284" 
      footer="+12% este mes" 
      icon={<TrendingUp size={14} color="#006d37" />} 
    />
    <StatCard 
      title="INSPECTORES ACTIVOS" 
      value="42" 
      footer="En campo ahora" 
      icon={<Users size={14} color="#72787f" />} 
    />
    <StatCard 
      title="RECAUDACIÓN" 
      value="$45.2k" 
      footer="Meta: 92%" 
      variant="primary"
      icon={<Wallet size={14} color="#7efba4" />} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  card: { flex: 1, minWidth: '30%', padding: 16, borderRadius: 16, elevation: 2 },
  cardLight: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e6e8ea' },
  cardPrimary: { backgroundColor: '#003b5a' },
  label: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  textGrey: { color: '#41474e' },
  textWhiteOp: { color: 'rgba(255,255,255,0.7)' },
  value: { fontSize: 24, fontWeight: '800', color: '#003b5a', marginVertical: 4 },
  textWhite: { color: '#fff' },
  footerRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8 },
  footerText: { fontSize: 11, fontWeight: '600' },
  textGreen: { color: '#006d37' },
  textSecFixed: { color: '#7efba4' }
});