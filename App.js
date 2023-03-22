import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'
import Button from './components/Button'
import pattern from './images/pattern-divider-mobile.png'
import * as Animatable from 'react-native-animatable'

export default function App() {
  const [advice, setAdvice] = useState({ slip: { advice: "Click the dice to generate advices.", id: 1 } })

  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 items-center justify-center bg-[#202632] w-full py-20">
        <View className="relative items-center justify-evenly bg-[#313a49] min-h-[50%] w-11/12 max-w-md p-5 rounded-xl shadow">
          <Text className="text-[#53ffab] font-medium text-xs mb-6 tracking-widest">ADVICE #{advice.slip.id}</Text>
          <Animatable.Text animation="fadeIn" easing="ease-in-out" className="text-[#cee2e9] text-center font-semibold text-2xl mb-6 w-full">{advice.slip.advice}</Animatable.Text>
          <Image className="w-full h-4 mb-6" source={pattern} />
          <Button setAdvice={setAdvice} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  )
}
