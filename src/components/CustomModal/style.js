import styled from 'styled-components'

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalTitle = styled.View`
  padding-bottom: ${({ theme }) => theme.paddings.xl};
`

export const ModalTitleText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.size.base};
`

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.paddings.xl};
  align-items: center;
  elevation: 5;
`

const button = `
  padding: 10px;
  elevation: 2;
  min-width: 70px;
`

export const Button = styled.Pressable`
  ${button}
  margin-top: ${({ theme }) => theme.margins.lg};
  background-color: ${({ theme }) => theme.colors.danger};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-align: center;
`
