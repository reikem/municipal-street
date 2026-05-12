import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react-native';

interface StatusCardProps {
  label: string;
  value: string;
  type: 'success' | 'warning' | 'info';
  icon: any;
  footerText?: string;
}

export const StatusCard = ({ label, value, type, icon: Icon, footerText }: StatusCardProps) => {
  const colors = {
    success: { bg: '#7bf8a1', text: '#007239', accent: '#006d37' },
    warning: { bg: '#ffddb9', text: '#663e00', accent: '#6f4400' },
    info: { bg: '#cbe6ff', text: '#003b5a', accent: '#1a5276' }
  };

  const theme = colors[type];

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={[styles.iconBadge, { backgroundColor: theme.bg }]}>
          <Icon size={20} color={theme.text} />
        </View>
      </View>
      {footerText && (
        <View style={[styles.footer, { backgroundColor: theme.bg }]}>
          <Text style={[styles.footerText, { color: theme.text }]}>{footerText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#e0e3e5', flex: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  label: { fontSize: 12, fontWeight: '600', color: '#72787f', marginBottom: 4 },
  value: { fontSize: 18, fontWeight: '700', color: '#191c1e' },
  iconBadge: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  footer: { marginTop: 12, padding: 8, borderRadius: 8, flexDirection: 'row', alignItems: 'center' },
  footerText: { fontSize: 12, fontWeight: '600' }
});