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

export const Switch = styled.Switch`
  color: ${({ theme }) => theme.colors.text};
  margin-left: auto;
  margin-right: ${props => props.marginSize};
`

export const AddContent = styled.View`
  width: 300px;
  margin: ${({ theme }) => theme.margins.base};
`

export const AddText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.base};
`

export const TextInput = styled.TextInput`
  height: 35px;
  padding-left: ${({ theme }) => theme.paddings.base};
  border: 0.5px solid #939393;
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.margins.sm};
  border-radius: 3px;
`

export const ButtonContainer = styled.View`
  margin-top: ${({ theme }) => theme.margins.lg};
  flex-direction: row;
`
