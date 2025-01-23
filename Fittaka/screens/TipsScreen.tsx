import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const TipsScreen = () => {
  const tips = [
    { id: '1', title: '50/30/20 Rule', description: 'Allocate 50% of your income to needs, 30% to wants, and 20% to savings.' },
    { id: '2', title: 'Track Every Expense', description: 'Keep track of all your expenses, no matter how small they are.' },
    { id: '3', title: 'Emergency Fund', description: 'Build an emergency fund that covers 3-6 months of expenses.' },
    { id: '4', title: 'Avoid Impulse Purchases', description: 'Wait 24 hours before making non-essential purchases.' },
    { id: '5', title: 'Invest Early', description: 'Start investing as early as possible to take advantage of compound interest.' },
    { id: '6', title: 'Pay Off Debt', description: 'Prioritize paying off high-interest debt to save on interest payments.' },
    { id: '7', title: 'Automate Savings', description: 'Set up automatic transfers to your savings account to build wealth effortlessly.' },
    { id: '8', title: 'Live Below Your Means', description: 'Spend less than you earn and avoid lifestyle inflation.' },
    { id: '9', title: 'Shop with a List', description: 'Stick to a shopping list to avoid unnecessary purchases.' },
    { id: '10', title: 'Review Your Budget', description: 'Regularly review your budget to ensure it aligns with your financial goals.' },
  ];

  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#6a0dad', '#1e1e30']} style={styles.gradientBackground}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('../assets/images/logo.png')} // Adjust the path to your logo
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Title */}
        <Text style={styles.title}>Financial Tips</Text>

        {/* Scrollable Tips List */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {tips.map((tip) => (
            <View key={tip.id} style={styles.tipContainer}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

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
          <Ionicons name="bulb-outline" size={24} color="white" />
          <Text style={styles.navButtonText}>Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Transaction')}>
          <Ionicons name="swap-horizontal-outline" size={24} color="white" />
          <Text style={styles.navButtonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d4a5ff', // Light lavender color for the title
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 80, // Ensure space for the navigation bar
  },
  tipContainer: {
    backgroundColor: '#3e0d57', // Deep purple background for tips
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%', // Uniform width
    minHeight: 100, // Ensures equal height for all containers
    justifyContent: 'center', // Centers content vertically
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
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 16,
    color: '#b8a9c9', // Subtle lavender color for description
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2a1e4f',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#6e57e0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#d0bdf4',
    fontSize: 12,
    marginTop: 5,
  },
});
export default TipsScreen;
