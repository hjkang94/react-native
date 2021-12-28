import styled from 'styled-components'

export const FlatList = styled.FlatList`
  margin: 0px 10px 10px 10px;
`

export const ListItem = styled.Pressable`
  padding: ${({ theme }) => theme.paddings.base};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.text};
`

export const SubText = styled.Text`
  margin-top: ${({ theme }) => theme.margins.sm};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme }) => theme.colors.subText};
`

export const DetailContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20%;
`

export const DetailContent = styled.View`
  flex-direction: row;
  width: 300px;
  height: 40px;
  margin: ${({ theme }) => theme.margins.base};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const DetailText = styled.Text`
  width: 30%;
  color: ${({ theme }) => theme.colors.subText};
`

export const DetailSubText = styled.Text`
  width: 70%;
  color: ${({ theme }) => theme.colors.text};
`
