import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

export const AttendanceCalendar = () => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  
  // Simulación de datos: 0: nada, 1: asistido, 2: falta, 3: hoy
  const calendarDays = [
    null, null, 0, 1, 1, 1, 2, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.navBtn}><ChevronLeft color="#41474e" /></TouchableOpacity>
        <Text style={styles.monthTitle}>Octubre 2023</Text>
        <TouchableOpacity style={styles.navBtn}><ChevronRight color="#41474e" /></TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {days.map(d => <Text key={d} style={styles.dayLabel}>{d}</Text>)}
        {calendarDays.map((status, index) => (
          <View key={index} style={styles.dayCell}>
            {status !== null && (
              <View style={[
                styles.dayCircle,
                status === 1 && styles.attended,
                status === 2 && styles.missed,
                status === 3 && styles.today
              ]}>
                <Text style={[
                  styles.dayText,
                  status === 1 && { color: '#007239' },
                  status === 2 && { color: '#ba1a1a' },
                  status === 3 && { color: '#fff' }
                ]}>
                  {index - 1} 
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.legend}>
        <LegendItem color="#7bf8a1" label="Asistido" />
        <LegendItem color="#ffdad6" label="Inasistencia" />
        <LegendItem color="#1a5276" label="Hoy" />
      </View>
    </View>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
  <View style={styles.legendItem}>
    <View style={[styles.dot, { backgroundColor: color }]} />
    <Text style={styles.legendText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#c1c7cf' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  monthTitle: { fontSize: 20, fontWeight: '700', color: '#003b5a' },
  navBtn: { padding: 8, borderRadius: 20, backgroundColor: '#f2f4f6' },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayLabel: { width: '14.28%', textAlign: 'center', color: '#72787f', fontSize: 12, fontWeight: '600', marginBottom: 8 },
  dayCell: { width: '14.28%', height: 45, alignItems: 'center', justifyContent: 'center' },
  dayCircle: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  dayText: { fontSize: 14, color: '#41474e' },
  attended: { backgroundColor: '#7bf8a1', borderWidth: 2, borderColor: '#fff' },
  missed: { backgroundColor: '#ffdad6', borderWidth: 2, borderColor: '#fff' },
  today: { backgroundColor: '#1a5276', transform: [{ scale: 1.1 }] },
  legend: { flexDirection: 'row', justifyContent: 'center', gap: 15, borderTopWidth: 1, borderTopColor: '#eceef0', paddingTop: 16, marginTop: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  legendText: { fontSize: 12, color: '#191c1e', fontWeight: '600' }
});