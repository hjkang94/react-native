import React from 'react'
import { Button, ButtonText } from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '@/assets/css'

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
      <Icon name={icon} size={30} color={borderColor} />
      <ButtonText color={titleColor}>{title}</ButtonText>
    </Button>
  )
}

IconButton.defaultProps = {
  title: 'untitled',
  icon: 'alert-circle',
  buttonColor: '#FFF',
  borderColor: Color.primary,
  titleColor: Color.primary,
  width: '100px',
  height: '100px',
  onPress: () => null
}

export default IconButton
