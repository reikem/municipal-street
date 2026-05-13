import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity, TextInput } from 'react-native';
import { Settings2, Clock, CheckSquare, Users, Save, RotateCcw, Sun, Moon, Plus } from 'lucide-react-native';
import { BentoCard } from '@/components/ui/bentoCard';



export default function CommuneRulesScreen() {
  const [gpsEnabled, setGpsEnabled] = useState(true);
  const [photoEnabled, setPhotoEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      {/* Header Comuna */}
      <View style={styles.topHeader}>
        <Text style={styles.communeTitle}>Santiago Centro</Text>
        <View style={styles.statusRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>CONFIGURACIÓN ACTIVA</Text>
          </View>
          <Text style={styles.updateText}>Actualizado: Hace 2h</Text>
        </View>
      </View>

      {/* Normativas de Venta */}
      <BentoCard title="Normativas de Venta" icon={<Settings2 size={22} color="#003b5a" />}>
        <View style={styles.ruleItem}>
          <Text style={styles.ruleLabel}>Validación GPS obligatoria</Text>
          <Switch value={gpsEnabled} onValueChange={setGpsEnabled} thumbColor="#fff" trackColor={{ true: '#003b5a' }} />
        </View>
        <View style={styles.ruleItem}>
          <Text style={styles.ruleLabel}>Evidencia fotográfica</Text>
          <Switch value={photoEnabled} onValueChange={setPhotoEnabled} thumbColor="#fff" trackColor={{ true: '#003b5a' }} />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.ruleLabel}>Distancia mínima: <Text style={styles.boldText}>5m</Text></Text>
          <View style={styles.sliderTrack} />
        </View>
      </BentoCard>

      {/* Horarios */}
      <BentoCard title="Horarios de Operación" icon={<Clock size={22} color="#003b5a" />}>
        <View style={styles.timeRow}>
          <View style={styles.timeInputBox}>
            <Sun size={18} color="#72787f" />
            <Text style={styles.timeText}>08:00 AM</Text>
          </View>
          <View style={styles.timeInputBox}>
            <Moon size={18} color="#72787f" />
            <Text style={styles.timeText}>08:00 PM</Text>
          </View>
        </View>
      </BentoCard>

      {/* Protocolo de Inspección */}
      <BentoCard title="Protocolo de Inspección" icon={<CheckSquare size={22} color="#003b5a" />}>
        <View style={styles.freqContainer}>
          <TouchableOpacity style={[styles.freqBtn, styles.freqActive]}>
            <Text style={styles.freqBtnTextActive}>Diaria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.freqBtn}>
            <Text style={styles.freqBtnText}>Semanal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checklist}>
          <CheckItem label="Vigencia de permiso municipal" />
          <CheckItem label="Higiene y aseo del entorno" />
        </View>
      </BentoCard>

      {/* Límites de Capacidad (Dark Card) */}
      <BentoCard title="Límites de Capacidad" icon={<Users size={22} color="#7bf8a1" />} dark>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Ocupación Actual</Text>
          <Text style={styles.progressValue}>84%</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '84%' }]} />
        </View>
        <Text style={styles.progressInfo}>420 vendedores de 500 plazas.</Text>
      </BentoCard>

      {/* Botones de Acción */}
      <View style={styles.actionArea}>
        <TouchableOpacity style={styles.saveBtn}>
          <Save size={20} color="#94c5ee" />
          <Text style={styles.saveBtnText}>Guardar Cambios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetBtn}>
          <RotateCcw size={20} color="#ba1a1a" />
          <Text style={styles.resetBtnText}>Restablecer Valores</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const CheckItem = ({ label }: { label: string }) => (
  <View style={styles.checkRow}>
    <View style={styles.checkBoxActive}><Text style={{color:'#fff', fontSize:10}}>✓</Text></View>
    <Text style={styles.checkText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  topHeader: { marginBottom: 24 },
  communeTitle: { fontSize: 32, fontWeight: '800', color: '#003b5a' },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 4 },
  badge: { backgroundColor: '#7bf8a1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 10, fontWeight: '800', color: '#00210c' },
  updateText: { fontSize: 12, color: '#72787f' },

  ruleItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  ruleLabel: { fontSize: 15, color: '#191c1e' },
  boldText: { fontWeight: '700', color: '#003b5a' },
  sliderContainer: { marginTop: 8 },
  sliderTrack: { height: 6, backgroundColor: '#eceef0', borderRadius: 3, marginTop: 8 },

  timeRow: { flexDirection: 'row', gap: 12 },
  timeInputBox: { flex: 1, height: 50, backgroundColor: '#f2f4f6', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 10, borderWidth: 1, borderColor: '#c1c7cf' },
  timeText: { fontSize: 15, fontWeight: '600', color: '#003b5a' },

  freqContainer: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  freqBtn: { flex: 1, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#c1c7cf', justifyContent: 'center', alignItems: 'center' },
  freqActive: { backgroundColor: '#1a5276', borderColor: '#1a5276' },
  freqBtnText: { fontSize: 13, color: '#72787f', fontWeight: '600' },
  freqBtnTextActive: { fontSize: 13, color: '#fff', fontWeight: '600' },
  
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  checkBoxActive: { width: 18, height: 18, backgroundColor: '#006d37', borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
  checkText: { fontSize: 14, color: '#191c1e' },
  checklist: { marginTop: 16 },

  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  progressValue: { color: '#fff', fontSize: 14, fontWeight: '700' },
  progressBar: { height: 10, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 5, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#7efba4' },
  progressInfo: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 8 },

  actionArea: { gap: 12, marginTop: 12 },
  saveBtn: { height: 56, backgroundColor: '#1a5276', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  saveBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  resetBtn: { height: 56, borderWidth: 2, borderColor: '#ba1a1a', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  resetBtnText: { color: '#ba1a1a', fontSize: 16, fontWeight: '700' }
});