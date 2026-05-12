import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CheckCircle, ArrowLeftRight, CalendarX , CheckCircle2} from 'lucide-react-native';

interface InspectorProps {
  name: string;
  id: string;
  zone: string;
  status: 'available' | 'assigned' | 'unavailable';
  statusText: string;
  image: string;
  isSelected: boolean;
  onSelect: (val: boolean) => void;
}

export const InspectorCard = ({ 
  name, id, zone, status, statusText, image, isSelected, onSelect 
}: InspectorProps) => {
  
  const getStatusStyle = () => {
    switch (status) {
      case 'available': return { bg: '#7efba4', text: '#00210c', icon: <CheckCircle size={14} color="#00210c" /> };
      case 'assigned': return { bg: '#ffddb9', text: '#2b1700', icon: <ArrowLeftRight size={14} color="#2b1700" /> };
      case 'unavailable': return { bg: '#ffdad6', text: '#93000a', icon: <CalendarX size={14} color="#93000a" /> };
    }
  };

  const style = getStatusStyle();

  return (
    <View style={[styles.card, status === 'unavailable' && { opacity: 0.6 }]}>
      <Image source={{ uri: image }} style={[styles.avatar, { borderColor: style.bg }]} />
      
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
          <View style={[styles.badge, { backgroundColor: style.bg }]}>
            {style.icon}
            <Text style={[styles.badgeText, { color: style.text }]}>{statusText}</Text>
          </View>
        </View>
        <Text style={styles.subtext}>ID: {id} • {zone}</Text>
      </View>

      {status !== 'unavailable' && (
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isSelected ? '#003b5a' : '#fff', borderWidth: 1, borderColor: '#003b5a' },
          ]}
          onTouchEnd={() => onSelect(!isSelected)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 16, 
    alignItems: 'center', 
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eceef0'
  },
  avatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 2 },
  info: { flex: 1, marginLeft: 12 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  name: { fontSize: 16, fontWeight: '700', color: '#003b5a' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  subtext: { fontSize: 13, color: '#41474e' },
  checkbox: { width: 24, height: 24, borderRadius: 6 }
});