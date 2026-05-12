import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Landmark, UserCircle } from 'lucide-react-native';

export const Header = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.logoGroup}>
        <Landmark color="#003b5a" size={24} />
        <Text style={styles.title}>Gestión Municipal</Text>
      </View>
      <TouchableOpacity style={styles.profileBtn}>
        <UserCircle color="#41474e" size={28} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#fff' },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e3e5',
  },
  logoGroup: { flexDirection: 'row', alignItems: 'center' },
  title: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#003b5a',
  },
  profileBtn: { padding: 4 }
});