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
    { id: "1", title: "Groceries", amount: "$50", date: "2023-10-01" },
    { id: "2", title: "Rent", amount: "$1200", date: "2023-10-01" },
    { id: "3", title: "Utilities", amount: "$150", date: "2023-10-01" },
    { id: "4", title: "Dining Out", amount: "$30", date: "2023-10-02" },
  ];
  const navigation = useNavigation();

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
              colors={["#6a0dad", "#482880"]}
              style={styles.recordCard}
            >
              <View style={styles.recordInfo}>
                <Text style={styles.recordTitle}>{record.title}</Text>
                <Text style={styles.recordAmount}>{record.amount}</Text>
              </View>
              <Text style={styles.recordDate}>{record.date}</Text>
            </LinearGradient>
          ))}
        </ScrollView>

        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="home" size={24} color="#FFFFFF" />
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <FontAwesome name="user" size={24} color="#FFFFFF" />
            <Text style={styles.navButtonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Records")}
          >
            <Ionicons name="list" size={24} color="#FFFFFF" />
            <Text style={styles.navButtonText}>Records</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Tips")}
          >
            <Ionicons name="bulb-outline" size={24} color="#FFFFFF" />
            <Text style={styles.navButtonText}>Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Transaction")}
          >
            <Ionicons name="swap-horizontal-outline" size={24} color="#FFFFFF" />
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
