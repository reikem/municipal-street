import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  Share 
} from 'react-native';
import { 
  Download, 
  History, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Verified 
} from 'lucide-react-native';
import { BentoCard } from '@/components/ui/bentoCard';


export default function MyPermitsScreen() {
  
  const handleDownload = async () => {
    try {
      await Share.share({
        message: 'Descargando comprobante de permiso PER-2024-8842...',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header Seccion */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>Mis Permisos</Text>
        <Text style={styles.subtitle}>Consulta y gestiona tus autorizaciones comerciales activas.</Text>
      </View>

      {/* Bento Grid Layout */}
      <View style={styles.bentoGrid}>
        
        {/* QR Principal (Span vertical en web, aquí lo destacamos arriba) */}
        <BentoCard style={styles.qrCard}>
          <Text style={styles.labelCaps}>Identificación Oficial</Text>
          <View style={styles.qrWrapper}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXP2FlC0TDL8NZFnUhyhtj8uOVFfSf4Vsc4H720x32kMGC6wg1ewjTqicwd66JTwrApFdkemtljXP1DDfuEVUX5TXxTRE7OuErGdcW99BtMDohgjnk78kAh2pEf-ma6imNkzEVhEn3-Vo3fJLqc6-0VdjoFVe3xkyvwV4BByZfZ5Qpbwt8iBl2pzjjX9o8-3q3z-yv4I0x_w-mGBGDgL2xaQupmwKKJKXdkiJXNH1jO27a3DYWHzdwOMawzfrF57hMveCGmA8hxpRh' }} 
              style={styles.qrImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.idLabel}>ID: PER-2024-8842</Text>
            <Text style={styles.helperText}>Muestra este código al inspector</Text>
          </View>
        </BentoCard>

        {/* Status y Alerta en fila */}
        <View style={styles.row}>
          <BentoCard style={styles.halfCard}>
            <Text style={styles.labelSmall}>Estado Actual</Text>
            <View style={styles.statusBadge}>
              <CheckCircle2 size={16} color="#007239" />
              <Text style={styles.statusText}>AUTORIZADO</Text>
            </View>
          </BentoCard>

          <BentoCard style={styles.halfCard}>
            <Text style={styles.labelSmall}>Próximo Pago</Text>
            <Text style={styles.valueText}>15 Dic</Text>
          </BentoCard>
        </View>

        {/* Alerta de renovación */}
        <BentoCard style={styles.alertCard}>
          <View style={styles.alertRow}>
            <AlertCircle size={20} color="#663e00" />
            <Text style={styles.alertText}>Renovación disponible en 5 días</Text>
          </View>
        </BentoCard>
      </View>

      {/* Detalles del Puesto */}
      <Text style={styles.sectionTitle}>Detalles del Puesto</Text>
      <BentoCard style={styles.detailsContainer}>
        <View style={styles.stallHeader}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOKkJbr597GXB0vF4NhdVWG-mUrQfcG0C3Ir_392rGdKPJmU7FtMD-exZgVTaYIMRh8CwyHX-_XE4nxhMB2ZVobWlUBcRXCZXRP7UJpjkqRtTokvJ36SNsHzbBCC8Yoe__5Q1p1FElnn7HL8rys3qtCN6tzm8jJqpx7LncoOK2jheoeEaX9ICOQ2Iu81naltxXRoszUnwUbaao32sUVmqewEAO2jNcfUw8T70NENlz4DjozkY53JyboLJwFy5zBQfUtRZ5KQwiX1jd' }} 
            style={styles.stallImage}
          />
          <View>
            <Text style={styles.stallName}>Puesto #42 - Plaza Central</Text>
            <View style={styles.locationRow}>
              <MapPin size={14} color="#72787f" />
              <Text style={styles.locationText}>Av. Insurgentes Sur 450</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <InfoItem label="GIRO" value="Artesanías" />
          <InfoItem label="HORARIO" value="09:00 - 20:00" />
          <InfoItem label="SUPERFICIE" value="7.5 m²" />
          <InfoItem label="TITULAR" value="R. García M." />
        </View>
      </BentoCard>

      {/* Botones de Acción */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleDownload}>
          <Download size={22} color="#fff" />
          <Text style={styles.btnTextPrimary}>Descargar Permiso PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary}>
          <History size={22} color="#003b5a" />
          <Text style={styles.btnTextSecondary}>Historial de Pagos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Sub-componente interno para la rejilla de info
const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  headerSection: { marginBottom: 24, marginTop: Platform.OS === 'ios' ? 40 : 10 },
  title: { fontSize: 28, fontWeight: '800', color: '#003b5a' },
  subtitle: { fontSize: 15, color: '#41474e', marginTop: 4 },
  
  bentoGrid: { gap: 12, marginBottom: 24 },
  qrCard: { alignItems: 'center', paddingVertical: 24 },
  qrWrapper: { 
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 16, 
    borderWidth: 2, 
    borderColor: '#1a5276',
    marginVertical: 16 
  },
  qrImage: { width: 180, height: 180 },
  labelCaps: { fontSize: 12, fontWeight: '700', color: '#003b5a', letterSpacing: 1 },
  idLabel: { fontSize: 22, fontWeight: '800', color: '#191c1e' },
  helperText: { fontSize: 13, color: '#72787f', marginTop: 4 },
  textCenter: { alignItems: 'center' },

  row: { flexDirection: 'row', gap: 12 },
  halfCard: { flex: 1, justifyContent: 'center' },
  labelSmall: { fontSize: 11, fontWeight: '600', color: '#72787f', marginBottom: 4 },
  statusBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#7bf8a1', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 99,
    gap: 4 
  },
  statusText: { fontSize: 10, fontWeight: '800', color: '#007239' },
  valueText: { fontSize: 18, fontWeight: '700', color: '#191c1e' },

  alertCard: { backgroundColor: '#ffddb9', borderColor: '#ffae42' },
  alertRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  alertText: { fontSize: 14, fontWeight: '600', color: '#663e00' },

  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#003b5a', marginBottom: 12 },
  detailsContainer: { padding: 0, overflow: 'hidden' },
  stallHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: '#f2f4f6', 
    gap: 12 
  },
  stallImage: { width: 50, height: 50, borderRadius: 8 },
  stallName: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  locationText: { fontSize: 12, color: '#72787f' },

  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 16, gap: 16 },
  infoItem: { width: '45%' },
  infoLabel: { fontSize: 10, fontWeight: '700', color: '#72787f' },
  infoValue: { fontSize: 14, fontWeight: '600', color: '#191c1e' },

  actions: { marginTop: 24, gap: 12 },
  btnPrimary: { 
    backgroundColor: '#003b5a', 
    height: 56, 
    borderRadius: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10 
  },
  btnTextPrimary: { color: '#fff', fontSize: 16, fontWeight: '700' },
  btnSecondary: { 
    backgroundColor: '#e6e8ea', 
    height: 56, 
    borderRadius: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10 
  },
  btnTextSecondary: { color: '#003b5a', fontSize: 16, fontWeight: '700' },
});