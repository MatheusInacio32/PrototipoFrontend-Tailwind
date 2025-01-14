import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import '../styles/global.css';
import Login from '../screens/login/login';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Login /> 
    </View>
  );
}



