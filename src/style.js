import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  flex-direction: column;
`
