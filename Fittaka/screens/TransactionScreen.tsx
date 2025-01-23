import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const TransactionScreen = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');
  const navigation = useNavigation();

  const handleAddTransaction = () => {
    // Handle adding transaction logic here
  };

  return (
     <LinearGradient
          colors={['#1e1e1e', '#3a3a3a']}
          style={styles.gradientBackground}
        >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Add Transaction</Text>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              placeholderTextColor="#888"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter description"
              placeholderTextColor="#888"
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.typeButtonContainer}>
              <TouchableOpacity
                style={[styles.typeButton, type === 'income' && styles.incomeButton]}
                onPress={() => setType('income')}
              >
                <Text style={styles.typeButtonText}>Income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.typeButton, type === 'expense' && styles.expenseButton]}
                onPress={() => setType('expense')}
              >
                <Text style={styles.typeButtonText}>Expense</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddTransaction}>
              <Text style={styles.addButtonText}>Add Transaction</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, // Add padding to avoid overlap with the nav bar
  },
  formContainer: {
    backgroundColor: '#333333', // Grey container background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6666',
    marginBottom: 40,
  },
  label: {
    color: '#d3d3d3',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#444444', // Darker grey input background
    color: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  typeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  typeButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  incomeButton: {
    backgroundColor: 'green',
  },
  expenseButton: {
    backgroundColor: 'red',
  },
  typeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ff6666',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default TransactionScreen;