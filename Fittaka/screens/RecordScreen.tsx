import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const RecordScreen = () => {
  const records = [
    {
      id: '1',
      title: 'Groceries',
      amount: '$50',
      date: '2023-10-01'
    },
    {
      id: '2',
      title: 'Rent',
      amount: '$1200',
      date: '2023-10-01'
    },
    {
      id: '3',
      title: 'Utilities',
      amount: '$150',
      date: '2023-10-01'
    },
    {
      id: '4',
      title: 'Dining Out',
      amount: '$30',
      date: '2023-10-02'
    }
  ];
  const navigation = useNavigation();

  return (
    <LinearGradient
          colors={['#1e1e1e', '#3a3a3a']}
          style={styles.gradientBackground}
        >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Expense Records</Text>
          {records.map((record) => (
            <View key={record.id} style={styles.recordContainer}>
              <Text style={styles.recordTitle}>{record.title}</Text>
              <Text style={styles.recordAmount}>{record.amount}</Text>
              <Text style={styles.recordDate}>{record.date}</Text>
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
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, // Add padding to avoid overlap with the nav bar
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6666',
    marginBottom: 40,
  },
  recordContainer: {
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
  recordTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  recordAmount: {
    fontSize: 16,
    color: '#d3d3d3',
  },
  recordDate: {
    fontSize: 14,
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
export default RecordScreen;