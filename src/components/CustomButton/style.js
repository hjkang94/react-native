import styled from 'styled-components'

export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${props => props.buttonColor};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: ${props => props.color};
`
