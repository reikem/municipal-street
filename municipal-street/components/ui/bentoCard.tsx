import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BentoCardProps {
  title?: string; // Ahora es opcional por si solo quieres mostrar contenido (ej. el QR)
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'warning' | 'success'; // Añadimos variantes de estado
  style?: ViewStyle; // Para permitir ajustes de flex o margen desde fuera
  headerStyle?: ViewStyle;
}

export const BentoCard = ({ 
  title, 
  icon, 
  children, 
  variant = 'light', 
  style,
  headerStyle 
}: BentoCardProps) => {
  
  // Mapeo de estilos según la variante
  const cardStyles = [
    styles.card,
    variant === 'light' && styles.lightCard,
    variant === 'dark' && styles.darkCard,
    variant === 'warning' && styles.warningCard,
    variant === 'success' && styles.successCard,
    style, // Estilos personalizados (como flex: 1)
  ];

  const textStyles = [
    styles.title,
    variant === 'dark' ? styles.darkText : styles.lightText,
    variant === 'warning' && styles.warningText,
  ];

  return (
    <View style={cardStyles}>
      {/* Solo renderiza el header si hay título o icono */}
      {(title || icon) && (
        <View style={[styles.header, headerStyle]}>
          {icon}
          {title && <Text style={textStyles}>{title}</Text>}
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    borderRadius: 20, 
    padding: 16, 
    borderWidth: 1,
    // Sombra suave para todas las variantes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  // Variantes
  lightCard: { backgroundColor: '#fff', borderColor: '#eceef0' },
  darkCard: { backgroundColor: '#003b5a', borderColor: '#1a5276' },
  warningCard: { backgroundColor: '#ffddb9', borderColor: '#ffae42' },
  successCard: { backgroundColor: '#7bf8a1', borderColor: '#007239' },
  
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  
  title: { fontSize: 16, fontWeight: '700' },
  lightText: { color: '#003b5a' },
  darkText: { color: '#fff' },
  warningText: { color: '#663e00' },
});