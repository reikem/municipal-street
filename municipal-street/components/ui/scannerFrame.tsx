import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Flashlight } from 'lucide-react-native';

export const ScannerFrame = () => {
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const laserTranslate = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.viewfinder}>
      <View style={styles.qrFrame}>
        {/* Esquinas del Escáner */}
        <View style={[styles.corner, styles.tl]} />
        <View style={[styles.corner, styles.tr]} />
        <View style={[styles.corner, styles.bl]} />
        <View style={[styles.corner, styles.br]} />
        
        {/* Línea de Láser Animada */}
        <Animated.View style={[styles.laser, { top: laserTranslate }]} />
      </View>

      <View style={styles.flashlightBtn}>
        <Flashlight color="#fff" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewfinder: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 320,
    backgroundColor: '#000',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  qrFrame: {
    width: '80%',
    height: '80%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    position: 'relative',
  },
  laser: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: '#9bccf6',
    shadowColor: '#9bccf6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#9bccf6',
    borderStyle: 'solid',
  },
  tl: { top: -2, left: -2, borderTopWidth: 6, borderLeftWidth: 6, borderTopLeftRadius: 24 },
  tr: { top: -2, right: -2, borderTopWidth: 6, borderRightWidth: 6, borderTopRightRadius: 24 },
  bl: { bottom: -2, left: -2, borderBottomWidth: 6, borderLeftWidth: 6, borderBottomLeftRadius: 24 },
  br: { bottom: -2, right: -2, borderBottomWidth: 6, borderRightWidth: 6, borderBottomRightRadius: 24 },
  flashlightBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  }
});