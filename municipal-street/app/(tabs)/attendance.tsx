import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { MapPin, QrCode, Info } from 'lucide-react-native';

import { Header } from '@/components/ui/Headers';
import { AttendanceCalendar } from '@/components/ui/attendanceCalendar';


export default function AttendanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Welcome */}
        <View style={styles.section}>
          <Text style={styles.title}>Control de Asistencia</Text>
          <Text style={styles.subtitle}>Vendedor: Juan Pérez - Puesto #442</Text>
        </View>

        {/* GPS Registration */}
        <View style={styles.gpsCard}>
          <View style={styles.locationInfo}>
            <View style={styles.iconCircle}>
              <MapPin color="#1a5276" size={24} />
            </View>
            <View>
              <Text style={styles.label}>UBICACIÓN ACTUAL</Text>
              <Text style={styles.value}>Sector Plaza Central, Zona 1</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.registerBtn} activeOpacity={0.8}>
            <QrCode color="#fff" size={24} />
            <Text style={styles.registerBtnText}>Registrar Asistencia de Hoy</Text>
          </TouchableOpacity>
          
          <View style={styles.infoRow}>
            <Info color="#72787f" size={16} />
            <Text style={styles.infoText}>Verificación por GPS requerida</Text>
          </View>
        </View>

        {/* Calendar */}
        <AttendanceCalendar />

        {/* Stats Grid */}
        <View style={styles.bentoGrid}>
          <View style={[styles.bentoBox, styles.attendedBox]}>
            <Text style={[styles.bentoLabel, { color: '#006d37' }]}>Días Asistidos</Text>
            <View style={styles.bentoValueRow}>
              <Text style={[styles.bentoVal, { color: '#006d37' }]}>14</Text>
              <Text style={[styles.bentoSubVal, { color: 'rgba(0,109,55,0.6)' }]}>/22</Text>
            </View>
          </View>

          <View style={[styles.bentoBox, styles.missedBox]}>
            <Text style={[styles.bentoLabel, { color: '#ba1a1a' }]}>Inasistencias</Text>
            <View style={styles.bentoValueRow}>
              <Text style={[styles.bentoVal, { color: '#ba1a1a' }]}>2</Text>
              <Text style={[styles.bentoSubVal, { color: 'rgba(186,26,26,0.6)' }]}>días</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scroll: { padding: 16, paddingBottom: 100 },
  section: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#003b5a' },
  subtitle: { fontSize: 16, color: '#41474e', marginTop: 4 },
  
  // GPS Card
  gpsCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#c1c7cf', marginBottom: 24 },
  locationInfo: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  iconCircle: { backgroundColor: '#cbe6ff', padding: 12, borderRadius: 30 },
  label: { fontSize: 12, fontWeight: '700', color: '#72787f', letterSpacing: 1 },
  value: { fontSize: 16, fontWeight: '600', color: '#191c1e' },
  registerBtn: { 
    backgroundColor: '#1a5276', 
    height: 56, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10 
  },
  registerBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  infoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12 },
  infoText: { color: '#72787f', fontSize: 14 },

  // Bento
  bentoGrid: { flexDirection: 'row', gap: 12, marginTop: 24 },
  bentoBox: { flex: 1, padding: 16, borderRadius: 16, borderWidth: 1 },
  attendedBox: { backgroundColor: 'rgba(123, 248, 161, 0.15)', borderColor: '#7bf8a1' },
  missedBox: { backgroundColor: 'rgba(255, 218, 214, 0.2)', borderColor: '#ffdad6' },
  bentoLabel: { fontSize: 14, fontWeight: '700' },
  bentoValueRow: { flexDirection: 'row', alignItems: 'baseline', gap: 4, marginTop: 8 },
  bentoVal: { fontSize: 32, fontWeight: '800' },
  bentoSubVal: { fontSize: 16, fontWeight: '600' }
});