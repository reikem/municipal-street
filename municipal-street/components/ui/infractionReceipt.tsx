import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MapPin, BadgeCheck, AlertCircle } from 'lucide-react-native';

export const InfractionReceipt = () => {
  return (
    <View style={styles.card}>
      {/* Sección QR */}
      <View style={styles.qrSection}>
        <View style={styles.qrFrame}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU8ljuvNSTRQ48LSeOVD9TtlQjDw_UFIVSgwbqFtIdjv2pzys29BWgifqJ4ccPHhk5heTgd-uLXzNDx5XCH-YktfQMcLtDPFVu7SBlyLFrxqC2ymCh3sWK2p5HeZ7FZc7ihHwD5ihNYMYSOF1nVcbsNJ-Bg0fVlQUPAxJ-lOqhLEc-6_4kM09ebshbkVK8SvxkQqK6HEaorIqSWSPrVESdJhWFRFWWFd9rXGkqO7eQKa9PQYbRWYYFqcarCUQlFgnvwK5yzTuqeGX4' }} 
            style={styles.qrCode}
          />
        </View>
        <Text style={styles.validationText}>VALIDACIÓN DE AUTENTICIDAD</Text>
        <Text style={styles.folioText}>Folio: #2024-INF-0892</Text>
      </View>

      {/* Grid de Detalles */}
      <View style={styles.detailsGrid}>
        <View style={styles.gridItem}>
          <Text style={styles.label}>FECHA</Text>
          <Text style={styles.value}>24 Oct 2023</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>HORA</Text>
          <Text style={styles.value}>11:45 AM</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>UBICACIÓN</Text>
          <View style={styles.row}>
            <MapPin size={12} color="#72787f" />
            <Text style={styles.value}>Puesto #114</Text>
          </View>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>INSPECTOR</Text>
          <View style={styles.row}>
            <BadgeCheck size={12} color="#72787f" />
            <Text style={styles.value}>Carlos Mendoza</Text>
          </View>
        </View>
      </View>

      {/* Resumen de Falta */}
      <View style={styles.violationSummary}>
        <View style={styles.summaryHeader}>
          <Text style={styles.label}>TIPO DE FALTA</Text>
          <View style={styles.severityBadge}>
            <AlertCircle size={12} color="#fff" />
            <Text style={styles.severityText}>GRAVEDAD ALTA</Text>
          </View>
        </View>
        <Text style={styles.violationTitle}>Venta no autorizada</Text>
        <Text style={styles.description}>
          &quot;El comerciante realizaba actividades económicas sin el permiso municipal vigente...&quot;
        </Text>
      </View>

      {/* Total */}
      <View style={styles.amountSection}>
        <View>
          <Text style={styles.label}>TOTAL A PAGAR</Text>
          <Text style={styles.amount}>$4,500.00 MXN</Text>
        </View>
        <View style={styles.deadlineBox}>
          <Text style={styles.label}>LÍMITE</Text>
          <Text style={styles.deadlineDate}>31 Oct 2023</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10 },
  qrSection: { alignItems: 'center', padding: 24, backgroundColor: '#f2f4f6', borderBottomWidth: 1, borderColor: '#c1c7cf' },
  qrFrame: { backgroundColor: '#fff', padding: 12, borderRadius: 16, marginBottom: 12, elevation: 2 },
  qrCode: { width: 150, height: 150 },
  validationText: { fontSize: 10, fontWeight: '700', color: '#003b5a', letterSpacing: 1 },
  folioText: { fontSize: 12, color: '#72787f', marginTop: 4 },
  detailsGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 20 },
  gridItem: { width: '50%', marginBottom: 16 },
  label: { fontSize: 10, fontWeight: '700', color: '#72787f', marginBottom: 2 },
  value: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  violationSummary: { padding: 20, backgroundColor: '#eceef0', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#c1c7cf' },
  summaryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  severityBadge: { backgroundColor: '#ba1a1a', flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  severityText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  violationTitle: { fontSize: 18, fontWeight: '700', color: '#003b5a' },
  description: { fontSize: 13, color: '#41474e', fontStyle: 'italic', marginTop: 8 },
  amountSection: { padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  amount: { fontSize: 24, fontWeight: '800', color: '#003b5a' },
  deadlineBox: { alignItems: 'flex-end' },
  deadlineDate: { color: '#ba1a1a', fontWeight: '700', fontSize: 14 }
});