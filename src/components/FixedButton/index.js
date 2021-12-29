import React from 'react'
import { Button, IconContainer } from './style'

const FixedButton = props => {
  const { buttonColor, size, borderRadius, onPress, icon, iconColor } = props
  return (
    <Button
      buttonColor={buttonColor}
      size={size}
      borderRadius={borderRadius}
      iconColor={iconColor}
      onPress={onPress}>
      <IconContainer name={icon} size={30} iconColor={iconColor} />
    </Button>
  )
}

FixedButton.defaultProps = {
  icon: 'add',
  buttonColor: ({ theme }) => theme.colors.base,
  iconColor: ({ theme }) => theme.colors.danger,
  size: '50px',
  borderRadius: '25px',
  onPress: () => null
}

export default FixedButton
