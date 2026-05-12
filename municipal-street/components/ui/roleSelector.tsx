import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ShieldCheck, Crosshair, Store, CheckCircle2 } from 'lucide-react-native';

const roles = [
  { id: 'admin', title: 'Administrador', sub: 'Gestión total', icon: ShieldCheck },
  { id: 'inspector', title: 'Inspector', sub: 'Fiscalización', icon: Crosshair },
  { id: 'seller', title: 'Vendedor', sub: 'Comercio', icon: Store },
];

export const RoleSelector = ({ selectedRole, onSelect }: any) => {
  return (
    <View style={styles.grid}>
      {roles.map((role) => {
        const isActive = selectedRole === role.id;
        const Icon = role.icon;
        return (
          <TouchableOpacity
            key={role.id}
            onPress={() => onSelect(role.id)}
            style={[styles.roleCard, isActive && styles.activeCard]}
          >
            <Icon size={24} color={isActive ? '#003b5a' : '#72787f'} />
            <View style={styles.textContainer}>
              <Text style={[styles.roleTitle, isActive && styles.activeText]}>{role.title}</Text>
              <Text style={styles.roleSub}>{role.sub}</Text>
            </View>
            {isActive && <CheckCircle2 size={18} color="#003b5a" fill="#7bf8a1" />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { gap: 10, marginVertical: 12 },
  roleCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#72787f', 
    backgroundColor: '#fff' 
  },
  activeCard: { borderColor: '#003b5a', backgroundColor: '#f0f7ff' },
  textContainer: { flex: 1, marginLeft: 12 },
  roleTitle: { fontSize: 14, fontWeight: '700', color: '#191c1e' },
  activeText: { color: '#003b5a' },
  roleSub: { fontSize: 11, color: '#72787f' }
});