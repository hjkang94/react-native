import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 40%;
`

export const IconContent = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${({ theme }) => theme.margins.base};
`

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 40%;
`
