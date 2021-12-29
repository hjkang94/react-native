import React from 'react'
import { Button, ButtonText } from './style'

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
  buttonColor: ({ theme }) => theme.colors.primary,
  titleColor: '#fff',
  width: '80px',
  height: '40px',
  onPress: () => null
}

export default CustomButton
