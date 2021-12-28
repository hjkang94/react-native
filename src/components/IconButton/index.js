import React from 'react'
import { Button, ButtonText, IconContainer } from './style'

const IconButton = props => {
  const {
    borderColor,
    buttonColor,
    width,
    height,
    onPress,
    icon,
    titleColor,
    title
  } = props

  return (
    <Button
      borderColor={borderColor}
      buttonColor={buttonColor}
      width={width}
      height={height}
      onPress={onPress}>
      <IconContainer name={icon} size={30} borderColor={borderColor} />
      <ButtonText color={titleColor}>{title}</ButtonText>
    </Button>
  )
}

IconButton.defaultProps = {
  title: 'Untitled',
  icon: 'alert-circle',
  borderColor: ({ theme }) => theme.colors.primary,
  titleColor: ({ theme }) => theme.colors.primary,
  buttonColor: ({ theme }) => theme.colors.background,
  width: '100px',
  height: '100px',
  onPress: () => null
}

export default IconButton
