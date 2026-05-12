import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Search, Filter, HelpCircle } from 'lucide-react-native';
import { Header } from '@/components/ui/Headers';
import { UploadCard } from '@/components/ui/uploadCard';
import { PermissionItem } from '@/components/ui/permissionItem';
import { Permission } from '@/type/type';


const MOCK_DATA: Permission[] = [
  { id: '1', month: 'OCT', year: '2023', code: '#PV-88290', status: 'paid', colorHex: '#61de8a' },
  { id: '2', month: 'SEP', year: '2023', code: '#PV-87112', status: 'pending', colorHex: '#ffddb9' },
  { id: '3', month: 'AGO', year: '2023', code: '#PV-86001', status: 'paid', colorHex: '#eceef0' },
];

export const PermissionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.welcome}>
          <Text style={styles.h1}>Mis Permisos</Text>
          <Text style={styles.p}>Administra tus autorizaciones de comercio y sube comprobantes de pago.</Text>
        </View>

        <UploadCard />

        <View style={styles.searchBar}>
          <Search color="#72787f" size={20} style={styles.searchIcon} />
          <TextInput placeholder="Buscar por mes o año..." style={styles.input} />
        </View>

        <View style={styles.historyHeader}>
          <Text style={styles.historyLabel}>HISTORIAL RECIENTE</Text>
          <Filter color="#41474e" size={20} />
        </View>

        {MOCK_DATA.map(item => <PermissionItem key={item.id} item={item} />)}

        <View style={styles.helpCard}>
          <View style={styles.helpContent}>
            <Text style={styles.helpTitle}>¿Necesitas ayuda?</Text>
            <Text style={styles.helpText}>Si tienes problemas con tu permiso, contacta al soporte municipal.</Text>
            <TouchableOpacity style={styles.helpBtn}><Text style={styles.helpBtnText}>Contactar Soporte</Text></TouchableOpacity>
          </View>
          <HelpCircle color="rgba(255,255,255,0.2)" size={120} style={styles.helpBgIcon} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  scroll: { padding: 16, gap: 24, paddingBottom: 100 },
  welcome: { gap: 4 },
  h1: { fontSize: 30, fontWeight: '800', color: '#191c1e' },
  p: { fontSize: 16, color: '#41474e', lineHeight: 22 },
  searchBar: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#c1c7cf' },
  searchIcon: { marginLeft: 16 },
  input: { flex: 1, height: 50, paddingHorizontal: 12, fontSize: 16 },
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  historyLabel: { fontSize: 12, fontWeight: '700', color: '#72787f', letterSpacing: 1 },
  helpCard: { backgroundColor: '#1a5276', borderRadius: 16, padding: 20, overflow: 'hidden' },
  helpContent: { zIndex: 1, gap: 8 },
  helpTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  helpText: { color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 20, maxWidth: '80%' },
  helpBtn: { backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, alignSelf: 'flex-start', marginTop: 8 },
  helpBtnText: { color: '#003b5a', fontWeight: '800' },
  helpBgIcon: { position: 'absolute', right: -20, top: -20 }
});