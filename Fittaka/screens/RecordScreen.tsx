import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from '@react-navigation/stack';

type RouteParams = {
  newTransaction?: {
    id: number;
    description: string;
    amount: number;
    date: string;
    type: string;
  };
};

const RecordScreen = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const [records, setRecords] = useState([
    { id: "1", title: "Groceries", amount: "₱800", date: "2023-10-01", type: "expense" },
    { id: "2", title: "Rent", amount: "₱2000", date: "2023-10-01", type: "expense" },
    { id: "3", title: "Utilities", amount: "₱1000", date: "2023-10-01", type: "expense" },
    { id: "4", title: "Dining Out", amount: "₱500", date: "2023-10-02", type: "expense" },
  ]);
  
  
  type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Records: undefined;
    Tips: undefined;
    Transaction: undefined;
  };
  
  type NavigationProp = StackNavigationProp<RootStackParamList>;
  
  const navigation = useNavigation<NavigationProp>();
 

  useEffect(() => {
    // Check if a new transaction was passed from TransactionScreen
    if (route.params?.newTransaction) {
      const { newTransaction } = route.params;
      
      // Format the transaction to match existing record structure
      const formattedTransaction = {
        id: newTransaction.id.toString(),
        title: newTransaction.description,
        amount: `$${newTransaction.amount.toFixed(2)}`,
        date: new Date(newTransaction.date).toISOString().split('T')[0],
        type: newTransaction.type
      };

      // Add the new transaction to the records
      setRecords(prevRecords => [formattedTransaction, ...prevRecords]);
    }
  }, [route.params?.newTransaction]);

  return (
    <LinearGradient
      colors={["#6a0dad", "#3a3a3a"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Expense Records</Text>
          {records.map((record) => (
            <LinearGradient
              key={record.id}
              colors={record.type === 'expense' ? ["#6a0dad", "#482880"] : ["#28a745", "#145A32"]}
              style={styles.recordCard}
            >
              <View style={styles.recordInfo}>
                <Text style={styles.recordTitle}>{record.title}</Text>
                <Text style={[
                  styles.recordAmount, 
                  record.type === 'expense' && styles.expenseAmount
                ]}>
                  {record.amount}
                </Text>
              </View>
              <Text style={styles.recordDate}>{record.date}</Text>
            </LinearGradient>
          ))}
        </ScrollView>

        <View style={styles.navBar}>
          {[
            { name: "Home", icon: "home", IconComponent: Ionicons },
            { name: "Profile", icon: "user", IconComponent: FontAwesome },
            { name: "Records", icon: "list", IconComponent: Ionicons },
            { name: "Tips", icon: "bulb-outline", IconComponent: Ionicons },
            { name: "Transaction", icon: "swap-horizontal-outline", IconComponent: Ionicons }
          ].map(({ name, icon, IconComponent }) => (
            <TouchableOpacity
              key={name}
              style={styles.navButton}
              onPress={() => navigation.navigate(name as keyof RootStackParamList)}
            >
              <IconComponent name={icon as any} size={24} color="#FFFFFF" />
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
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#EDEDED",
    marginBottom: 30,
  },
  recordCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  recordInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  recordAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D1B3FF", // Soft lavender accent
  },
  recordDate: {
    fontSize: 14,
    color: "#E3E3E3",
    marginTop: 10,
    textAlign: "right",
  },
  expenseAmount: {
    color: "white", // Example color for expense amount
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

export default RecordScreen;
