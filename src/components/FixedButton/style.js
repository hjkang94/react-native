import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.margins.lg};
  background-color: ${props => props.buttonColor};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.borderRadius};
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1000;
  border: 2px solid ${props => props.iconColor};
`

export const IconContainer = styled(Icon)`
  color: ${props => props.iconColor};
`
