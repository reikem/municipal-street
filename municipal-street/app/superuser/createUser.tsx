import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { KeyRound, Info, HelpCircle, ChevronDown } from 'lucide-react-native';
import { RoleSelector } from '@/components/ui/roleSelector';


export default function CreateUserScreen() {
  const [role, setRole] = useState('inspector');
  const [form, setForm] = useState({ name: '', email: '', region: '' });

  const handleCreate = () => {
    Alert.alert("¡Usuario Creado!", `Se ha enviado una clave provisoria a ${form.email || 'el correo ingresado'}.`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Crear Nuevo Usuario</Text>
        <Text style={styles.subtitle}>
          Complete el formulario para dar de alta a un nuevo integrante en el sistema municipal.
        </Text>
      </View>

      {/* Tarjeta de Formulario */}
      <View style={styles.formCard}>
        <Text style={styles.label}>Nombre Completo</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ej. Juan Pérez" 
          placeholderTextColor="#72787f"
          onChangeText={(t) => setForm({...form, name: t})}
        />

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput 
          style={styles.input} 
          placeholder="usuario@municipio.gob" 
          keyboardType="email-address"
          placeholderTextColor="#72787f"
          onChangeText={(t) => setForm({...form, email: t})}
        />

        <Text style={styles.label}>Rol del Usuario</Text>
        <RoleSelector selectedRole={role} onSelect={setRole} />

        <Text style={styles.label}>Región / Comuna Asignada</Text>
        <TouchableOpacity style={styles.pickerFake}>
          <Text style={styles.pickerText}>Seleccione una zona...</Text>
          <ChevronDown size={20} color="#72787f" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitBtn} onPress={handleCreate}>
          <KeyRound size={20} color="#fff" />
          <Text style={styles.submitBtnText}>Generar Credenciales</Text>
        </TouchableOpacity>
        
        <Text style={styles.footerNote}>
          Se enviará un correo automático con la clave provisoria.
        </Text>
      </View>

      {/* Info Contextual */}
      <View style={styles.infoGrid}>
        <View style={styles.infoBox}>
          <Info size={18} color="#003b5a" />
          <View style={{ flex: 1 }}>
            <Text style={styles.infoTitle}>Seguridad de Datos</Text>
            <Text style={styles.infoText}>Toda alta queda registrada en la bitácora de auditoría central.</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <HelpCircle size={18} color="#003b5a" />
          <View style={{ flex: 1 }}>
            <Text style={styles.infoTitle}>¿Necesita ayuda?</Text>
            <Text style={styles.infoText}>Contacte a Soporte IT si hay problemas con dominios .gob.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  header: { marginBottom: 24 },
  title: { fontSize: 26, fontWeight: '800', color: '#003b5a' },
  subtitle: { fontSize: 14, color: '#41474e', marginTop: 4, lineHeight: 20 },
  
  formCard: { 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: 'rgba(0,0,0,0.05)',
    elevation: 4,
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20
  },
  label: { fontSize: 13, fontWeight: '600', color: '#41474e', marginBottom: 6, marginTop: 12 },
  input: { 
    height: 56, 
    backgroundColor: '#f7f9fb', 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#c1c7cf', 
    paddingHorizontal: 16, 
    fontSize: 16,
    color: '#191c1e'
  },
  pickerFake: {
    height: 56, backgroundColor: '#f7f9fb', borderRadius: 12, borderWidth: 1, borderColor: '#c1c7cf',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16
  },
  pickerText: { color: '#72787f', fontSize: 16 },
  
  submitBtn: { 
    height: 56, backgroundColor: '#003b5a', borderRadius: 12, marginTop: 24,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10,
    elevation: 2
  },
  submitBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footerNote: { textAlign: 'center', fontSize: 12, color: '#72787f', marginTop: 12 },

  infoGrid: { marginTop: 24, gap: 12 },
  infoBox: { 
    flexDirection: 'row', gap: 12, padding: 16, backgroundColor: '#e6e8ea', borderRadius: 12 
  },
  infoTitle: { fontSize: 13, fontWeight: '700', color: '#191c1e' },
  infoText: { fontSize: 11, color: '#41474e', marginTop: 2 }
});