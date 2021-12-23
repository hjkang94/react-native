import styled from 'styled-components'
import { Color } from '@/assets/css'

export const FlatList = styled.FlatList`
  margin: 10px;
`

export const ListItem = styled.Pressable`
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Color.lightGray};
`

export const Text = styled.Text`
  font-size: 15px;
`

export const SubText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: ${Color.subText};
`

export const DetailContainer = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Color.lightGray};
`

export const DetailText = styled.Text`
  width: 30%;
  color: ${Color.subText};
`

export const DetailSubText = styled.Text`
  width: 50%;
  margin-left: 20px;
`
