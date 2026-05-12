import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { QrCode, Filter, CheckCircle2, Clock, User, ChevronRight } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function SupervisionScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Datos simulados de vendedores
  const vendors = [
    { id: 1, name: 'Juan Pérez García', post: '#1024', sector: 'Plaza Central', status: 'pending', image: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'María Elena Torres', post: '#0892', sector: 'Av. Central', status: 'verified', image: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Ricardo Soto V.', post: '#1150', sector: 'Calle 5 Oriente', status: 'pending', image: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <View style={styles.container}>
      {/* 1. Mapa de fondo */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.4489,
          longitude: -70.6693,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        userInterfaceStyle={isDark ? 'dark' : 'light'}
      >
        {/* Marcadores simulados */}
        <Marker coordinate={{ latitude: -33.4470, longitude: -70.6680 }} pinColor="#ba1a1a" />
        <Marker coordinate={{ latitude: -33.4495, longitude: -70.6690 }} pinColor="#006d37" />
        <Marker coordinate={{ latitude: -33.4480, longitude: -70.6710 }} pinColor="#ba1a1a" />
      </MapView>

      {/* 2. Filtros Flotantes */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <TouchableOpacity style={styles.filterBtn}>
            <Filter size={16} color="#41474e" />
            <Text style={styles.filterText}>Pendiente de Inspección</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <CheckCircle2 size={16} color="#41474e" />
            <Text style={styles.filterText}>Verificados</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* 3. FAB (Floating Action Button) */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <QrCode color="#fff" size={28} />
      </TouchableOpacity>

      {/* 4. Lista de Vendedores (BottomSheet Estático) */}
      <View style={[styles.sheet, isDark && styles.sheetDark]}>
        <View style={styles.sheetHeader}>
          <View>
            <Text style={[styles.sheetTitle, isDark && styles.textWhite]}>Vendedores Cercanos</Text>
            <Text style={styles.sheetSubtitle}>8 puestos en tu zona actual</Text>
          </View>
        </View>

        <ScrollView style={styles.vendorList}>
          {vendors.map((vendor) => (
            <TouchableOpacity key={vendor.id} style={styles.vendorCard}>
              <Image source={{ uri: vendor.image }} style={styles.vendorAvatar} />
              <View style={styles.vendorInfo}>
                <Text style={[styles.vendorName, isDark && styles.textWhite]}>{vendor.name}</Text>
                <Text style={styles.vendorPost}>Puesto {vendor.post} - {vendor.sector}</Text>
              </View>
              
              <View style={[
                styles.badge, 
                { backgroundColor: vendor.status === 'pending' ? '#ffdad6' : '#7bf8a1' }
              ]}>
                {vendor.status === 'pending' ? (
                  <Clock size={12} color="#93000a" />
                ) : (
                  <CheckCircle2 size={12} color="#007239" />
                )}
                <Text style={[
                  styles.badgeText, 
                  { color: vendor.status === 'pending' ? '#93000a' : '#007239' }
                ]}>
                  {vendor.status === 'pending' ? 'Pendiente' : 'Verificado'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  
  // Filtros
  filterContainer: { position: 'absolute', top: 50, left: 0, right: 0, zIndex: 10 },
  filterScroll: { paddingHorizontal: 16, gap: 8 },
  filterBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    borderRadius: 25, 
    gap: 8,
    borderWidth: 1,
    borderColor: '#e0e3e5',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filterText: { fontSize: 13, fontWeight: '600', color: '#41474e' },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 300,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#1a5276',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  // Bottom Sheet
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 280,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingBottom: 80, // Espacio para el TabBar
  },
  sheetDark: { backgroundColor: '#191c1e' },
  sheetHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f4f6',
  },
  sheetTitle: { fontSize: 18, fontWeight: '700', color: '#003b5a' },
  sheetSubtitle: { fontSize: 14, color: '#72787f' },
  textWhite: { color: '#fff' },

  // Vendor Card
  vendorList: { padding: 10 },
  vendorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    gap: 12,
  },
  vendorAvatar: { width: 48, height: 48, borderRadius: 10, backgroundColor: '#eceef0' },
  vendorInfo: { flex: 1 },
  vendorName: { fontSize: 15, fontWeight: '600', color: '#191c1e' },
  vendorPost: { fontSize: 12, color: '#72787f' },
  badge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 20, 
    gap: 4 
  },
  badgeText: { fontSize: 11, fontWeight: '700' },
});