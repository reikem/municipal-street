import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import { Download, History, MapPin, Verified, ShieldCheck, CalendarClock } from 'lucide-react-native';
import { StatusCard } from '@/components/ui/StatusCard';

export default function MyPermitsScreen() {
  
  const onDownloadPDF = async () => {
    // Simulación de compartir/descargar el PDF oficial
    try {
      await Share.share({
        message: 'Descargando Permiso Municipal PER-2024-8842 en formato PDF...',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Reutilizamos el Header ya definido en pasos anteriores */}
      <View style={styles.header}>
        <Text style={styles.title}>Mis Permisos</Text>
        <Text style={styles.subtitle}>Gestiona tus autorizaciones comerciales.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Sección QR - Principal para Inspección */}
        <View style={styles.qrSection}>
          <Text style={styles.qrHeader}>IDENTIFICACIÓN OFICIAL</Text>
          <View style={styles.qrContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXP2FlC0TDL8NZFnUhyhtj8uOVFfSf4Vsc4H720x32kMGC6wg1ewjTqicwd66JTwrApFdkemtljXP1DDfuEVUX5TXxTRE7OuErGdcW99BtMDohgjnk78kAh2pEf-ma6imNkzEVhEn3-Vo3fJLqc6-0VdjoFVe3xkyvwV4BByZfZ5Qpbwt8iBl2pzjjX9o8-3q3z-yv4I0x_w-mGBGDgL2xaQupmwKKJKXdkiJXNH1jO27a3DYWHzdwOMawzfrF57hMveCGmA8hxpRh' }} 
              style={styles.qrImage}
            />
          </View>
          <Text style={styles.idText}>ID: PER-2024-8842</Text>
          <Text style={styles.helperText}>Muestra este código al inspector municipal</Text>
        </View>

        {/* Bento Grid de Estatus */}
        <View style={styles.statusGrid}>
          <StatusCard 
            label="Estado Actual"
            value="Autorizado"
            type="success"
            icon={Verified}
          />
          <StatusCard 
            label="Vencimiento"
            value="15 Dic 2024"
            type="warning"
            icon={CalendarClock}
            footerText="Renovación en 5 días"
          />
        </View>

        {/* Detalles del Puesto */}
        <View style={styles.detailsCard}>
          <View style={styles.detailsHeader}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOKkJbr597GXB0vF4NhdVWG-mUrQfcG0C3Ir_392rGdKPJmU7FtMD-exZgVTaYIMRh8CwyHX-_XE4nxhMB2ZVobWlUBcRXCZXRP7UJpjkqRtTokvJ36SNsHzbBCC8Yoe__5Q1p1FElnn7HL8rys3qtCN6tzm8jJqpx7LncoOK2jheoeEaX9ICOQ2Iu81naltxXRoszUnwUbaao32sUVmqewEAO2jNcfUw8T70NENlz4DjozkY53JyboLJwFy5zBQfUtRZ5KQwiX1jd' }} 
              style={styles.stallThumb}
            />
            <View style={styles.stallInfo}>
              <Text style={styles.stallName}>Puesto #42 - Plaza Central</Text>
              <View style={styles.locationRow}>
                <MapPin size={14} color="#72787f" />
                <Text style={styles.locationText}>Av. Insurgentes Sur 450</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>GIRO COMERCIAL</Text>
              <Text style={styles.infoValue}>Artesanías y Textiles</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>SUPERFICIE</Text>
              <Text style={styles.infoValue}>7.5 m² (2.5x3m)</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>HORARIO</Text>
              <Text style={styles.infoValue}>09:00 AM - 08:00 PM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>TITULAR</Text>
              <Text style={styles.infoValue}>Roberto García Méndez</Text>
            </View>
          </View>
        </View>

        {/* Acciones Rápidas */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnPrimary} onPress={onDownloadPDF}>
            <Download size={20} color="#fff" />
            <Text style={styles.btnPrimaryText}>Descargar Permiso PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSecondary}>
            <History size={20} color="#003b5a" />
            <Text style={styles.btnSecondaryText}>Historial de Pagos</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  header: { padding: 20, paddingTop: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eceef0' },
  title: { fontSize: 26, fontWeight: '800', color: '#003b5a' },
  subtitle: { fontSize: 14, color: '#72787f', marginTop: 4 },

  content: { padding: 16, paddingBottom: 120 },
  
  qrSection: { backgroundColor: '#fff', padding: 24, borderRadius: 24, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#e0e3e5', elevation: 2 },
  qrHeader: { fontSize: 12, fontWeight: '800', color: '#003b5a', letterSpacing: 1.5, marginBottom: 20 },
  qrContainer: { padding: 16, backgroundColor: '#fff', borderRadius: 16, borderWidth: 2, borderColor: '#1a5276' },
  qrImage: { width: 180, height: 180 },
  idText: { fontSize: 22, fontWeight: '800', color: '#191c1e', marginTop: 20 },
  helperText: { fontSize: 13, color: '#72787f', marginTop: 4 },

  statusGrid: { flexDirection: 'row', gap: 12, marginBottom: 16 },

  detailsCard: { backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#e0e3e5', marginBottom: 20 },
  detailsHeader: { flexDirection: 'row', padding: 16, backgroundColor: '#f2f4f6', alignItems: 'center', gap: 12 },
  stallThumb: { width: 56, height: 56, borderRadius: 10 },
  stallInfo: { flex: 1 },
  stallName: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  locationText: { fontSize: 12, color: '#72787f' },

  infoGrid: { padding: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  infoItem: { width: '45%' },
  infoLabel: { fontSize: 10, fontWeight: '700', color: '#72787f', marginBottom: 4 },
  infoValue: { fontSize: 14, fontWeight: '600', color: '#191c1e' },

  actions: { gap: 12 },
  btnPrimary: { height: 56, backgroundColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  btnPrimaryText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  btnSecondary: { height: 56, backgroundColor: '#e6e8ea', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  btnSecondaryText: { color: '#003b5a', fontWeight: '700', fontSize: 16 }
});