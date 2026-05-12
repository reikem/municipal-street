import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// Evita que la pantalla de carga se oculte antes de tiempo
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Eliminamos la carga de fuentes personalizadas que causaba el error
  // Solo dejamos el hook para manejar el estado de carga si fuera necesario
  const [loaded, error] = useFonts({}); 

  useEffect(() => {
    // Si hay un error en la carga o si ya terminó de procesar, ocultamos el Splash
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Si prefieres no esperar a ninguna fuente, puedes simplemente retornar el ThemeProvider
  // pero mantendremos esta estructura por si luego quieres añadir fuentes reales.
  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#191c1e' : '#f7f9fb',
          },
          headerTintColor: colorScheme === 'dark' ? '#9bccf6' : '#003b5a',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            animation: 'fade',
          }} 
        />
        <Stack.Screen 
          name="modal" 
          options={{ 
            presentation: 'modal', 
            title: 'Información',
            headerShown: true 
          }} 
        />
        <Stack.Screen name="+not-found" options={{ title: 'No Encontrado' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}