import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { User, MapPin, UploadCloud, Send, Info } from 'lucide-react-native';
import { FormStepper } from '@/components/ui/formStepper';
import { CategoryPicker } from '@/components/ui/categoryPicker';


export default function NewPermitScreen() {
  const [step, setStep] = useState(2); // Simulación de estar en paso 2
  const [formData, setFormData] = useState({ name: '', dni: '', category: 'food', location: '' });

  const handleSubmit = () => {
    Alert.alert("Solicitud Enviada", "Su trámite está en proceso de revisión por la autoridad municipal.");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Nuevo Permiso</Text>
          <Text style={styles.subtitle}>Siga los pasos para obtener su licencia comercial.</Text>
        </View>

        <FormStepper currentStep={step} />

        {/* Sección 1: Datos */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <User size={20} color="#003b5a" />
            <Text style={styles.sectionTitle}>DATOS DEL COMERCIANTE</Text>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre Completo</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Ej. Juan Pérez" 
              placeholderTextColor="#72787f"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Identificación (DNI/NIE)</Text>
            <TextInput 
              style={styles.input} 
              placeholder="00000000X" 
              autoCapitalize="characters"
            />
          </View>
        </View>

        {/* Sección 2: Categoría */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <Info size={20} color="#003b5a" />
            <Text style={styles.sectionTitle}>CATEGORÍA DE COMERCIO</Text>
          </View>
          <CategoryPicker 
            selected={formData.category} 
            onSelect={(id: string) => setFormData({...formData, category: id})} 
          />
        </View>

        {/* Sección 3: Ubicación (Simulada) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <MapPin size={20} color="#003b5a" />
            <Text style={styles.sectionTitle}>UBICACIÓN DESEADA</Text>
          </View>
          <View style={styles.mapContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEAov5QFUsqODQ0-Afnc3J8630MGBjFOsoAfk2NAwUMIcipdtStx_p1cFE-YR_NpLTo-7VwE9_vh-N4KIWG1PrCL8m5N1KgMrhlhonpSqu8cFoIG2rznGhvwQQxCY8GoQ5XeNKwYMk1lBAXyaRAV9A7vIf_sIBJve_bI3UWNXDnsn07sKM9MXoX8pX4yYWfdGda4GWvMe3GZZDAu_j5WI2PKkQ48PbvcQdA0OfamhjQqW3vqThJhGC_sidiDpUd3OOkrIcRApulQ6F' }} 
              style={styles.mapPlaceholder} 
            />
            <View style={styles.mapOverlay}>
              <MapPin size={40} color="#ba1a1a" fill="#ba1a1a" />
            </View>
          </View>
          <TextInput 
            style={styles.input} 
            placeholder="Referencia o Calle" 
          />
        </View>

        {/* Botón de Envío */}
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Send size={20} color="#fff" />
          <Text style={styles.submitBtnText}>ENVIAR SOLICITUD</Text>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          Al enviar, usted acepta los términos y condiciones de uso de espacio público vigentes.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scroll: { padding: 16, paddingBottom: 100 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#003b5a' },
  subtitle: { fontSize: 14, color: '#72787f', marginTop: 4 },
  
  sectionCard: { backgroundColor: '#fff', padding: 16, borderRadius: 20, marginBottom: 16, borderWidth: 1, borderColor: '#eceef0', elevation: 2 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: '#003b5a', letterSpacing: 1 },
  
  inputGroup: { marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '600', color: '#41474e', marginBottom: 6, marginLeft: 4 },
  input: { height: 50, backgroundColor: '#f7f9fb', borderWidth: 1, borderColor: '#c1c7cf', borderRadius: 12, paddingHorizontal: 16, color: '#191c1e' },
  
  mapContainer: { width: '100%', aspectRatio: 16/9, borderRadius: 12, overflow: 'hidden', marginBottom: 12, position: 'relative' },
  mapPlaceholder: { width: '100%', height: '100%', opacity: 0.8 },
  mapOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' },

  submitBtn: { height: 60, backgroundColor: '#003b5a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 10, elevation: 4 },
  submitBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  disclaimer: { textAlign: 'center', fontSize: 11, color: '#72787f', marginTop: 16, lineHeight: 16 }
});