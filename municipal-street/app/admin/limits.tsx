import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Save, Store, Utensils, ShoppingBag } from 'lucide-react-native';
import { ZoneSelector } from '@/components/ui/zoneSelector';
import { QuotaCard } from '@/components/ui/quotaCard';


export default function AdminLimitsScreen() {
  const [saturationAlert, setSaturationAlert] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <ZoneSelector label="Seleccionar Comuna / Zona" value="Santiago Centro" />

        <QuotaCard total={500} current={450} />

        {/* Saturación Toggle */}
        <View style={styles.toggleRow}>
          <View>
            <Text style={styles.toggleTitle}>Alerta de Saturación</Text>
            <Text style={styles.toggleSub}>Notificar al alcanzar el 90%</Text>
          </View>
          <Switch 
            value={saturationAlert} 
            onValueChange={setSaturationAlert}
            trackColor={{ true: '#003b5a' }}
          />
        </View>

        {/* Reglas de Densidad */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Reglas de Densidad</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Distancia Mínima (Metros)</Text>
            <TextInput style={styles.textInput} keyboardType="numeric" defaultValue="5" />
          </View>

          <Text style={[styles.inputLabel, { marginTop: 16, marginBottom: 12 }]}>Límites por Rubro</Text>
          
          <CategoryLimit icon={<Store size={18} color="#41474e" />} label="Artesanía" value="150" />
          <CategoryLimit icon={<Utensils size={18} color="#41474e" />} label="Alimentos" value="100" />
          <CategoryLimit icon={<ShoppingBag size={18} color="#41474e" />} label="Textiles" value="250" />
        </View>

      </ScrollView>

      {/* Botón Flotante de Guardar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Save size={20} color="#fff" />
          <Text style={styles.saveText}>Guardar Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CategoryLimit = ({ icon, label, value }: any) => (
  <View style={styles.categoryRow}>
    <View style={styles.categoryInfo}>
      {icon}
      <Text style={styles.categoryLabel}>{label}</Text>
    </View>
    <TextInput style={styles.smallInput} keyboardType="numeric" defaultValue={value} />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 120 },
  toggleRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#eceef0'
  },
  toggleTitle: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  toggleSub: { fontSize: 14, color: '#41474e' },
  sectionCard: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginTop: 16, borderWidth: 1, borderColor: '#eceef0' },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#003b5a', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eceef0', paddingBottom: 10 },
  inputGroup: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  inputLabel: { fontSize: 14, fontWeight: '600', color: '#41474e' },
  textInput: { width: 80, height: 44, backgroundColor: '#f2f4f6', borderRadius: 8, textAlign: 'center', fontWeight: '700' },
  categoryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f2f4f6', padding: 12, borderRadius: 10, marginBottom: 8 },
  categoryInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  categoryLabel: { fontSize: 15, color: '#191c1e' },
  smallInput: { width: 70, height: 32, backgroundColor: '#fff', borderRadius: 6, textAlign: 'right', paddingHorizontal: 8, fontWeight: '600' },
  footer: { position: 'absolute', bottom: 0, width: '100%', padding: 16, backgroundColor: 'rgba(247, 249, 251, 0.9)' },
  saveButton: { height: 56, backgroundColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, elevation: 4 },
  saveText: { color: '#fff', fontSize: 18, fontWeight: '700' }
});