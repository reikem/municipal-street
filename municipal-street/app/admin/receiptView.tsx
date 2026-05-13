import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FileDown, Share2, Info, ArrowLeft } from 'lucide-react-native';
import { InfractionReceipt } from '@/components/ui/infractionReceipt';

export default function ReceiptViewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Reutilizado */}
      <View style={styles.appBar}>
        <TouchableOpacity>
          <ArrowLeft color="#003b5a" size={24} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Comprobante</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Encabezado Institucional */}
        <View style={styles.instHeader}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>M</Text>
          </View>
          <Text style={styles.instTitle}>Gestión Municipal</Text>
          <Text style={styles.instSub}>Documento Oficial de Registro</Text>
        </View>

        <InfractionReceipt />

        {/* Instrucciones */}
        <View style={styles.instructionsSection}>
          <View style={styles.sectionHeader}>
            <Info size={20} color="#003b5a" />
            <Text style={styles.sectionTitle}>Instrucciones de Pago</Text>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}><Text style={styles.stepNumText}>1</Text></View>
            <Text style={styles.stepText}>
              <Text style={styles.bold}>Pago en Ventanilla:</Text> En oficinas de Tesorería o portales bancarios autorizados.
            </Text>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}><Text style={styles.stepNumText}>2</Text></View>
            <Text style={styles.stepText}>
              <Text style={styles.bold}>Apelación:</Text> 5 días hábiles para inconformidad en el Juzgado Cívico.
            </Text>
          </View>
        </View>

        {/* Botones de Acción */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnPrimary}>
            <FileDown size={20} color="#003b5a" />
            <Text style={styles.btnPrimaryText}>Descargar PDF</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnOutline}>
            <Share2 size={20} color="#003b5a" />
            <Text style={styles.btnOutlineText}>Compartir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7f9fb' 
  },
  appBar: { 
    height: 80, 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingTop: 30, 
    borderBottomWidth: 1, 
    borderColor: '#eceef0' 
  },
  appBarTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#003b5a', 
    marginLeft: 16 
  },
  content: { 
    padding: 16, 
    paddingBottom: 40 
  },
  instHeader: { 
    alignItems: 'center', 
    marginBottom: 24 
  },
  logoCircle: { 
    width: 64, 
    height: 64, 
    borderRadius: 32, 
    backgroundColor: '#fff', 
    borderWidth: 1, // Corregido: antes era borderSize
    borderColor: '#c1c7cf', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 2, 
    marginBottom: 12 
  },
  logoText: { 
    fontSize: 24, 
    fontWeight: '900', 
    color: '#003b5a' 
  },
  instTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#003b5a' 
  },
  instSub: { 
    fontSize: 13, 
    color: '#72787f' 
  },
  instructionsSection: { 
    marginTop: 32, 
    gap: 16 
  },
  sectionHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    marginBottom: 8 
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#003b5a' 
  },
  step: { 
    flexDirection: 'row', 
    gap: 12, 
    alignItems: 'flex-start' 
  },
  stepNumber: { 
    width: 24, 
    height: 24, 
    borderRadius: 12, 
    backgroundColor: '#003b5a', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  stepNumText: { 
    color: '#fff', 
    fontSize: 12, 
    fontWeight: '800' 
  },
  stepText: { 
    flex: 1, 
    fontSize: 14, 
    color: '#41474e', 
    lineHeight: 20 
  },
  bold: { 
    fontWeight: '700', 
    color: '#191c1e' 
  },
  actions: { 
    marginTop: 32, 
    gap: 12 
  },
  btnPrimary: { 
    height: 56, 
    backgroundColor: '#cbe6ff', 
    borderRadius: 16, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10 
  },
  btnPrimaryText: { 
    color: '#003b5a', 
    fontWeight: '700', 
    fontSize: 16 
  },
  btnOutline: { 
    height: 56, 
    borderWidth: 2, 
    borderColor: '#003b5a', 
    borderRadius: 16, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10 
  },
  btnOutlineText: { 
    color: '#003b5a', 
    fontWeight: '700', 
    fontSize: 16 
  }
});