import styled from 'styled-components'

export const FlatList = styled.FlatList`
  margin: 0px 10px 10px 10px;
`

export const ListItem = styled.Pressable`
  padding: ${({ theme }) => theme.paddings.base};
  margin-top: ${({ theme }) => theme.margins.sm};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const DetailContainer = styled.View`
  flex-direction: row;
  height: 40px;
  margin: ${({ theme }) => theme.margins.base};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  width: 25%;
  color: ${({ theme }) => theme.colors.subText};
`

export const DetailSubText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  width: 60%;
  margin-left: ${({ theme }) => theme.margins.lg};
  color: ${({ theme }) => theme.colors.text};
`

export const Container = styled.View`
  flex-direction: row;
  height: 25px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  width: 20%;
  color: ${({ theme }) => theme.colors.subText};
`

export const SubText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  width: 80%;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.text};
`
