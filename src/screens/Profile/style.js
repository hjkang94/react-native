import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const ButtonContainer = styled.View`
  margin: ${({ theme }) => theme.margins.sm};
  margin-left: auto;
  height: 50px;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.margins.lg};
`

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex-direction: row;
  height: 40px;
  margin: ${({ theme }) => theme.margins.base};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Text = styled.Text`
  width: 30%;
  color: ${({ theme }) => theme.colors.subText};
`

export const SubText = styled.Text`
  width: 50%;
  margin-left: ${({ theme }) => theme.margins.lg};
  color: ${({ theme }) => theme.colors.text};
`
