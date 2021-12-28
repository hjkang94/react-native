import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ActivityIndicator = styled.ActivityIndicator`
  align-items: center;
  height: 80px;
`

export const Title = styled.Text`
  color: #FFF
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.size.lg};
`
