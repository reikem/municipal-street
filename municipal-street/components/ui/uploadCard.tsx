import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CloudUpload, PlusCircle, Upload } from 'lucide-react-native';

export const UploadCard = () => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <CloudUpload color="#94c5ee" size={28} />
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Subir Permiso Pagado</Text>
        <Text style={styles.subtitle}>Sube el comprobante PDF o imagen de tu último pago.</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.dropzone} activeOpacity={0.7}>
      <PlusCircle color="#72787f" size={32} />
      <Text style={styles.dropzoneText}>Toca para seleccionar archivo</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.confirmBtn}>
      <Upload color="white" size={20} />
      <Text style={styles.confirmBtnText}>Confirmar Envío</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#c1c7cf', gap: 16 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconContainer: { backgroundColor: '#1a5276', padding: 10, borderRadius: 12 },
  textGroup: { flex: 1 },
  title: { fontSize: 18, fontWeight: '700', color: '#191c1e' },
  subtitle: { fontSize: 13, color: '#41474e' },
  dropzone: { 
    height: 120, 
    borderWidth: 2, 
    borderStyle: 'dashed', 
    borderColor: '#c1c7cf', 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f7f9fb' 
  },
  dropzoneText: { marginTop: 8, color: '#72787f', fontWeight: '600' },
  confirmBtn: { 
    backgroundColor: '#1a5276', 
    height: 56, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8 
  },
  confirmBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});