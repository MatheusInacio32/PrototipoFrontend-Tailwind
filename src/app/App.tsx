import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import '../styles/global.css';
import Login from '../screens/login/login';
import Signin from '../screens/signin/signin';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" /> 
      <Signin />
    </View>
  );
}



