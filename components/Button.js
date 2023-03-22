import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icon from '../images/icon-dice.png'
import * as Animatable from 'react-native-animatable'

export default function Button({ setAdvice }) {

  async function handlePress() {
    const id = Math.floor(Math.random() * 200)

    fetch(`https://api.adviceslip.com/advice/${id}`)
      .then(res => res.json())
      .then(data => setAdvice(data))
  }

  return (
    <Animatable.View  iterationCount="infinite" duration={2000} easing="ease-in-cubic" className="absolute -bottom-9">
      <TouchableOpacity className="p-5 rounded-full bg-[#53ffab]" onPress={handlePress}>
        <View>
          <Image className="w-7 h-7" source={icon} />
        </View>
      </TouchableOpacity>
    </Animatable.View>
  )
}