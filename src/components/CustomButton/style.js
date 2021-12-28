import styled from 'styled-components'

export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.margins.sm};
  background-color: ${props => props.buttonColor};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 3px;
`

export const ButtonText = styled.Text`
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: ${props => props.color};
`
