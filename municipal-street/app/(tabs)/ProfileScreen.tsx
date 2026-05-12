import React from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { 
  ShieldCheck, 
  IdCard, 
  FileUp, 
  ShoppingBag, 
  Palette, 
  Sparkles, 
  ChevronRight,
  Home,
  QrCode,
  User as UserIcon,
  ClipboardList
} from 'lucide-react-native';
import { Header } from '@/components/ui/Headers';
import { VendorHero } from '@/components/ui/vendorProfile';
import { LocationCard } from '@/components/ui/locationCard';

// Importación de tus componentes personalizados


export const ProfileScreen = () => {
  
  // Función para renderizar los items del inventario
  const renderInventoryItem = (title: string, category: string, Icon: any, isLast = false) => (
    <TouchableOpacity 
      style={[styles.inventoryItem, isLast && styles.noBorder]}
      activeOpacity={0.6}
    >
      <View style={styles.inventoryLeft}>
        <View style={styles.iconBox}>
          <Icon color="#41474e" size={22} />
        </View>
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemCategory}>Categoría: {category}</Text>
        </View>
      </View>
      <ChevronRight color="#c1c7cf" size={20} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      
      <ScrollView 
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Header de Perfil */}
        <VendorHero />

        {/* 2. Banner de Certificación */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <ShieldCheck color="#94c5ee" size={32} />
            <View style={styles.bannerText}>
              <Text style={styles.bannerLabel}>CERTIFICACIÓN OFICIAL</Text>
              <Text style={styles.bannerTitle}>Comercio Aprobado por la Municipalidad</Text>
            </View>
          </View>
        </View>

        {/* 3. Ubicación Asignada */}
        <LocationCard 
          address="Av. Central 452" 
          district="Sector Norte" 
          onPressViewMap={() => {}} 
        />

        {/* 4. Acciones Rápidas */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionBtn, styles.btnPrimary]}>
            <IdCard color="#fff" size={20} />
            <Text style={styles.btnTextWhite}>Ver Credencial</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionBtn, styles.btnOutline]}>
            <FileUp color="#003b5a" size={20} />
            <Text style={styles.btnTextOutline}>Subir Permiso</Text>
          </TouchableOpacity>
        </View>

        {/* 5. Lista de Inventario */}
        <View style={styles.inventorySection}>
          <Text style={styles.sectionTitle}>Artículos Autorizados</Text>
          <View style={styles.inventoryCard}>
            {renderInventoryItem("Tejidos de Lana", "Textil", ShoppingBag)}
            {renderInventoryItem("Cerámica Pintada", "Artesanía", Palette)}
            {renderInventoryItem("Accesorios de Cuero", "Marroquinería", Sparkles, true)}
          </View>
        </View>
      </ScrollView>

      {/* 6. Barra de Navegación Inferior (Mockup) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#72787f" size={24} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <ClipboardList color="#72787f" size={24} />
          <Text style={styles.navText}>Permisos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <QrCode color="#72787f" size={24} />
          <Text style={styles.navText}>Escanear</Text>
        </TouchableOpacity>

        <View style={styles.navItemActive}>
          <UserIcon color="#003b5a" size={22} fill="#003b5a" />
          <Text style={styles.navTextActive}>Perfil</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fb', // background del HTML
  },
  scrollPadding: {
    padding: 16,
    paddingBottom: 110, // Espacio para la nav inferior
    gap: 20,
  },
  // Estilos del Banner
  banner: {
    backgroundColor: '#1a5276', // primary-container
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 8,
    borderLeftColor: '#003b5a', // primary
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    marginLeft: 12,
    flex: 1,
  },
  bannerLabel: {
    color: '#94c5ee',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  // Acciones
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnPrimary: {
    backgroundColor: '#1a5276',
  },
  btnOutline: {
    borderWidth: 2,
    borderColor: '#003b5a',
    backgroundColor: 'transparent',
  },
  btnTextWhite: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  btnTextOutline: {
    color: '#003b5a',
    fontWeight: '600',
    fontSize: 14,
  },
  // Inventario
  inventorySection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#003b5a',
    marginBottom: 12,
    paddingLeft: 4,
  },
  inventoryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
  },
  inventoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f4f6',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  inventoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#f7f9fb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191c1e',
  },
  itemCategory: {
    fontSize: 12,
    color: '#72787f',
  },
  // Bottom Nav
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingBottom: 28, // Ajuste para safe area manual
    borderTopWidth: 1,
    borderTopColor: '#eceef0',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#72787f',
    marginTop: 4,
  },
  navItemActive: {
    backgroundColor: '#cbe6ff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 6,
  },
  navTextActive: {
    color: '#003b5a',
    fontWeight: '700',
    fontSize: 14,
  },
});