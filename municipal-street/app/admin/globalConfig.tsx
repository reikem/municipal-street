import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Search, MapPin, Filter, Gavel, Navigation, Fullscreen } from 'lucide-react-native';
import { CommuneCard } from '@/components/ui/communeCard';


export default function GlobalConfigScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      {/* Header Dinámico */}
      <View style={styles.topHeader}>
        <View>
          <Text style={styles.title}>Configuración Global</Text>
          <Text style={styles.subtitle}>Gestión de perímetros y reglas</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <MapPin size={20} color="#fff" />
          <Text style={styles.addBtnText}>Nueva</Text>
        </TouchableOpacity>
      </View>

      {/* Buscador */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Search size={20} color="#72787f" />
          <TextInput placeholder="Buscar comuna..." style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter size={20} color="#003b5a" />
        </TouchableOpacity>
      </View>

      {/* Visualización de Territorio (Mapa Preview) */}
      <View style={styles.mapCard}>
        <View style={styles.mapHeader}>
          <Text style={styles.mapTitle}>Visualización de Territorio</Text>
          <Fullscreen size={18} color="#003b5a" />
        </View>
        <View style={styles.mapPlaceholder}>
          {/* Aquí iría el componente de Google Maps / MapLibre */}
          <View style={styles.mapOverlay}>
             <View style={styles.editingBadge}>
                <Navigation size={14} color="#fff" />
                <Text style={styles.editingText}>Modo Edición Activo</Text>
             </View>
          </View>
        </View>
        <View style={styles.coordBar}>
          <Text style={styles.coordLabel}>POLYGON REFERENCE</Text>
          <Text style={styles.coordValue} numberOfLines={1}>POLYGON((-70.65 33.45, -70.64 33.44...))</Text>
        </View>
      </View>

      {/* Lista de Comunas */}
      <Text style={styles.sectionTitle}>Comunas Activas</Text>
      <CommuneCard 
        name="Santiago Centro" 
        zone="Zona Administrativa 01" 
        count="450" limit="500" 
        hours="08:00 - 20:00" 
        status="Authorized" 
      />
      <CommuneCard 
        name="Providencia" 
        zone="Zona Administrativa 05" 
        count="120" limit="150" 
        hours="09:00 - 18:00" 
        status="Pending" 
      />

      {/* Reglas Globales Quick-Set */}
      <View style={styles.rulesBox}>
        <View style={styles.rulesHeader}>
          <Gavel size={20} color="#003b5a" />
          <Text style={styles.rulesTitle}>Reglas Globales</Text>
        </View>
        <RuleToggle label="Validación GPS Obligatoria" active={true} />
        <RuleToggle label="Fotos de Puesto Requeridas" active={false} />
      </View>

    </ScrollView>
  );
}

const RuleToggle = ({ label, active }: { label: string, active: boolean }) => (
  <View style={styles.ruleRow}>
    <Text style={styles.ruleLabel}>{label}</Text>
    <View style={[styles.toggleBase, active ? styles.toggleActive : styles.toggleInactive]}>
      <View style={[styles.toggleCircle, active ? { right: 4 } : { left: 4 }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 120 },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '800', color: '#003b5a' },
  subtitle: { fontSize: 14, color: '#41474e' },
  addBtn: { backgroundColor: '#003b5a', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, gap: 8, elevation: 3 },
  addBtnText: { color: '#fff', fontWeight: '700' },
  
  searchSection: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  searchBar: { flex: 1, backgroundColor: '#fff', height: 48, borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#c1c7cf' },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 15 },
  filterBtn: { width: 48, height: 48, backgroundColor: '#eceef0', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },

  mapCard: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#e6e8ea', marginBottom: 24 },
  mapHeader: { padding: 12, backgroundColor: '#eceef0', flexDirection: 'row', justifyContent: 'space-between' },
  mapTitle: { fontSize: 13, fontWeight: '700', color: '#003b5a' },
  mapPlaceholder: { height: 180, backgroundColor: '#e0e3e5', justifyContent: 'center', alignItems: 'center' },
  mapOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.05)' },
  editingBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(0,59,90,0.85)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  editingText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  coordBar: { padding: 12, backgroundColor: '#003b5a' },
  coordLabel: { fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: '800' },
  coordValue: { color: '#fff', fontSize: 12, fontFamily: 'monospace', marginTop: 2 },

  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#003b5a', marginBottom: 12 },
  
  rulesBox: { backgroundColor: '#f2f4f6', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#e6e8ea' },
  rulesHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  rulesTitle: { fontSize: 15, fontWeight: '700', color: '#003b5a' },
  ruleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  ruleLabel: { fontSize: 14, color: '#191c1e' },
  toggleBase: { width: 44, height: 24, borderRadius: 12, padding: 4 },
  toggleActive: { backgroundColor: '#003b5a' },
  toggleInactive: { backgroundColor: '#c1c7cf' },
  toggleCircle: { width: 16, height: 16, backgroundColor: '#fff', borderRadius: 8, position: 'absolute', top: 4 }
});