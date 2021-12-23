import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '@/assets/css'

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 40%;
`

export const IconContent = styled(Icon)`
  color: ${Color.primary};
  margin-left: 10px;
`

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 40%;
`
