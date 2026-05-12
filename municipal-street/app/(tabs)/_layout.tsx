import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme'; // Asegúrate que Colors tenga primary/tint
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = colorScheme === 'dark' ? '#9bccf6' : '#003b5a';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: '#72787f',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 88,
          },
          default: {
            height: 70,
            paddingBottom: 12,
            backgroundColor: colorScheme === 'dark' ? '#191c1e' : '#ffffff',
            borderTopWidth: 1,
            borderTopColor: colorScheme === 'dark' ? '#41474e' : '#eceef0',
          },
        }),
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />

      {/* Pantalla del Vendedor: Mis Permisos (QR y Estado) */}
      <Tabs.Screen
        name="my-permits"
        options={{
          title: 'Permisos',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="person.2.shield.fill" color={color} />,
        }}
      />

      {/* Pantalla de Solicitud: Nuevo Permiso */}
      <Tabs.Screen
        name="new-permit"
        options={{
          title: 'Solicitar',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="plus.circle.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="map.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="person.crop.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}