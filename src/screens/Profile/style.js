import styled from 'styled-components'
import { Color } from '@/assets/css'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const LogoutContainer = styled.View`
  margin: 5px;
  margin-left: auto;
  height: 50px;
`

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Color.lightGray};
`

export const Text = styled.Text`
  width: 30%;
  color: ${Color.subText};
`

export const SubText = styled.Text`
  width: 50%;
  margin-left: 20px;
`

export const IconContent = styled(Icon)`
  color: ${Color.primary};
  margin-left: 10px;
  margin-top: 30px;
`
