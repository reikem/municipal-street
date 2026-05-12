import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FormStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = ['Datos', 'Ubicación', 'Documentos'];
  
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <View style={styles.stepWrapper}>
            <View style={[
              styles.circle, 
              currentStep >= index + 1 ? styles.circleActive : styles.circleInactive
            ]}>
              <Text style={[
                styles.stepNum, 
                currentStep >= index + 1 ? styles.textActive : styles.textInactive
              ]}>{index + 1}</Text>
            </View>
            <Text style={[styles.stepLabel, currentStep >= index + 1 ? styles.labelActive : styles.labelInactive]}>
              {step}
            </Text>
          </View>
          {index < steps.length - 1 && (
            <View style={[styles.line, currentStep > index + 1 ? styles.lineActive : styles.lineInactive]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingHorizontal: 10 },
  stepWrapper: { alignItems: 'center', gap: 4 },
  circle: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  circleActive: { backgroundColor: '#003b5a' },
  circleInactive: { backgroundColor: '#e0e3e5' },
  stepNum: { fontWeight: 'bold', fontSize: 16 },
  textActive: { color: '#fff' },
  textInactive: { color: '#41474e' },
  stepLabel: { fontSize: 10, fontWeight: '700', uppercase: 'true' },
  labelActive: { color: '#003b5a' },
  labelInactive: { color: '#72787f' },
  line: { flex: 1, height: 2, marginHorizontal: 8, marginBottom: 15 },
  lineActive: { backgroundColor: '#003b5a' },
  lineInactive: { backgroundColor: '#c1c7cf' },
});