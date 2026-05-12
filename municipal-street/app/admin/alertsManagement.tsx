import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AlertCircle, Gavel, Users, Eye, Phone, Home, MapPin } from 'lucide-react-native';
import { AlertMarker } from '@/components/ui/alertMarker';


export default function AlertsManagementScreen() {
  return (
    <View style={styles.container}>
      {/* MAPA CON ALERTAS ACTIVAS */}
      <View style={styles.mapContainer}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANf00dh1jq_xkDanbGAdH1yH3VLhn2LWxW6g9oYxKf2wGTa19yhsrJvUUDs9xsfy-bcVgRVDmSg2lcoxm1dI-dIFF9-pJE7HvchdD0RXaI9ZKIArri4Z16QXaPhqADdK4oRsyoPa6p3TjH4VSJLTyxekG8gmBgAG-wayAUxLGfTaUxwBrMAYafBHdoZ6XBc_D8pfWZGqUHvFTsIEQBLMNwkT98PJ8DA1isXWxn76PZT5Gey4wQBlWD9F7QJsXC_RdRUyNzYz68z74N' }} 
          style={styles.mapBase}
        />
        {/* Marcadores de Alerta */}
        <AlertMarker type="danger" label="Venta no autorizada" top="25%" left="30%" />
        <AlertMarker type="danger" label="Puesto excedido" top="60%" left="15%" />
        <AlertMarker type="info" label="Inspector 042" top="45%" left="65%" />
      </View>

      {/* FILTROS RÁPIDOS */}
      <View style={styles.filterOverlay}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <TouchableOpacity style={styles.chipInactive}>
            <Users size={16} color="#41474e" />
            <Text style={styles.chipTextInactive}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipActive}>
            <AlertCircle size={16} color="#fff" />
            <Text style={styles.chipTextActive}>Alertas Activas (3)</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* PANEL DE INCIDENCIA SELECCIONADA */}
      <View style={styles.alertPanel}>
        <View style={styles.dragIndicator} />
        
        <View style={styles.header}>
          <View style={styles.inspectorInfo}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLmutBH26T1zJIawQAvroeoSOxdEYU8GDPN26xkHzDH-FGzJ0jA-q8z5Hw2zUad4xqCl_wY5GbnH5WSCCbessrbbkZYMZ4p_I16U8SdKJTaqxBRk9p3p8SbS-9T1mes1u1gWZMS_Df7y-jOK5gOrBF181h2QekMF4tZnSvMWIP_bA40siQwHNNd9K4LCNqrKtNDEN5kGpWxzJrvaLBJGKc_Pia81P2Kym5AqtLhz9V5z5SSWMXQkR71FfMe-VJyWWRMpqofp3yprQC' }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>Carlos Mendoza</Text>
              <Text style={styles.sub}>INS-29402 • Zona Norte</Text>
            </View>
          </View>
          <View style={styles.emergencyBadge}>
            <Text style={styles.emergencyText}>Atendiendo Alerta</Text>
          </View>
        </View>

        {/* INFO DE LA ALERTA */}
        <View style={styles.grid}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardLabel}>PRÓXIMA ACCIÓN</Text>
            <View style={styles.cardRow}>
              <Gavel size={18} color="#003b5a" />
              <Text style={styles.cardMainText}>Emitir Sanción</Text>
            </View>
            <Text style={[styles.cardStatus, { color: '#ba1a1a' }]}>Alta Prioridad</Text>
          </View>

          <View style={[styles.cardInfo, { backgroundColor: '#ffdad6', borderColor: '#ba1a1a' }]}>
            <Text style={[styles.cardLabel, { color: '#93000a' }]}>INCIDENCIA ACTUAL</Text>
            <View style={styles.cardRow}>
              <MapPin size={18} color="#ba1a1a" />
              <Text style={[styles.cardMainText, { color: '#93000a' }]}>Puesto #114</Text>
            </View>
            <Text style={[styles.cardStatus, { color: '#93000a' }]}>Sin Permiso</Text>
          </View>
        </View>

        {/* ACCIONES CRÍTICAS */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.mainAction}>
            <Eye size={20} color="#fff" />
            <Text style={styles.mainActionText}>Ver Detalles de Alerta</Text>
          </TouchableOpacity>
          
          <View style={styles.secondaryActions}>
            <TouchableOpacity style={styles.outlineAction}>
              <Users size={20} color="#003b5a" />
              <Text style={styles.outlineActionText}>Refuerzos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconBtn}>
              <Phone size={24} color="#41474e" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  mapContainer: { flex: 1 },
  mapBase: { width: '100%', height: '100%', opacity: 0.9 },
  
  filterOverlay: { position: 'absolute', top: 50, left: 0, right: 0, paddingHorizontal: 16 },
  filterScroll: { gap: 8 },
  chipActive: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#ba1a1a', paddingHorizontal: 16, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#ffdad6' },
  chipTextActive: { color: '#fff', fontWeight: '700', fontSize: 13 },
  chipInactive: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#fff', paddingHorizontal: 16, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#c1c7cf' },
  chipTextInactive: { color: '#41474e', fontWeight: '600', fontSize: 13 },

  alertPanel: { backgroundColor: '#fff', borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20, paddingBottom: 30, elevation: 25 },
  dragIndicator: { width: 40, height: 4, backgroundColor: '#e0e3e5', borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  inspectorInfo: { flexDirection: 'row', gap: 12 },
  avatar: { width: 56, height: 56, borderRadius: 12 },
  name: { fontSize: 18, fontWeight: '700', color: '#003b5a' },
  sub: { fontSize: 13, color: '#72787f' },
  emergencyBadge: { backgroundColor: '#ba1a1a', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, alignSelf: 'flex-start' },
  emergencyText: { color: '#fff', fontSize: 11, fontWeight: '700' },

  grid: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  cardInfo: { flex: 1, backgroundColor: '#f2f4f6', padding: 12, borderRadius: 16, borderWidth: 1, borderColor: '#c1c7cf' },
  cardLabel: { fontSize: 10, fontWeight: '700', color: '#72787f', marginBottom: 6 },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  cardMainText: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  cardStatus: { fontSize: 11, fontWeight: '600', marginTop: 4 },

  actionContainer: { gap: 12 },
  mainAction: { height: 56, backgroundColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  mainActionText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  secondaryActions: { flexDirection: 'row', gap: 12 },
  outlineAction: { flex: 1, height: 56, borderWidth: 2, borderColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  outlineActionText: { color: '#003b5a', fontWeight: '700' },
  iconBtn: { width: 56, height: 56, backgroundColor: '#eceef0', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }
});