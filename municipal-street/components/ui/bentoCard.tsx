import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BentoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
}

export const BentoCard = ({ title, icon, children, dark = false }: BentoCardProps) => (
  <View style={[styles.card, dark ? styles.darkCard : styles.lightCard]}>
    <View style={styles.header}>
      {icon}
      <Text style={[styles.title, dark ? styles.darkText : styles.lightText]}>{title}</Text>
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: { borderRadius: 20, padding: 20, marginBottom: 16, borderWidth: 1 },
  lightCard: { backgroundColor: '#fff', borderColor: '#eceef0', elevation: 2 },
  darkCard: { backgroundColor: '#003b5a', borderColor: '#1a5276', elevation: 4 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '700' },
  lightText: { color: '#003b5a' },
  darkText: { color: '#fff' }
});