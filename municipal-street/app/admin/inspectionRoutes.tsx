import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Phone, Info, Users, AlertTriangle, BarChart3, Store, CheckCircle2, ChevronRight } from 'lucide-react-native';
import { MapMarker } from '@/components/ui/mapMarker';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function InspectionRoutesScreen() {
  return (
    <View style={styles.container}>
      {/* MAPA (Capa Inferior) */}
      <View style={styles.mapCanvas}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANf00dh1jq_xkDanbGAdH1yH3VLhn2LWxW6g9oYxKf2wGTa19yhsrJvUUDs9xsfy-bcVgRVDmSg2lcoxm1dI-dIFF9-pJE7HvchdD0RXaI9ZKIArri4Z16QXaPhqADdK4oRsyoPa6p3TjH4VSJLTyxekG8gmBgAG-wayAUxLGfTaUxwBrMAYafBHdoZ6XBc_D8pfWZGqUHvFTsIEQBLMNwkT98PJ8DA1isXWxn76PZT5Gey4wQBlWD9F7QJsXC_RdRUyNzYz68z74N' }} 
          style={styles.mapImage}
          resizeMode="cover"
        />
        {/* Marcadores React Native sobre la imagen */}
        <MapMarker label="Inspector 042" color="#006d37" top="30%" left="40%" />
        <MapMarker label="Puesto #102" color="#003b5a" top="55%" left="70%" />
      </View>

      {/* Filtros Flotantes (Capa Media) */}
      <View style={styles.filterBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <TouchableOpacity style={styles.activeFilter}>
            <Users size={18} color="#fff" />
            <Text style={styles.activeFilterText}>Todos los Inspectores</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.inactiveFilter}>
            <AlertTriangle size={18} color="#ba1a1a" />
            <Text style={styles.inactiveFilterText}>Alertas Activas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inactiveFilter}>
            <BarChart3 size={18} color="#6f4400" />
            <Text style={styles.inactiveFilterText}>Zonas Críticas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* PANEL DE DETALLE (Capa Superior) */}
      <View style={styles.detailPanel}>
        <View style={styles.dragHandle} />
        
        <View style={styles.panelHeader}>
          <View style={styles.profileRow}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLmutBH26T1zJIawQAvroeoSOxdEYU8GDPN26xkHzDH-FGzJ0jA-q8z5Hw2zUad4xqCl_wY5GbnH5WSCCbessrbbkZYMZ4p_I16U8SdKJTaqxBRk9p3p8SbS-9T1mes1u1gWZMS_Df7y-jOK5gOrBF181h2QekMF4tZnSvMWIP_bA40siQwHNNd9K4LCNqrKtNDEN5kGpWxzJrvaLBJGKc_Pia81P2Kym5AqtLhz9V5z5SSWMXQkR71FfMe-VJyWWRMpqofp3yprQC' }} 
              style={styles.inspectorPhoto} 
            />
            <View>
              <Text style={styles.inspectorName}>Carlos Mendoza</Text>
              <Text style={styles.inspectorId}>ID: INS-29402 • Zona Norte</Text>
            </View>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>En ruta</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>PRÓXIMO PUNTO</Text>
            <View style={styles.statContent}>
              <Store size={18} color="#003b5a" />
              <Text style={styles.statText} numberOfLines={1}>Puesto de Flores `&quot;`Elena`&quot;</Text>
            </View>
            <Text style={styles.statSub}>ETA: 4 min</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statLabel}>ACTIVIDAD RECIENTE</Text>
            <View style={styles.statContent}>
              <CheckCircle2 size={18} color="#006d37" />
              <Text style={styles.statText}>Puesto #098 OK</Text>
            </View>
            <Text style={styles.statSub}>Hace 12 min</Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.callBtn}>
            <Phone size={20} color="#fff" />
            <Text style={styles.callBtnText}>Contactar Inspector</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoBtn}>
            <Info size={24} color="#003b5a" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  mapCanvas: { flex: 1, position: 'absolute', width: '100%', height: '70%' },
  mapImage: { width: '100%', height: '100%' },
  filterBar: { marginTop: 60, paddingHorizontal: 16 },
  filterScroll: { gap: 10, paddingRight: 40 },
  activeFilter: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#003b5a', paddingHorizontal: 16, height: 44, borderRadius: 22, elevation: 4 },
  activeFilterText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  inactiveFilter: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#fff', paddingHorizontal: 16, height: 44, borderRadius: 22, borderWidth: 1, borderColor: '#c1c7cf' },
  inactiveFilterText: { color: '#41474e', fontSize: 13, fontWeight: '700' },
  
  detailPanel: { 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    backgroundColor: '#fff', 
    borderTopLeftRadius: 32, 
    borderTopRightRadius: 32, 
    padding: 20, 
    paddingBottom: 40,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  dragHandle: { width: 40, height: 5, backgroundColor: '#e0e3e5', borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  panelHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  profileRow: { flexDirection: 'row', gap: 12 },
  inspectorPhoto: { width: 64, height: 64, borderRadius: 16, borderWidth: 1, borderColor: '#eceef0' },
  inspectorName: { fontSize: 20, fontWeight: '800', color: '#003b5a' },
  inspectorId: { fontSize: 14, color: '#72787f' },
  statusBadge: { backgroundColor: '#7bf8a1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  statusBadgeText: { color: '#00210c', fontSize: 12, fontWeight: '700' },
  
  statsGrid: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: '#f2f4f6', padding: 12, borderRadius: 16, borderWidth: 1, borderColor: '#e0e3e5' },
  statLabel: { fontSize: 10, fontWeight: '700', color: '#72787f', marginBottom: 8 },
  statContent: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statText: { fontSize: 13, fontWeight: '700', color: '#191c1e', flexShrink: 1 },
  statSub: { fontSize: 11, color: '#41474e', marginTop: 4 },
  
  actionRow: { flexDirection: 'row', gap: 12 },
  callBtn: { flex: 1, height: 56, backgroundColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  callBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  infoBtn: { width: 56, height: 56, borderRadius: 16, borderWidth: 2, borderColor: '#003b5a', justifyContent: 'center', alignItems: 'center' }
});