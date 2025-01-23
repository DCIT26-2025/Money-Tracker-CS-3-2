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
      description: 'Weekly groceries',
    },
    {
      id: '2',
      type: 'income',
      amount: 3000,
      category: 'Salary',
      date: '2024-01-01',
      description: 'Monthly salary',
    },
  ]);

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
  }, 0);

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <LinearGradient
      colors={['#6a0dad', '#1e1e30']}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Balance Card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>₱{balance}</Text>
            <View style={styles.balanceDetails}>
              <View style={styles.balanceDetail}>
                <Text style={styles.balanceDetailText}>Income</Text>
                <Text style={styles.incomeAmount}>+₱{income}</Text>
              </View>
              <View style={styles.balanceDetail}>
                <Text style={styles.balanceDetailText}>Expenses</Text>
                <Text style={styles.expenseAmount}>-₱{expenses}</Text>
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
                  <Text
                    style={
                      transaction.type === 'income'
                        ? styles.incomeAmount
                        : styles.expenseAmount
                    }
                  >
                    {transaction.type === 'income' ? '+' : '-'}₱{transaction.amount}
                  </Text>
                </View>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <FontAwesome name="user" size={24} color="white" />
            <Text style={styles.navButtonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Records')}
          >
            <Ionicons name="list" size={24} color="white" />
            <Text style={styles.navButtonText}>Records</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Tips')}
          >
            <Ionicons name="bulb-outline" size={24} color="white" />
            <Text style={styles.navButtonText}>Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Transaction')}
          >
            <Ionicons name="swap-horizontal-outline" size={24} color="white" />
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
    paddingBottom: 80,
  },
  balanceCard: {
    backgroundColor: '#4b0082',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  balanceTitle: {
    color: '#d1c4e9',
    fontSize: 18,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  balanceDetail: {
    alignItems: 'center',
  },
  balanceDetailText: {
    color: '#c5cae9',
  },
  incomeAmount: {
    color: '#8e99f3',
    fontWeight: 'bold',
  },
  expenseAmount: {
    color: '#ff80ab',
    fontWeight: 'bold',
  },
  transactions: {
    marginBottom: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bb86fc',
    marginBottom: 10,
  },
  transaction: {
    backgroundColor: '#3f0071',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#6a0dad',
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionCategory: {
    color: '#d1c4e9',
    fontSize: 16,
  },
  transactionDescription: {
    color: '#b39ddb',
  },
  transactionDate: {
    color: '#bdbdbd',
    fontSize: 12,
    marginTop: 5,
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

export default HomeScreen;
