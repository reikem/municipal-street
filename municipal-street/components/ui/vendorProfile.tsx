import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

export const VendorHero = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200' }} 
        style={styles.avatar} 
      />
      <View style={styles.badgeContainer}>
        <CheckCircle2 color="white" size={14} />
      </View>
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>María Elena Rojas</Text>
      <Text style={styles.stall}>Puesto: &quot;Artesanías del Valle&quot;</Text>
      <View style={styles.statusBadge}>
        <CheckCircle2 color="#007239" size={12} />
        <Text style={styles.statusText}>Autorizado</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  imageContainer: { position: 'relative' },
  avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor: '#eceef0' },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#006d37',
    borderRadius: 10,
    padding: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  info: { marginLeft: 16, flex: 1 },
  name: { fontSize: 22, fontWeight: '700', color: '#003b5a' },
  stall: { fontSize: 14, color: '#41474e', marginVertical: 4 },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7bf8a1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: { marginLeft: 4, fontSize: 12, fontWeight: '700', color: '#007239' }
});