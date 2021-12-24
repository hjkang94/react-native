import styled from 'styled-components'
import { Color } from '@/assets/css'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Color.primary};
`

export const ActivityIndicator = styled.ActivityIndicator`
  align-items: center;
  height: 80px;
`

export const Title = styled.Text`
  color: #FFF
  font-weight: bold;
  font-size: 18px;
`
