import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { listMenu } from '@/data/data'
import { router } from 'expo-router'
import { IData } from '@/types/common'

type Props = {
  item: IData
  size: 'small' | 'normal'
}

const Card = ({ item, size }: Props) => {
  let imageSize, numberOfline
  if (size == 'normal') {
    imageSize = 128
    numberOfline = 3
  } else if (size === 'small') {
    imageSize = 72
    numberOfline = 1
  }
  return (
    <TouchableHighlight
      style={{
        borderRadius: 16,
        overflow: 'hidden',
      }}
      onPress={() =>
        router.push({
          pathname: '/detail',
          params: {
            menuId: item.category,
            itemId: item.id,
          },
        })
      }
    >
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: 16,
        }}
        className="flex-row items-center space-x-3"
      >
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            className="rounded-xl"
            style={{ width: (imageSize || 0) + 24, height: (imageSize || 0) + 24 }}
          />
        </View>
        <View className="flex-1 space-y-2">
          <Text className="text-primary-400 text-xs">
            {listMenu.find((elm) => elm.category === item.category)?.title}
          </Text>
          <Text className="text-zinc-800 font-medium text-base">{item.title}</Text>
          <Text
            className="text-sm text-zinc-500 leading-5 w-4/5"
            ellipsizeMode="tail"
            numberOfLines={numberOfline}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default Card
