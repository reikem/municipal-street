import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { UserPlus, History, ShieldCheck, ChevronRight } from 'lucide-react-native';
import { SuperUserStats } from '@/components/ui/superUserStats';


export default function SuperUserDashboard() {
  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollContent}>
      
      <Text style={styles.pageTitle}>Gestión Municipal</Text>
      
      {/* 1. Bento Grid de Stats */}
      <SuperUserStats />

      {/* 2. Sección: Registro de Administrador */}
      <View style={styles.sectionCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Crear Nuevo Administrador</Text>
          <UserPlus size={20} color="#1a5276" />
        </View>
        
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Nombre Completo</Text>
          <TextInput style={styles.input} placeholder="Ej. Juan Pérez" />
          
          <Text style={styles.inputLabel}>Correo Institucional</Text>
          <TextInput style={styles.input} placeholder="jperez@municipio.gov" keyboardType="email-address" />
          
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Registrar Administrador</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Registro de Actividad */}
      <View style={[styles.sectionCard, { marginTop: 20 }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Registro de Actividad</Text>
          <History size={20} color="#72787f" />
        </View>

        <ActivityItem 
          title="Permiso Autorizado #A-482" 
          subtitle="Admin Carlos Mendoza • Hace 5 min"
          border="#006d37"
        />
        <ActivityItem 
          title="Intento de acceso fallido" 
          subtitle="IP: 192.168.1.45 • Hace 1 hora"
          border="#ba1a1a"
        />
        <ActivityItem 
          title="Nuevo Inspector Registrado" 
          subtitle="Super User Admin • Hace 3 horas"
          border="#1a5276"
        />
      </View>
    </ScrollView>
  );
}

const ActivityItem = ({ title, subtitle, border }: any) => (
  <View style={[styles.activityRow, { borderLeftColor: border }]}>
    <View style={{ flex: 1 }}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activitySubtitle}>{subtitle}</Text>
    </View>
    <ChevronRight size={16} color="#c1c7cf" />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  pageTitle: { fontSize: 28, fontWeight: '800', color: '#003b5a', marginBottom: 20 },
  
  sectionCard: { backgroundColor: '#fff', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#e6e8ea', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#191c1e' },
  
  form: { gap: 12 },
  inputLabel: { fontSize: 13, fontWeight: '600', color: '#41474e', marginLeft: 4 },
  input: { height: 48, backgroundColor: '#f2f4f6', borderRadius: 10, paddingHorizontal: 16, borderColor: '#c1c7cf', borderWidth: 1 },
  submitBtn: { height: 48, backgroundColor: '#003b5a', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8 },
  submitBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  
  activityRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 12, backgroundColor: '#f7f9fb', borderRadius: 12, marginBottom: 8, borderLeftWidth: 4 },
  activityTitle: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  activitySubtitle: { fontSize: 12, color: '#72787f', marginTop: 2 }
});