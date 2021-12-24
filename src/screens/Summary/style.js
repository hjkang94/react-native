import styled from 'styled-components'
import { Color } from '@/assets/css'

export const FlatList = styled.FlatList`
  margin: 0px 10px 10px 10px;
`

export const ListItem = styled.Pressable`
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Color.lightGray};
`

export const DetailContainer = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Color.lightGray};
`

export const DetailText = styled.Text`
  font-size: 13px;
  width: 25%;
  color: ${Color.subText};
`

export const DetailSubText = styled.Text`
  font-size: 13px;
  width: 60%;
  margin-left: 20px;
`

export const Container = styled.View`
  flex-direction: row;
  height: 25px;
`

export const Text = styled.Text`
  font-size: 13px;
  width: 20%;
  color: ${Color.subText};
`

export const SubText = styled.Text`
  font-size: 13px;
  width: 80%;
  margin-left: 20px;
`
