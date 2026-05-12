import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { UserPlus, Map as MapIcon, ChevronRight, CheckCircle2, Clock, AlertTriangle, MapPin } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AdminPanelScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Datos simulados para la tabla de historial
  const history = [
    { id: '1', vendor: 'Juan Pérez', inspector: 'C. Méndez', status: 'authorized', time: '10:30 AM' },
    { id: '2', vendor: 'Marta Gómez', inspector: 'L. Fernández', status: 'pending', time: '09:15 AM' },
    { id: '3', vendor: 'Roberto Ruíz', inspector: 'C. Méndez', status: 'expired', time: '08:45 AM' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'authorized': return { bg: '#006d37', text: '#fff', label: 'Autorizado', icon: <CheckCircle2 size={12} color="#fff" /> };
      case 'pending': return { bg: '#ffddb9', text: '#663e00', label: 'Pendiente', icon: <Clock size={12} color="#663e00" /> };
      case 'expired': return { bg: '#ba1a1a', text: '#fff', label: 'Vencido', icon: <AlertTriangle size={12} color="#fff" /> };
      default: return { bg: '#eee', text: '#333', label: status, icon: null };
    }
  };

  return (
    <ScrollView style={[styles.container, isDark && styles.bgDark]} contentContainerStyle={styles.content}>
      
      {/* 1. Header de Sección */}
      <Text style={[styles.mainTitle, isDark && styles.textWhite]}>Panel de Administración</Text>

      {/* 2. Botones de Acción Rápida (Grid) */}
      <View style={styles.actionGrid}>
        <TouchableOpacity style={styles.actionBtnPrimary}>
          <UserPlus color="#fff" size={32} />
          <Text style={styles.actionBtnText}>Crear Nuevo Usuario</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.actionBtnOutline, isDark && styles.borderDark]}>
          <MapIcon color="#003b5a" size={32} />
          <Text style={styles.actionBtnTextOutline}>Asignar Calle/Comuna</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Inspectores Activos */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, isDark && styles.textWhite]}>Inspectores Activos</Text>
        <View style={styles.badgeCount}>
          <Text style={styles.badgeCountText}>4 Activos</Text>
        </View>
      </View>

      {/* Tarjeta Inspector 1 */}
      <TouchableOpacity style={[styles.inspectorCard, isDark && styles.cardDark]}>
        <View style={styles.inspectorInfo}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=12' }} style={styles.inspectorAvatar} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.inspectorName, isDark && styles.textWhite]}>Carlos Méndez</Text>
            <Text style={styles.inspectorRole}>Inspector Jefe - Zona Norte</Text>
          </View>
          <ChevronRight color="#72787f" size={20} />
        </View>
        <View style={styles.inspectorFooter}>
          <View style={styles.avatarStack}>
             <Image source={{ uri: 'https://i.pravatar.cc/150?u=13' }} style={styles.stackImage} />
             <Image source={{ uri: 'https://i.pravatar.cc/150?u=14' }} style={[styles.stackImage, { marginLeft: -12 }]} />
             <View style={[styles.stackMore, { marginLeft: -12 }]}><Text style={styles.stackMoreText}>+3</Text></View>
          </View>
          <Text style={styles.footerLink}>5 Supervisados hoy</Text>
        </View>
      </TouchableOpacity>

      {/* 4. Historial (Simulación de Tabla) */}
      <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }, isDark && styles.textWhite]}>
        Historial de Supervisión
      </Text>
      <View style={[styles.historyBox, isDark && styles.cardDark]}>
        {history.map((item, index) => {
          const status = getStatusStyle(item.status);
          return (
            <View key={item.id} style={[styles.historyRow, index === history.length - 1 && { borderBottomWidth: 0 }]}>
              <View style={{ width: '35%' }}>
                <Text style={[styles.rowMain, isDark && styles.textWhite]}>{item.vendor}</Text>
                <Text style={styles.rowSub}>ID: #{item.id}821</Text>
              </View>
              <Text style={[styles.rowInspector, isDark && styles.textWhite]}>{item.inspector}</Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={[styles.statusTag, { backgroundColor: status.bg }]}>
                  {status.icon}
                  <Text style={[styles.statusTagText, { color: status.text }]}>{status.label}</Text>
                </View>
                <Text style={styles.rowSub}>{item.time}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* 5. Gestión de Territorio */}
      <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }, isDark && styles.textWhite]}>
        Gestión de Territorio
      </Text>
      <View style={[styles.territoryCard, isDark && styles.cardDark]}>
        <View style={styles.territoryHeader}>
          <MapPin size={18} color="#003b5a" />
          <Text style={[styles.territoryLabel, isDark && styles.textWhite]}>Vista General de Comunas</Text>
        </View>
        <Image 
          source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=-33.4489,-70.6693&zoom=13&size=600x300&sensor=false' }} 
          style={styles.mapPreview} 
        />
        <View style={styles.territoryStats}>
          <View style={[styles.statBox, isDark && styles.statBoxDark]}>
            <Text style={styles.statTag}>ZONA CRÍTICA</Text>
            <Text style={[styles.statValue, isDark && styles.textWhite]}>Sector Alameda</Text>
          </View>
          <View style={[styles.statBox, isDark && styles.statBoxDark]}>
            <Text style={styles.statTag}>PERSONAL</Text>
            <Text style={[styles.statValue, isDark && styles.textWhite]}>12 Oficiales</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  bgDark: { backgroundColor: '#121416' },
  content: { padding: 16, paddingBottom: 40 },
  textWhite: { color: '#fff' },
  cardDark: { backgroundColor: '#1d2023', borderColor: '#333' },
  borderDark: { borderColor: '#003b5a' },
  
  mainTitle: { fontSize: 26, fontWeight: '800', color: '#003b5a', marginBottom: 20 },
  
  // Grid
  actionGrid: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  actionBtnPrimary: { flex: 1, height: 120, backgroundColor: '#1a5276', borderRadius: 16, padding: 16, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  actionBtnText: { color: '#fff', fontSize: 13, fontWeight: '700', textAlign: 'center', marginTop: 8 },
  actionBtnOutline: { flex: 1, height: 120, borderWidth: 2, borderColor: '#003b5a', borderStyle: 'solid', borderRadius: 16, padding: 16, justifyContent: 'center', alignItems: 'center' },
  actionBtnTextOutline: { color: '#003b5a', fontSize: 13, fontWeight: '700', textAlign: 'center', marginTop: 8 },

  // Active Inspectors
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#191c1e' },
  badgeCount: { backgroundColor: '#7bf8a1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  badgeCountText: { fontSize: 12, fontWeight: '700', color: '#00210c' },
  
  inspectorCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, borderColor: '#e6e8ea', borderWidth: 1, marginBottom: 12 },
  inspectorInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  inspectorAvatar: { width: 56, height: 56, borderRadius: 28 },
  inspectorName: { fontSize: 16, fontWeight: '700', color: '#003b5a' },
  inspectorRole: { fontSize: 13, color: '#72787f' },
  
  inspectorFooter: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#f2f4f6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatarStack: { flexDirection: 'row', alignItems: 'center' },
  stackImage: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: '#fff' },
  stackMore: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#eceef0', borderColor: '#fff', borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
  stackMoreText: { fontSize: 10, fontWeight: '800', color: '#41474e' },
  footerLink: { fontSize: 13, fontWeight: '600', color: '#1a5276' },

  // History Table
  historyBox: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderColor: '#e6e8ea', borderWidth: 1 },
  historyRow: { flexDirection: 'row', padding: 12, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f2f4f6' },
  rowMain: { fontSize: 14, fontWeight: '700', color: '#003b5a' },
  rowSub: { fontSize: 11, color: '#72787f' },
  rowInspector: { fontSize: 13, color: '#191c1e', width: '25%' },
  statusTag: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, marginBottom: 2 },
  statusTagText: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase' },

  // Territory
  territoryCard: { backgroundColor: '#f2f4f6', padding: 12, borderRadius: 16 },
  territoryHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  territoryLabel: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  mapPreview: { width: '100%', height: 150, borderRadius: 12, opacity: 0.9 },
  territoryStats: { flexDirection: 'row', gap: 8, marginTop: 12 },
  statBox: { flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 8, borderColor: '#e6e8ea', borderWidth: 1 },
  statBoxDark: { backgroundColor: '#2d3133', borderColor: '#444' },
  statTag: { fontSize: 9, fontWeight: '800', color: '#72787f' },
  statValue: { fontSize: 13, fontWeight: '700', color: '#003b5a' },
});