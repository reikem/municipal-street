import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Mantenemos la estructura de carga limpia
  const [loaded, error] = useFonts({}); 

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  // Definición de colores base para el header
  const headerBg = colorScheme === 'dark' ? '#191c1e' : '#f7f9fb';
  const headerText = colorScheme === 'dark' ? '#9bccf6' : '#003b5a';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: headerBg },
          headerTintColor: headerText,
          headerTitleStyle: { fontWeight: '800', fontSize: 18 },
          headerShadowVisible: false, // Estilo plano municipal
        }}
      >
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />
        
        {/* Pantallas que pueden abrirse como modales o sub-páginas */}
        <Stack.Screen 
          name="permit-details" 
          options={{ 
            title: 'Detalles del Permiso',
            presentation: 'card' 
          }} 
        />

        <Stack.Screen 
          name="history" 
          options={{ 
            title: 'Historial de Pagos',
            headerShown: true 
          }} 
        />

        <Stack.Screen 
          name="modal" 
          options={{ 
            presentation: 'modal', 
            title: 'Ayuda / Información'
          }} 
        />

        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}