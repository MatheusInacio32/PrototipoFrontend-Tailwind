import { Text, TextInput, View, SafeAreaView, Image, Animated, Pressable } from 'react-native';
import { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [buttonPressed, setButtonPressed] = useState(false); 

  // Reduz o botão ao pressionar
  const handlePressIn = () => {
    setButtonPressed(true); 
    Animated.spring(scaleAnim, {
      toValue: 0.90,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    setButtonPressed(false); 
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center items-center">

      
      <View className="flex items-center">
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 300, height: 150, marginBottom: 30 }}
        />
        <Text className="text-4xl font-bold text-black">Bem-vindo!</Text>
      </View>

      <View className="mt-8 w-full px-8">
        <Text className="text-xl text-gray-700">Email</Text>
        <View className="area-texto">
          <TextInput
            className="campo-texto"
            placeholder="Digite seu email"
            placeholderTextColor="#6b7280"
          />
          <MaterialIcons name="email" size={24} color="gray" />
        </View>

        <Text className="text-xl text-gray-700 mt-5">Senha</Text>
        <SafeAreaView>
          <View className="area-texto">
            <TextInput
              className="campo-texto"
              placeholder="Digite sua senha"
              placeholderTextColor="#6b7280"
              secureTextEntry
            />
            <MaterialIcons name="remove-red-eye" size={24} color="gray" />
          </View>
        </SafeAreaView>
      </View>

      <View className="mt-8 w-full px-8">
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{
              backgroundColor: buttonPressed ? '#FDE018' : '#FACC15', 
              paddingVertical: 16,
              borderRadius: 999,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text className="text-center text-black text-xl font-bold">Entrar</Text>
          </Pressable>
        </Animated.View>
      </View>

      <Text className="mt-6 text-center text-gray-500">
        Não tem conta?{' '}
        <Text className="text-yellow-500 font-bold">
          Crie agora!
        </Text>
      </Text>
    </View>
  );
}
