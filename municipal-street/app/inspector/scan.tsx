import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { QrCode, Contactless, Keyboard, Info } from 'lucide-react-native';
import { ScannerFrame } from '@/components/ui/scannerFrame';

export default function InspectorScanScreen() {
  const [mode, setMode] = useState<'QR' | 'NFC'>('QR');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Selector de Modo */}
        <View style={styles.modeToggle}>
          <TouchableOpacity 
            style={[styles.modeBtn, mode === 'QR' && styles.modeBtnActive]} 
            onPress={() => setMode('QR')}
          >
            <QrCode size={20} color={mode === 'QR' ? '#fff' : '#41474e'} />
            <Text style={[styles.modeText, mode === 'QR' && styles.modeTextActive]}>QR Code</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.modeBtn, mode === 'NFC' && styles.modeBtnActive]} 
            onPress={() => setMode('NFC')}
          >
            <Contactless size={20} color={mode === 'NFC' ? '#fff' : '#41474e'} />
            <Text style={[styles.modeText, mode === 'NFC' && styles.modeTextActive]}>NFC Tag</Text>
          </TouchableOpacity>
        </View>

        {/* Visor del Escáner */}
        <ScannerFrame />

        {/* Instrucciones */}
        <View style={styles.instructions}>
          <Text style={styles.title}>Encuadre el código QR</Text>
          <Text style={styles.subtitle}>
            Coloque el código de permiso del vendedor dentro del recuadro para verificar su validez.
          </Text>
        </View>

        {/* Acciones Manuales */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.manualBtn}>
            <Keyboard size={20} color="#003b5a" />
            <Text style={styles.manualBtnText}>Ingresar ID manualmente</Text>
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Info size={20} color="#003b5a" />
            <Text style={styles.infoText}>Asegúrese de que haya suficiente luz para el escaneo.</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  content: { padding: 20, alignItems: 'center', paddingTop: 40, paddingBottom: 100 },
  
  modeToggle: {
    flexDirection: 'row',
    backgroundColor: '#eceef0',
    padding: 4,
    borderRadius: 16,
    marginBottom: 32,
    width: '100%',
  },
  modeBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  modeBtnActive: { backgroundColor: '#003b5a' },
  modeText: { fontSize: 14, fontWeight: '600', color: '#41474e' },
  modeTextActive: { color: '#fff' },

  instructions: { marginTop: 32, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700', color: '#003b5a', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#41474e', textAlign: 'center', paddingHorizontal: 20 },

  actions: { width: '100%', marginTop: 'auto', paddingTop: 40, gap: 16 },
  manualBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#eceef0',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#c1c7cf',
    gap: 10,
  },
  manualBtnText: { color: '#003b5a', fontWeight: '700', fontSize: 14 },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f4f6',
    padding: 16,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#003b5a',
    gap: 12,
  },
  infoText: { flex: 1, color: '#41474e', fontSize: 13, fontWeight: '600' },
});