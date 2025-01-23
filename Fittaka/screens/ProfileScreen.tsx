import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
          colors={['#1e1e1e', '#3a3a3a']}
          style={styles.gradientBackground}
        >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>

        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.settingsButton, styles.logoutButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.settingsButtonText, styles.logoutButtonText]}>Logout</Text>
          </TouchableOpacity>
        </View>
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
        </ScrollView>
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6666',
  },
  profileEmail: {
    fontSize: 16,
    color: '#d3d3d3',
  },
  settingsContainer: {
    width: '100%',
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6666',
    marginBottom: 20,
  },
  settingsButton: {
    backgroundColor: '#333333', // Grey button background
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  settingsButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff6666',
  },
  logoutButtonText: {
    color: '#ffffff',
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

export default ProfileScreen;