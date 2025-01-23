import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const TipsScreen = () => {
  const tips = [
    {
      id: '1',
      title: '50/30/20 Rule',
      description: 'Allocate 50% of your income to needs, 30% to wants, and 20% to savings.'
    },
    {
      id: '2',
      title: 'Track Every Expense',
      description: 'Keep track of all your expenses, no matter how small they are.'
    },
    {
      id: '3',
      title: 'Emergency Fund',
      description: 'Build an emergency fund that covers 3-6 months of expenses.'
    },
    {
      id: '4',
      title: 'Avoid Impulse Purchases',
      description: 'Wait 24 hours before making non-essential purchases.'
    }
  ];
  
  const navigation = useNavigation();

  return (
    <LinearGradient
          colors={['#1e1e1e', '#3a3a3a']}
          style={styles.gradientBackground}
        >

    <View style={{ flex: 1 }}>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Financial Tips</Text>
        {tips.map((tip) => (
          <View key={tip.id} style={styles.tipContainer}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="white" />
        <Text style={styles.navButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome name="user" size={24} color="white" />
        <Text style={styles.navButtonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Records')}>
        <Ionicons name="list" size={24} color="white" />
        <Text style={styles.navButtonText}>Records</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Tips')}>
        <Ionicons name="lightbulb-o" size={24} color="white" />
        <Text style={styles.navButtonText}>Tips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Transaction')}>
        <Ionicons name="exchange" size={24} color="white" />
        <Text style={styles.navButtonText}>Transactions</Text>
      </TouchableOpacity>
    </View>
  </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6666',
    marginBottom: 40,
  },
  tipContainer: {
    backgroundColor: '#333333', // Grey container background
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  tipTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  tipDescription: {
    fontSize: 16,
    color: '#d3d3d3',
  },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#2a2a2a',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#444',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    navButton: {
      alignItems: 'center',
    },
    navButtonText: {
      color: 'white',
      fontSize: 12,
      marginTop: 5,
    },
});

export default TipsScreen;