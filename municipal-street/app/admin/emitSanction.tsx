import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ArrowLeft, Camera, X, Send, BadgeAlert, MapPin, Eraser } from 'lucide-react-native';
import { SeverityPicker } from '@/components/ui/severityPicker';


export default function EmitSanctionScreen() {
  const [severity, setSeverity] = useState('Alto');

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowLeft color="#003b5a" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emitir Sanción</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Context Card */}
        <View style={styles.contextCard}>
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>INFRACCIÓN ID</Text>
              <Text style={styles.primaryVal}>#114</Text>
            </View>
            <View>
              <Text style={styles.label}>UBICACIÓN</Text>
              <Text style={styles.primaryVal}>Puesto #114</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.inspectorRow}>
            <BadgeAlert size={18} color="#72787f" />
            <Text style={styles.inspectorText}>Inspector: <Text style={styles.bold}>Carlos Mendoza</Text></Text>
          </View>
        </View>

        {/* Formulario */}
        <View style={styles.formSection}>
          <Text style={styles.fieldLabel}>Tipo de Infracción</Text>
          <View style={styles.selectBox}>
            <Text style={styles.inputText}>Venta no autorizada</Text>
          </View>

          <Text style={styles.fieldLabel}>Nivel de Gravedad</Text>
          <SeverityPicker selected={severity as any} onSelect={setSeverity} />

          <Text style={styles.fieldLabel}>Monto de la Multa</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.currencyPrefix}>$</Text>
            <TextInput style={styles.textInput} placeholder="0.00" keyboardType="numeric" />
          </View>

          <Text style={styles.fieldLabel}>Descripción Detallada</Text>
          <TextInput 
            style={[styles.textInput, styles.textArea]} 
            placeholder="Describa los hechos..." 
            multiline 
            numberOfLines={4}
          />

          {/* Evidence */}
          <View style={styles.evidenceHeader}>
            <Text style={styles.fieldLabel}>Evidencia Fotográfica</Text>
            <Text style={styles.counter}>2 / 5</Text>
          </View>
          <View style={styles.evidenceGrid}>
            <View style={styles.photoBox}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXT92lMVLzxHHos79K7WNm93leBjOUfTL0lKZYs5lyRWqHDEmYizq1lKzhjE8Hh1uvt9QdDZat6MQ_BS3Vcd3KNKIM4wmlMlNzH5VaeaNdu8tjzFYKm-PN6FoskAj_oIrKjNssEPYmuff2Glhtv7iNkrjd2nGy6IhHqfM_S3pWZB7u13qi8pUKag9XEFtddkCU3CCy7VLNXOBR78Xrugu8eYxcn3_BBr-sJjPWLH2IMgsU2dKjrhPGHvnsHq4KjQ8FDABo2ub3mAZE' }} style={styles.photo} />
              <TouchableOpacity style={styles.removePhoto}><X size={14} color="#fff" /></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <Camera color="#72787f" size={32} />
              <Text style={styles.addText}>Adjuntar</Text>
            </TouchableOpacity>
          </View>

          {/* Signature */}
          <Text style={styles.fieldLabel}>Firma Digital del Inspector</Text>
          <View style={styles.signaturePad}>
             <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPFDyV1t9IUhtyM8kEmGQmyvsExXz9lN1k6GhLbJ0MuWWg325TiKrY1JmYX0CBzV6bItYBiBOeqeI7aiA3q3eFxAFqd-e9s4S-VJ7uCH0JFKaYxU7DoeoucaDdTNHQtA3z6zYyksPztZLf1xLo3HRT3aD-EB00ussX7JFNqPn3U-5sbkwX0TzlIG0ALdCoWpgvVUdZClEMon4upMIeTKVWQwhov-0hcExTM0yAJ-MIVSiOalk9Zc-WhQ2Bj0n7GAq-2m1TVLMsPptc' }} 
                style={styles.signatureImg} 
                resizeMode="contain"
              />
             <TouchableOpacity style={styles.clearBtn}>
                <Eraser size={14} color="#41474e" />
                <Text style={styles.clearText}>Limpiar</Text>
             </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Action Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn}><Text style={styles.cancelText}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.submitBtn}>
          <Send size={18} color="#fff" />
          <Text style={styles.submitText}>Emitir Sanción</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f7f9fb' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#c1c7cf', paddingTop: 20 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#003b5a', marginLeft: 16 },
  backBtn: { padding: 4 },
  
  scrollContent: { padding: 16, paddingBottom: 120 },
  contextCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 24, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 10, fontWeight: '700', color: '#72787f', marginBottom: 4 },
  primaryVal: { fontSize: 18, fontWeight: '800', color: '#003b5a' },
  divider: { height: 1, backgroundColor: '#c1c7cf', marginVertical: 12 },
  inspectorRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  inspectorText: { fontSize: 14, color: '#41474e' },
  bold: { fontWeight: '700', color: '#191c1e' },

  formSection: { gap: 16 },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: '#41474e' },
  selectBox: { height: 56, backgroundColor: '#eceef0', borderRadius: 8, justifyContent: 'center', paddingHorizontal: 16 },
  inputText: { fontSize: 16, color: '#191c1e' },
  inputWrapper: { height: 56, backgroundColor: '#eceef0', borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  currencyPrefix: { fontSize: 18, fontWeight: '700', color: '#72787f', marginRight: 8 },
  textInput: { flex: 1, fontSize: 16, color: '#191c1e', fontWeight: '700' },
  textArea: { height: 120, textAlignVertical: 'top', padding: 16, fontWeight: '400' },

  evidenceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  counter: { fontSize: 12, color: '#72787f' },
  evidenceGrid: { flexDirection: 'row', gap: 12 },
  photoBox: { width: 100, height: 100, borderRadius: 12, overflow: 'hidden' },
  photo: { width: '100%', height: '100%' },
  removePhoto: { position: 'absolute', top: 4, right: 4, backgroundColor: '#ba1a1a', borderRadius: 12, padding: 4 },
  addPhotoBtn: { width: 100, height: 100, borderRadius: 12, borderWidth: 2, borderStyle: 'dashed', borderColor: '#c1c7cf', justifyContent: 'center', alignItems: 'center' },
  addText: { fontSize: 10, fontWeight: '700', color: '#72787f', marginTop: 4 },

  signaturePad: { height: 160, backgroundColor: '#f2f4f6', borderRadius: 16, borderWidth: 1, borderColor: '#c1c7cf', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' },
  signatureImg: { width: '80%', height: '60%', opacity: 0.5 },
  clearBtn: { position: 'absolute', bottom: 12, right: 12, flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#e0e3e5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  clearText: { fontSize: 12, fontWeight: '600', color: '#41474e' },

  footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff', padding: 16, flexDirection: 'row', gap: 12, borderTopWidth: 1, borderColor: '#eceef0' },
  cancelBtn: { flex: 1, height: 56, borderRadius: 12, borderWidth: 2, borderColor: '#72787f', justifyContent: 'center', alignItems: 'center' },
  cancelText: { fontSize: 16, fontWeight: '700', color: '#003b5a' },
  submitBtn: { flex: 2, height: 56, backgroundColor: '#003b5a', borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, elevation: 4 },
  submitText: { fontSize: 16, fontWeight: '700', color: '#fff' }
});