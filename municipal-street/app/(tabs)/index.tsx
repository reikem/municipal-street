import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ShieldCheck, CalendarCheck, Info, ChevronRight } from 'lucide-react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#003b5a', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerContent}>
          <ThemedText type="title" style={styles.headerTitle}>Gestión Municipal</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Panel del Vendedor</ThemedText>
        </View>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Accesos Directos</ThemedText>
      </ThemedView>

      <ThemedView style={styles.menuContainer}>
        {/* Botón a Credencial */}
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => router.push('/credential')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#cbe6ff' }]}>
            <ShieldCheck color="#003b5a" size={28} />
          </View>
          <View style={styles.menuTextContainer}>
            <ThemedText type="defaultSemiBold">Mi Credencial Digital</ThemedText>
            <ThemedText type="default" style={styles.menuDescription}>Verificación oficial y código QR.</ThemedText>
          </View>
          <ChevronRight color="#c1c7cf" size={20} />
        </TouchableOpacity>

        {/* Botón a Asistencia */}
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => router.push('/attendance')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#7bf8a1' }]}>
            <CalendarCheck color="#006d37" size={28} />
          </View>
          <View style={styles.menuTextContainer}>
            <ThemedText type="defaultSemiBold">Control de Asistencia</ThemedText>
            <ThemedText type="default" style={styles.menuDescription}>Registrar entrada y ver historial.</ThemedText>
          </View>
          <ChevronRight color="#c1c7cf" size={20} />
        </TouchableOpacity>

        {/* Botón a Modal de Información */}
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => router.push('/modal')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#eceef0' }]}>
            <Info color="#41474e" size={28} />
          </View>
          <View style={styles.menuTextContainer}>
            <ThemedText type="defaultSemiBold">Ayuda y Soporte</ThemedText>
            <ThemedText type="default" style={styles.menuDescription}>Información sobre el uso de la App.</ThemedText>
          </View>
          <ChevronRight color="#c1c7cf" size={20} />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.footerContainer}>
        <ThemedText style={styles.footerText}>
          Próximamente: Sistema de gestión de permisos y notificaciones.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
  },
  headerSubtitle: {
    color: '#9bccf6',
    fontSize: 16,
    fontWeight: '600',
  },
  titleContainer: {
    paddingHorizontal: 8,
    marginVertical: 16,
  },
  menuContainer: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Se adapta sutilmente al dark mode
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e3e5',
  },
  iconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
    gap: 2,
  },
  menuDescription: {
    fontSize: 13,
    color: '#72787f',
  },
  footerContainer: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#f2f4f6',
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#72787f',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});