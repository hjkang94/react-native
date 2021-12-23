import React from 'react'
import { CustomButton } from '@/components'
import { IconContainer, IconContent, Container } from './style'

const Login = ({ navigation }) => {
  return (
    <>
      <IconContainer>
        <IconContent name={'person-circle'} size={200} />
      </IconContainer>
      <Container>
        <CustomButton
          title={'로그인'}
          width={'300px'}
          height={'50px'}
          onPress={() => navigation.navigate('Web')}
        />
      </Container>
    </>
  )
}

export default Login
