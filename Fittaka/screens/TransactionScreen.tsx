import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const TransactionScreen = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');
  const navigation = useNavigation();

  const handleAddTransaction = () => {
    // Comprehensive input validation
    if (!amount.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Amount Error', 'Please enter a valid positive number');
      return;
    }

    // Create detailed transaction object
    const newTransaction = {
      id: Date.now(),
      amount: numericAmount,
      description: description.trim(),
      type,
      date: new Date().toISOString()
    };

    // Navigate and pass transaction data
    navigation.navigate('Home', { 
      newTransaction,
      transactionAdded: true 
    });

    navigation.navigate('Records', { 
      newTransaction 
    });

    // Success feedback
    Alert.alert('Success', 'Transaction added successfully');

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setAmount('');
    setDescription('');
    setType('income');
  };

  return (
    <LinearGradient 
      colors={['#6a0dad', '#1e1e30']} 
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Add Transaction</Text>
            
            {/* Amount Input */}
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              placeholderTextColor="#ddd"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              returnKeyType="next"
            />
            
            {/* Description Input */}
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter description"
              placeholderTextColor="#ddd"
              value={description}
              onChangeText={setDescription}
              returnKeyType="done"
            />
            
            {/* Transaction Type Selector */}
            <View style={styles.typeButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.typeButton, 
                  type === 'income' && styles.incomeButton
                ]}
                onPress={() => setType('income')}
              >
                <Text style={styles.typeButtonText}>Income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.typeButton, 
                  type === 'expense' && styles.expenseButton
                ]}
                onPress={() => setType('expense')}
              >
                <Text style={styles.typeButtonText}>Expense</Text>
              </TouchableOpacity>
            </View>
            
            {/* Add Transaction Button */}
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={handleAddTransaction}
            >
              <Text style={styles.addButtonText}>Add Transaction</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Navigation Bar */}
        <View style={styles.navBar}>
          {[
            { name: 'Home', icon: 'home', IconComponent: Ionicons },
            { name: 'Profile', icon: 'user', IconComponent: FontAwesome },
            { name: 'Records', icon: 'list', IconComponent: Ionicons },
            { name: 'Tips', icon: 'lightbulb', IconComponent: Ionicons },
            { name: 'Transaction', icon: 'exchange', IconComponent: Ionicons }
          ].map(({ name, icon, IconComponent }) => (
            <TouchableOpacity 
              key={name} 
              style={styles.navButton} 
              onPress={() => navigation.navigate(name)}
            >
              <IconComponent name={icon} size={24} color="white" />
              <Text style={styles.navButtonText}>{name}</Text>
            </TouchableOpacity>
          ))}
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
    flex: 1,
    paddingTop: 20,
    paddingBottom: 80, // Ensure it doesn't overlap with the navigation bar
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#6a11cb ', // Deep purple background
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  input: {
    backgroundColor: '#3e0d57', // Lighter purple for input fields
    color: '#fff',
    borderRadius: 7,
    padding: 12,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  
  typeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  typeButton: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#777',
  },
  incomeButton: {
    backgroundColor: '#28a745', // Green for income
  },
  expenseButton: {
    backgroundColor: '#b22749', // Red for expense
  },
  typeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#6f42c1', // Purple background for the button
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default TransactionScreen;
