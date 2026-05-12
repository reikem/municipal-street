import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput, Switch, Image } from 'react-native';
import { Clock, Calendar, Group, PlusCircle, Save } from 'lucide-react-native';
import { ZoneSelector } from '@/components/ui/zoneSelector';
import { BentoCard } from '@/components/ui/bentoCard';
import { ShiftItem } from '@/components/ui/shiftItem';
;

export default function InspectionHoursScreen() {
  const [weekendEnabled, setWeekendEnabled] = useState(false);
  const [nightEnabled, setNightEnabled] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Configurar Horarios de Inspección</Text>
          <Text style={styles.heroSub}>Parámetros operativos para la fiscalización en terreno.</Text>
        </View>

        <ZoneSelector label="Comuna / Zona de Cobertura" value="Santiago Centro" />

        {/* Horario General */}
        <BentoCard title="Horario de Fiscalización" icon={<Clock size={22} color="#003b5a" />}>
          <View style={styles.row}>
            <View style={styles.inputFlex}>
              <Text style={styles.inputLabel}>Hora Inicio</Text>
              <TextInput style={styles.timeInput} defaultValue="08:00" />
            </View>
            <View style={styles.inputFlex}>
              <Text style={styles.inputLabel}>Hora Término</Text>
              <TextInput style={styles.timeInput} defaultValue="20:00" />
            </View>
          </View>
        </BentoCard>

        {/* Días de Operación */}
        <BentoCard title="Días de Operación" icon={<Calendar size={22} color="#003b5a" />}>
          <View style={styles.daysGrid}>
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map(day => (
              <View key={day} style={styles.dayBadgeActive}><Text style={styles.dayTextActive}>{day}</Text></View>
            ))}
            {['Sáb', 'Dom'].map(day => (
              <View key={day} style={styles.dayBadgeInactive}><Text style={styles.dayTextInactive}>{day}</Text></View>
            ))}
          </View>
        </BentoCard>

        {/* Turnos */}
        <BentoCard 
          title="Turnos de Inspectores" 
          icon={<Group size={22} color="#003b5a" />}
        >
          <TouchableOpacity style={styles.addTurnBtn}>
            <PlusCircle size={18} color="#003b5a" />
            <Text style={styles.addTurnText}>Añadir Turno</Text>
          </TouchableOpacity>
          
          <ShiftItem type="morning" name="Turno Mañana" timeRange="08:00 - 14:00" inspectors={12} />
          <ShiftItem type="afternoon" name="Turno Tarde" timeRange="14:00 - 20:00" inspectors={10} />
        </BentoCard>

        {/* Toggles Especiales */}
        <View style={styles.toggleCard}>
          <ToggleRow 
            title="Inspecciones Fin de Semana" 
            sub="Operativos especiales Sáb-Dom" 
            value={weekendEnabled} 
            onValue={setWeekendEnabled} 
          />
          <View style={styles.divider} />
          <ToggleRow 
            title="Guardias Nocturnas" 
            sub="Supervisión de 22:00 a 06:00" 
            value={nightEnabled} 
            onValue={setNightEnabled} 
          />
        </View>

        {/* Banner Visual */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDByeHJY8dSG8Kdm1c0rtMXY-GUTHV6jQXIvMw38jQKMjjt79x8KaLsUbbIQRqb4_CQ9BKjbJBuB4e4hZXyZnEJgb7JlDHgLBsHf_KRXWPF7WwWn55oDX-fcoRqMm1gxEBZ3Xv-euUHqSrsXMMs5G776mJNTSTyX5yvTKD2luyJORtpnyJEc03bRwcPS30E38fILiPE8JTqYNe_D7lljzgFypymADYyEKRbjkJ8kmtovo3WfC7LnxEXdiwc3laG4BiNfsFKqfWW5lGd' }} 
            style={styles.bannerImg} 
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Planificación Estratégica Territorial</Text>
          </View>
        </View>

      </ScrollView>

      {/* Acción Global */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveBtn}>
          <Save size={20} color="#fff" />
          <Text style={styles.saveBtnText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ToggleRow = ({ title, sub, value, onValue }: any) => (
  <View style={styles.toggleRow}>
    <View style={{ flex: 1 }}>
      <Text style={styles.toggleTitle}>{title}</Text>
      <Text style={styles.toggleSub}>{sub}</Text>
    </View>
    <Switch value={value} onValueChange={onValue} trackColor={{ true: '#003b5a' }} />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f7f9fb' },
  scrollContent: { padding: 16, paddingBottom: 120 },
  hero: { marginBottom: 20 },
  heroTitle: { fontSize: 24, fontWeight: '700', color: '#003b5a', marginBottom: 4 },
  heroSub: { fontSize: 16, color: '#41474e' },
  row: { flexDirection: 'row', gap: 16 },
  inputFlex: { flex: 1 },
  inputLabel: { fontSize: 12, color: '#41474e', marginBottom: 6, fontWeight: '600' },
  timeInput: { backgroundColor: '#fff', height: 48, borderRadius: 8, borderWidth: 1, borderColor: '#c1c7cf', paddingHorizontal: 12, fontSize: 16 },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  dayBadgeActive: { backgroundColor: '#003b5a', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  dayBadgeInactive: { backgroundColor: '#e6e8ea', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  dayTextActive: { color: '#fff', fontWeight: '600' },
  dayTextInactive: { color: '#41474e', fontWeight: '600' },
  addTurnBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-end', marginBottom: 12 },
  addTurnText: { color: '#003b5a', fontWeight: '700', fontSize: 14 },
  toggleCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, elevation: 2, marginBottom: 20 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  toggleTitle: { fontSize: 15, fontWeight: '700', color: '#191c1e' },
  toggleSub: { fontSize: 12, color: '#72787f' },
  divider: { height: 1, backgroundColor: '#e0e3e5', marginVertical: 12 },
  bannerContainer: { height: 120, borderRadius: 16, overflow: 'hidden', marginBottom: 20 },
  bannerImg: { width: '100%', height: '100%' },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,59,90,0.4)', justifyContent: 'center', padding: 20 },
  bannerText: { color: '#fff', fontSize: 20, fontWeight: '800', maxWidth: 200 },
  footer: { position: 'absolute', bottom: 0, width: '100%', padding: 16, backgroundColor: '#f7f9fb' },
  saveBtn: { height: 56, backgroundColor: '#1a5276', borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  saveBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});