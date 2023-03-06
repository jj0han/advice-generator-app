import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import icon from '../images/icon-dice.svg'

export default function Button({ setAdvice }) {

  function handlePress() {
    fetch("	https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data))
  }

  return (
    <Pressable className="absolute -bottom-9 p-5 rounded-full bg-[#53ffab]" onPress={handlePress}>
      <View className="">
        <Image className="w-7 h-7" source={icon} />
      </View>
    </Pressable>
  )
}