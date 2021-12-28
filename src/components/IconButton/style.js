import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin: 8px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.buttonColor};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  line-height: 21px;
  letter-spacing: 0.25px;
  color: ${props => props.color};
`

export const IconContainer = styled(Icon)`
  color: ${props => props.borderColor};
`
