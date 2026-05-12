import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin } from 'lucide-react-native';

interface LocationCardProps {
  address: string;
  district: string;
  onPressViewMap?: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ 
  address, 
  district, 
  onPressViewMap 
}) => {
  return (
    <View style={styles.card}>
      {/* Header de la Tarjeta */}
      <View style={styles.header}>
        <View style={styles.infoRow}>
          <View style={styles.iconContainer}>
            <MapPin color="#003b5a" size={24} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Ubicación Asignada</Text>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.districtText}>{district}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          onPress={onPressViewMap} 
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ver en Mapa</Text>
        </TouchableOpacity>
      </View>

      {/* Visualización del Mapa (Placeholder con Estilo) */}
      <View style={styles.mapPreview}>
        {/* Imagen de fondo opcional que simula el mapa */}
        <Image 
          source={{ uri: 'https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-68.84, -32.89,14/400x150?access_token=TU_TOKEN' }} 
          style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
        />
        
        {/* Marcador central */}
        <View style={styles.markerContainer}>
          <MapPin color="#ba1a1a" size={48} fill="#ba1a1a" fillOpacity={0.2} />
          <View style={styles.markerShadow} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3, // Para Android
    marginVertical: 8,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoRow: {
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    marginTop: 2,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#72787f',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191c1e',
  },
  districtText: {
    fontSize: 14,
    color: '#41474e',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f2f4f6',
  },
  buttonText: {
    color: '#003b5a',
    fontWeight: '700',
    fontSize: 13,
  },
  mapPreview: {
    height: 140,
    backgroundColor: '#eceef0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerShadow: {
    width: 8,
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    marginTop: -2,
  },
});