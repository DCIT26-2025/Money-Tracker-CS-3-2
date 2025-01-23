import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = React.useState([
    {
      id: '1',
      type: 'expense',
      amount: 120,
      category: 'Groceries',
      date: '2024-01-15',
      description: 'Weekly groceries'
    },
    {
      id: '2',
      type: 'income',
      amount: 3000,
      category: 'Salary',
      date: '2024-01-01',
      description: 'Monthly salary'
    }
  ]);

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
  }, 0);

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <LinearGradient
      colors={['#1e1e1e', '#3a3a3a']}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Balance Card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>${balance}</Text>
            <View style={styles.balanceDetails}>
              <View style={styles.balanceDetail}>
                <Text style={styles.balanceDetailText}>Income</Text>
                <Text style={styles.incomeAmount}>+${income}</Text>
              </View>
              <View style={styles.balanceDetail}>
                <Text style={styles.balanceDetailText}>Expenses</Text>
                <Text style={styles.expenseAmount}>-${expenses}</Text>
              </View>
            </View>
          </View>

          {/* Recent Transactions */}
          <View style={styles.transactions}>
            <Text style={styles.transactionsTitle}>Recent Transactions</Text>
            {transactions.slice(0, 5).map((transaction) => (
              <View key={transaction.id} style={styles.transaction}>
                <View style={styles.transactionDetails}>
                  <View>
                    <Text style={styles.transactionCategory}>{transaction.category}</Text>
                    <Text style={styles.transactionDescription}>{transaction.description}</Text>
                  </View>
                  <Text style={transaction.type === 'income' ? styles.incomeAmount : styles.expenseAmount}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                  </Text>
                </View>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            ))}
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
    padding: 20,
    paddingBottom: 80, // Ensure content is not hidden behind the nav bar
  },
  balanceCard: {
    backgroundColor: '#2a2a2a', // Darker card background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  balanceTitle: {
    color: 'white',
    fontSize: 18,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  balanceDetail: {
    alignItems: 'center',
  },
  balanceDetailText: {
    color: 'white',
  },
  incomeAmount: {
    color: '#4caf50', // Green color for income
    fontWeight: 'bold',
  },
  expenseAmount: {
    color: '#f44336', // Red color for expenses
    fontWeight: 'bold',
  },
  transactions: {
    marginBottom: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  transaction: {
    backgroundColor: '#2a2a2a', // Darker card background
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionCategory: {
    color: 'white',
    fontSize: 16,
  },
  transactionDescription: {
    color: 'gray',
  },
  transactionDate: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
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

export default HomeScreen;