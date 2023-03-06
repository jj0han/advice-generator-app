import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'
import Button from './components/Button'
import pattern from './images/pattern-divider-mobile.svg'

export default function App() {
  const [advice, setAdvice] = useState({ slip: { advice: "Click the dice to generete advices.", id: 1 } })

  return (
    <TailwindProvider>
      <View className="flex items-center justify-center bg-[#202632] w-full py-20">
        <View className="relative items-center justify-evenly bg-[#313a49] min-h-[50%] w-11/12 max-w-md p-5 rounded-xl">
          <Text className="text-[#53ffab] font-medium tracking-[0.35em] text-xs mb-6">ADVICE #{advice.slip.id}</Text>
          <Text className="text-[#cee2e9] text-center font-semibold text-2xl mb-6 w-full">{advice.slip.advice}</Text>
          <Image className="w-full h-4 mb-6" source={pattern} />
          <Button setAdvice={setAdvice} />
        </View>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  )
}
