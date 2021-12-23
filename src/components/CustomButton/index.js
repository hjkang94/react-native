import React from 'react'
import { Button, ButtonText } from './style'
import { Color } from '@/assets/css'

const CustomButton = props => {
  const { buttonColor, width, height, onPress, titleColor, title } = props
  return (
    <Button
      buttonColor={buttonColor}
      width={width}
      height={height}
      onPress={onPress}>
      <ButtonText color={titleColor}>{title}</ButtonText>
    </Button>
  )
}

CustomButton.defaultProps = {
  title: 'untitled',
  buttonColor: Color.primary,
  titleColor: '#fff',
  width: '100px',
  height: '60px',
  onPress: () => null
}

export default CustomButton
