import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Share2, CheckCircle2, ChevronRight } from 'lucide-react-native';

import { Header } from '@/components/ui/Headers';
import { CredentialCard } from '@/components/ui/credentialCard';
 // Reutilizando el de pasos anteriores

 export default function CredentialScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.intro}>
          <Text style={styles.h1}>Credencial Digital</Text>
          <Text style={styles.p}>Presente este código para verificaciones de inspección oficial.</Text>
        </View>

        <CredentialCard />

        {/* Sección QR */}
        <View style={styles.qrSection}>
          <View style={styles.qrGradientFrame}>
            <View style={styles.qrContainer}>
               <Image 
                 source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VALIDATION-TOKEN-XK-921' }} 
                 style={styles.qrImage}
               />
            </View>
          </View>
          <Text style={styles.qrLabel}>ESCANEAR PARA VALIDAR</Text>
          <Text style={styles.qrToken}>Token dinámico: <Text style={styles.mono}>XK-921</Text></Text>
        </View>

        {/* Botones de Acción */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.8}>
            <ChevronRight color="#fff" size={22} fill="white" />
            <Text style={styles.primaryBtnText}>Activar NFC para Inspección</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryBtn}>
            <Share2 color="#003b5a" size={20} />
            <Text style={styles.secondaryBtnText}>Compartir Credencial</Text>
          </TouchableOpacity>
        </View>

        {/* Detalles de Autorización */}
        <View style={styles.detailsBox}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailsHeaderTitle}>Detalles de Autorización</Text>
          </View>
          
          <DetailRow label="Estado del Permiso">
            <View style={styles.authorizedBadge}>
              <CheckCircle2 color="#fff" size={14} fill="white" />
              <Text style={styles.authorizedBadgeText}>AUTORIZADO</Text>
            </View>
          </DetailRow>
          
          <DetailRow label="Categoría" value="Artesanía y Bazar" />
          <DetailRow label="Zona Horaria" value="09:00 - 18:00" isLast />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailRow = ({ label, value, children, isLast }: any) => (
  <View style={[styles.detailRow, isLast && { borderBottomWidth: 0 }]}>
    <Text style={styles.detailLabel}>{label}</Text>
    {children || <Text style={styles.detailValue}>{value}</Text>}
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f9fb' },
  scroll: { padding: 16, gap: 24, paddingBottom: 120 },
  intro: { gap: 4 },
  h1: { fontSize: 28, fontWeight: '800', color: '#003b5a' },
  p: { fontSize: 16, color: '#72787f' },
  
  // QR Style
  qrSection: { 
    backgroundColor: '#f2f4f6', 
    borderRadius: 24, 
    padding: 30, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#e0e3e5' 
  },
  qrGradientFrame: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#003b5a', // Simula el gradiente del QR
    marginBottom: 16,
    elevation: 5,
  },
  qrContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
  },
  qrImage: { width: 160, height: 160 },
  qrLabel: { fontSize: 14, fontWeight: '800', color: '#003b5a', letterSpacing: 2 },
  qrToken: { fontSize: 12, color: '#72787f', marginTop: 4 },
  mono: { fontFamily: 'monospace', fontWeight: '700' },

  // Buttons
  actions: { gap: 12 },
  primaryBtn: { 
    backgroundColor: '#1a5276', 
    height: 56, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10,
    elevation: 4
  },
  primaryBtnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  secondaryBtn: { 
    borderWidth: 2, 
    borderColor: '#003b5a', 
    height: 56, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10 
  },
  secondaryBtnText: { color: '#003b5a', fontWeight: '800', fontSize: 16 },

  // Details
  detailsBox: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#e0e3e5' },
  detailsHeader: { backgroundColor: '#eceef0', padding: 12 },
  detailsHeaderTitle: { fontSize: 12, fontWeight: '700', color: '#191c1e' },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f2f4f6' },
  detailLabel: { color: '#72787f', fontSize: 14 },
  detailValue: { fontWeight: '700', color: '#191c1e' },
  authorizedBadge: { backgroundColor: '#007239', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6 },
  authorizedBadgeText: { color: '#fff', fontSize: 11, fontWeight: '800' }
});