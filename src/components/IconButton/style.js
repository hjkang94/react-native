import styled from 'styled-components'

export const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin: 8px;
  border: ${props => '1px solid ' + props.borderColor}
  background-color: ${props => props.buttonColor};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  line-height: 21px;
  letter-spacing: 0.25px;
  color: ${props => props.color};
`
