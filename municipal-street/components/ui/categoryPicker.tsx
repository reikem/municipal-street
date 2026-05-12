import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Utensils, Palette, Shirt, MoreHorizontal } from 'lucide-react-native';

const categories = [
  { id: 'food', label: 'Alimentos', icon: Utensils },
  { id: 'art', label: 'Artesanías', icon: Palette },
  { id: 'textile', label: 'Textiles', icon: Shirt },
  { id: 'other', label: 'Otros', icon: MoreHorizontal },
];

export const CategoryPicker = ({ selected, onSelect }: any) => (
  <View style={styles.grid}>
    {categories.map((cat) => {
      const Icon = cat.icon;
      const isSelected = selected === cat.id;
      return (
        <TouchableOpacity 
          key={cat.id} 
          onSelect={() => onSelect(cat.id)}
          style={[styles.item, isSelected && styles.itemSelected]}
        >
          <Icon size={32} color={isSelected ? '#003b5a' : '#72787f'} />
          <Text style={[styles.label, isSelected && styles.labelSelected]}>{cat.label}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  item: { width: '47%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 16, borderWidth: 1, borderColor: '#c1c7cf', backgroundColor: '#fff' },
  itemSelected: { borderColor: '#003b5a', backgroundColor: '#cbe6ff', borderWidth: 2 },
  label: { marginTop: 8, fontSize: 14, fontWeight: '600', color: '#41474e' },
  labelSelected: { color: '#003b5a' }
});