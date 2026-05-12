import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { CheckCircle2, Save, ThumbsUp, ThumbsDown, Package, MapPin } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export default function VerificationScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Estados para los requisitos
  const [requirements, setRequirements] = useState({
    tent: false,
    table: false,
    merchandise: false,
  });

  const [result, setResult] = useState<'pass' | 'fail' | null>(null);

  const toggleReq = (key: keyof typeof requirements) => {
    setRequirements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]} contentContainerStyle={styles.content}>
      
      {/* 1. Tarjeta de Identidad del Vendedor (Bento Style) */}
      <View style={styles.bentoContainer}>
        <View style={[styles.idCard, isDark && styles.cardDark]}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=9' }} 
            style={styles.avatar} 
          />
          <View style={styles.idInfo}>
            <Text style={[styles.vendorName, isDark && styles.textWhite]}>Juan Pérez García</Text>
            <Text style={styles.vendorId}>ID Permiso: #MUN-2024-0892</Text>
            <View style={styles.statusBadge}>
              <CheckCircle2 size={14} color="#007239" />
              <Text style={styles.statusBadgeText}>VENDEDOR REGISTRADO</Text>
            </View>
          </View>
        </View>

        <View style={[styles.zoneCard, isDark && styles.cardDark]}>
          <Text style={styles.zoneLabel}>ZONA ASIGNADA</Text>
          <Text style={[styles.zoneTitle, isDark && styles.textWhite]}>SECTOR A-12</Text>
          <Text style={styles.zoneSubtitle}>Plaza Central</Text>
        </View>
      </View>

      {/* 2. Lista de Verificación */}
      <Text style={[styles.sectionTitle, isDark && styles.textWhite]}>Verificación de Requisitos</Text>

      <View style={styles.reqList}>
        {/* Requisito 1: Carpa */}
        <View style={[styles.reqCard, isDark && styles.cardDark]}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1590073844006-3a783b927904?q=80&w=200' }} style={styles.reqImage} />
          <View style={styles.reqBody}>
            <Text style={[styles.reqTitle, isDark && styles.textWhite]}>Carpa 2x2 blanca</Text>
            <Text style={styles.reqDesc}>Dimensiones reglamentarias y color institucional.</Text>
            <TouchableOpacity onPress={() => toggleReq('tent')} style={styles.checkboxRow}>
              <View style={[styles.checkbox, requirements.tent && styles.checkboxActive]}>
                {requirements.tent && <CheckCircle2 size={16} color="#fff" />}
              </View>
              <Text style={[styles.checkboxLabel, isDark && styles.textWhite]}>Confirmar cumplimiento</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Requisito 2: Mesa */}
        <View style={[styles.reqCard, isDark && styles.cardDark]}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1544450186-05600184d73d?q=80&w=200' }} style={styles.reqImage} />
          <View style={styles.reqBody}>
            <Text style={[styles.reqTitle, isDark && styles.textWhite]}>Mesa con mantel negro</Text>
            <Text style={styles.reqDesc}>Cubierta íntegramente por textil negro limpio.</Text>
            <TouchableOpacity onPress={() => toggleReq('table')} style={styles.checkboxRow}>
              <View style={[styles.checkbox, requirements.table && styles.checkboxActive]}>
                {requirements.table && <CheckCircle2 size={16} color="#fff" />}
              </View>
              <Text style={[styles.checkboxLabel, isDark && styles.textWhite]}>Confirmar cumplimiento</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Requisito 3: Mercadería */}
        <TouchableOpacity 
          style={[styles.reqCardSmall, isDark && styles.cardDark]} 
          onPress={() => toggleReq('merchandise')}
        >
          <View style={styles.iconBox}>
            <Package size={24} color="#1a5276" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.reqTitle, isDark && styles.textWhite]}>Mercadería autorizada</Text>
            <Text style={styles.reqDesc}>Artículos de artesanía y cuero.</Text>
          </View>
          <View style={[styles.checkbox, requirements.merchandise && styles.checkboxActive]} />
        </TouchableOpacity>
      </View>

      {/* 3. Selector de Resultado */}
      <View style={[styles.resultSection, isDark && styles.resultSectionDark]}>
        <Text style={styles.resultLabel}>RESULTADO DE LA INSPECCIÓN</Text>
        <View style={styles.resultButtons}>
          <TouchableOpacity 
            style={[styles.resBtn, result === 'pass' && styles.resBtnPassActive]} 
            onPress={() => setResult('pass')}
          >
            <ThumbsUp size={32} color={result === 'pass' ? '#fff' : '#006d37'} />
            <Text style={[styles.resBtnText, result === 'pass' && styles.textWhite]}>Cumple</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.resBtn, result === 'fail' && styles.resBtnFailActive]} 
            onPress={() => setResult('fail')}
          >
            <ThumbsDown size={32} color={result === 'fail' ? '#fff' : '#ba1a1a'} />
            <Text style={[styles.resBtnText, result === 'fail' && styles.textWhite]}>No Cumple</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Botón de Acción Principal */}
      <TouchableOpacity style={styles.saveBtn}>
        <Save size={24} color="#fff" />
        <Text style={styles.saveBtnText}>Registrar Inspección</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  containerDark: { backgroundColor: '#121416' },
  content: { padding: 16, paddingBottom: 100 },
  textWhite: { color: '#fff' },
  cardDark: { backgroundColor: '#1d2023', borderColor: '#333' },

  // Bento Identity Card
  bentoContainer: { gap: 12, marginBottom: 24 },
  idCard: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 20, 
    alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 
  },
  avatar: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#cbe6ff' },
  idInfo: { marginLeft: 16, flex: 1 },
  vendorName: { fontSize: 20, fontWeight: '700', color: '#003b5a' },
  vendorId: { fontSize: 14, color: '#72787f' },
  statusBadge: { 
    flexDirection: 'row', 
    backgroundColor: '#7bf8a1', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 20, 
    alignItems: 'center', 
    marginTop: 8, 
    alignSelf: 'flex-start',
    gap: 4
  },
  statusBadgeText: { fontSize: 10, fontWeight: '800', color: '#007239' },
  zoneCard: { backgroundColor: '#fff', padding: 16, borderRadius: 20, alignItems: 'center' },
  zoneLabel: { fontSize: 10, fontWeight: '800', color: '#72787f', letterSpacing: 1 },
  zoneTitle: { fontSize: 22, fontWeight: '800', color: '#003b5a' },
  zoneSubtitle: { fontSize: 14, color: '#72787f' },

  // Sections
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#003b5a', marginBottom: 16 },
  reqList: { gap: 16 },
  reqCard: { backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden', flexDirection: 'row' },
  reqImage: { width: 100, height: '100%' },
  reqBody: { flex: 1, padding: 16 },
  reqTitle: { fontSize: 16, fontWeight: '700', color: '#003b5a' },
  reqDesc: { fontSize: 13, color: '#72787f', marginVertical: 4 },
  reqCardSmall: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 20, 
    alignItems: 'center', 
    gap: 12 
  },
  iconBox: { backgroundColor: '#cbe6ff', padding: 10, borderRadius: 12 },

  // Checkbox
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10 },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: '#c1c7cf', justifyContent: 'center', alignItems: 'center' },
  checkboxActive: { backgroundColor: '#003b5a', borderColor: '#003b5a' },
  checkboxLabel: { fontSize: 14, fontWeight: '600', color: '#41474e' },

  // Result Section
  resultSection: { marginTop: 32, padding: 16, backgroundColor: '#eceef0', borderRadius: 24 },
  resultSectionDark: { backgroundColor: '#1d2023' },
  resultLabel: { fontSize: 12, fontWeight: '800', color: '#003b5a', textAlign: 'center', marginBottom: 16 },
  resultButtons: { flexDirection: 'row', gap: 12 },
  resBtn: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: 'transparent' 
  },
  resBtnText: { marginTop: 4, fontWeight: '700', fontSize: 14, color: '#41474e' },
  resBtnPassActive: { backgroundColor: '#006d37', borderColor: '#006d37' },
  resBtnFailActive: { backgroundColor: '#ba1a1a', borderColor: '#ba1a1a' },

  // Save Button
  saveBtn: { 
    marginTop: 24, 
    backgroundColor: '#1a5276', 
    height: 56, 
    borderRadius: 16, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 12,
    elevation: 4
  },
  saveBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});