import styled from 'styled-components'

export const Container = styled.View`
  margin: 20px 15px 15px 15px;
`

export const TextInput = styled.TextInput`
  height: 35px;
  padding-left: ${({ theme }) => theme.paddings.base};
  border: 0.5px solid #939393;
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.text};
`
