import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Landmark, Wifi } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const CredentialCard = () => {
  return (
    <View style={styles.shadowContainer}>
      <LinearGradient
        colors={['#1a5276', '#003b5a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Efecto Shimmer decorativo */}
        <View style={styles.shimmer} />

        {/* Header de la Tarjeta */}
        <View style={styles.header}>
          <View style={styles.logoGroup}>
            <View style={styles.whiteIconBox}>
              <Landmark color="#003b5a" size={24} />
            </View>
            <View>
              <Text style={styles.deptText}>DIRECCIÓN DE COMERCIO</Text>
              <Text style={styles.muniText}>MUNICIPALIDAD</Text>
            </View>
          </View>
          <View style={styles.badgeGroup}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>VENDEDOR AUTORIZADO</Text>
            </View>
            <Text style={styles.idLabel}>ID: 2024-AMB-092</Text>
          </View>
        </View>

        {/* Body: Foto e Info Personal */}
        <View style={styles.body}>
          <View style={styles.photoContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200' }} 
              style={styles.photo}
            />
          </View>
          <View style={styles.personalInfo}>
            <Text style={styles.fieldLabel}>Nombre Completo</Text>
            <Text style={styles.nameValue} numberOfLines={1}>CARLOS ANDRÉS RIVAS</Text>
            
            <View style={styles.rowInfo}>
              <View>
                <Text style={styles.fieldLabel}>RUT / ID</Text>
                <Text style={styles.valueText}>12.345.678-9</Text>
              </View>
              <View>
                <Text style={styles.fieldLabel}>Vencimiento</Text>
                <Text style={[styles.valueText, { color: '#ffddb9' }]}>12 DIC 2024</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.fieldLabel}>Calle Asignada</Text>
            <Text style={styles.addressText}>Av. Libertador #450 - Sector Norte</Text>
          </View>
          <View style={styles.nfcRow}>
            <Wifi color="#fff" size={16} />
            <Text style={styles.nfcText}>NFC ACTIVE</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    marginVertical: 10,
  },
  card: {
    width: '100%',
    aspectRatio: 1.58,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  shimmer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.03)',
    transform: [{ rotate: '45deg' }, { translateY: -50 }],
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  logoGroup: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  whiteIconBox: { backgroundColor: '#fff', padding: 4, borderRadius: 8 },
  deptText: { color: '#fff', fontSize: 10, fontWeight: '600', opacity: 0.8, letterSpacing: 0.5 },
  muniText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  badgeGroup: { alignItems: 'flex-end' },
  statusBadge: { backgroundColor: '#007239', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  statusText: { color: '#fff', fontSize: 9, fontWeight: '800' },
  idLabel: { color: '#fff', fontSize: 10, opacity: 0.7, marginTop: 4 },
  body: { flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 10 },
  photoContainer: { width: 90, height: 90, borderRadius: 12, borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)', overflow: 'hidden' },
  photo: { width: '100%', height: '100%' },
  personalInfo: { flex: 1, gap: 4 },
  fieldLabel: { color: '#fff', fontSize: 9, fontWeight: '700', opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 },
  nameValue: { color: '#fff', fontSize: 18, fontWeight: '700' },
  rowInfo: { flexDirection: 'row', gap: 20, marginTop: 4 },
  valueText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  footer: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  addressText: { color: '#fff', fontSize: 13, fontStyle: 'italic' },
  nfcRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  nfcText: { color: '#fff', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
});