import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Color activo basado en el azul municipal del tema
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Estilo translúcido para iOS
            position: 'absolute',
            height: 88,
          },
          default: {
            height: 64,
            paddingBottom: 10,
            backgroundColor: colorScheme === 'dark' ? '#191c1e' : '#ffffff',
          },
        }),
      }}>
      
      {/* 1. Dashboard Principal */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* 2. Pantalla de Credencial Digital (Archivo: credential.tsx) */}
      <Tabs.Screen
        name="credential"
        options={{
          title: 'Credencial',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.2.shield.fill" color={color} />
          ),
        }}
      />

      {/* 3. Pantalla de Asistencia (Archivo: attendance.tsx) */}
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Asistencia',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar.badge.checkmark" color={color} />
          ),
        }}
      />

      {/* 4. Explorar / Mapa (Archivo: explore.tsx) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="map.fill" color={color} />
          ),
        }}
        
      />
      <Tabs.Screen
  name="supervision"
  options={{
    title: 'Mapa',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="map.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="verification"
  options={{
    title: 'Verificar',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="checkmark.shield.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="admin"
  options={{
    title: 'Admin',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="person.2.badge.gearshape.fill" color={color} />
    ),
  }}
/>

    </Tabs>
  );
}