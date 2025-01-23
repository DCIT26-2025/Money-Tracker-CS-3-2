import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';

import { ReactNode } from 'react';

const GradientBackground = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient
      colors={['#6a0dad', '#ff7f50']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBackground;