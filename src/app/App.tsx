import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from '../routes/navigation';
import '../styles/global.css';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}