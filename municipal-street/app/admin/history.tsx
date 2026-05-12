import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, TrendingUp, Building2, UserCircle } from 'lucide-react-native';
import { FineCard } from '@/components/ui/fineCard';


export default function FinesHistoryScreen() {
  const zones = ["Zona Centro", "Zona Norte", "Zona Sur", "Sector Industrial"];

  return (
    <View style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.appBar}>
        <View style={styles.appBarTitleRow}>
          <Building2 color="#003b5a" size={24} />
          <Text style={styles.appBarTitle}>Gestión Municipal</Text>
        </View>
        <TouchableOpacity><UserCircle color="#003b5a" size={28} /></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerContent}>
          <Text style={styles.pageTitle}>Historial de Multas</Text>
          <Text style={styles.pageSub}>Administración por sector municipal</Text>
        </View>

        {/* Zone Selector */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.zoneScroll}>
          {zones.map((zone, i) => (
            <TouchableOpacity key={zone} style={[styles.zoneBtn, i === 0 && styles.zoneBtnActive]}>
              <Text style={[styles.zoneBtnText, i === 0 && styles.zoneBtnTextActive]}>{zone}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Stats Bento Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statBox, styles.statBoxFull]}>
            <Text style={styles.statLabel}>Total Recaudado</Text>
            <Text style={styles.statMainVal}>$124,500.00</Text>
            <View style={styles.trendRow}>
              <TrendingUp size={14} color="#006d37" />
              <Text style={styles.trendText}>+12.5% vs mes anterior</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Sanciones</Text>
            <Text style={styles.statSmallVal}>142</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Gravedad</Text>
            <Text style={[styles.statSmallVal, { color: '#6f4400' }]}>Media</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#72787f" style={styles.searchIcon} />
          <TextInput 
            placeholder="Buscar por folio o comerciante..." 
            style={styles.searchInput}
          />
        </View>

        {/* List Section */}
        <Text style={styles.listHeading}>Multas Recientes</Text>
        <FineCard 
          folio="#ML-8821" 
          merchant="Puesto 'El Güero'" 
          date="24 Oct 2023" 
          amount="$1,250.00" 
          location="Calle Morelos, Zona Centro" 
          status="Pagada" 
        />
        <FineCard 
          folio="#ML-8825" 
          merchant="Artesanías Martínez" 
          date="25 Oct 2023" 
          amount="$2,800.00" 
          location="Plaza Principal, Zona Centro" 
          status="Pendiente" 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  appBar: { height: 80, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 30, borderBottomWidth: 1, borderColor: '#eceef0' },
  appBarTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  appBarTitle: { fontSize: 18, fontWeight: '700', color: '#003b5a' },
  
  scrollBody: { padding: 16, paddingBottom: 100 },
  headerContent: { marginBottom: 20 },
  pageTitle: { fontSize: 26, fontWeight: '800', color: '#003b5a' },
  pageSub: { fontSize: 14, color: '#72787f' },

  zoneScroll: { marginBottom: 24 },
  zoneBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: '#fff', marginRight: 8, borderWidth: 1, borderColor: '#e0e3e5' },
  zoneBtnActive: { backgroundColor: '#003b5a', borderColor: '#003b5a' },
  zoneBtnText: { fontSize: 13, fontWeight: '600', color: '#41474e' },
  zoneBtnTextActive: { color: '#fff' },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  statBox: { flex: 1, minWidth: '45%', backgroundColor: '#fff', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#e0e3e5', justifyContent: 'center' },
  statBoxFull: { width: '100%', flex: 0, minWidth: '100%' },
  statLabel: { fontSize: 12, fontWeight: '600', color: '#72787f', marginBottom: 4 },
  statMainVal: { fontSize: 28, fontWeight: '800', color: '#003b5a' },
  statSmallVal: { fontSize: 22, fontWeight: '800', color: '#003b5a' },
  trendRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  trendText: { fontSize: 12, fontWeight: '600', color: '#006d37' },

  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#c1c7cf', paddingHorizontal: 12, marginBottom: 24 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 50, fontSize: 15 },
  listHeading: { fontSize: 18, fontWeight: '700', color: '#191c1e', marginBottom: 16 }
});