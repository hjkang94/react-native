import React from 'react'
import { Image } from 'react-native'
import { ImageBorder } from './style'

const CircularImage = props => {
  const { src, size } = props
  return (
    <ImageBorder>
      <Image
        source={src}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </ImageBorder>
  )
}

CircularImage.defaultProps = {
  size: 200,
  onPress: () => null
}

export default CircularImage
