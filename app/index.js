import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  ScrollView
} from 'react-native';
import { Stack } from 'expo-router';
import {Home} from '../components';
import HeaderIcon from '../components/headerIcon/HeaderIcon';
import { icons } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitle: 'Wikipedia Summarizer',
          headerLeft: () => (
            <HeaderIcon iconUrl={icons.logo}/>
          )
        }}
      />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Home />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background color
  },
  headerStyle: {
    backgroundColor: '#1E1E1E', // Dark background color for header
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', // White text color for header title
  },
});