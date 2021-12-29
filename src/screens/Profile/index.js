import React, { useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { CustomButton, CircularImage } from '@/components'
import { useSelector } from 'react-redux'
import { logout } from '@/api/session'
import { dateFormat } from '@/utils/date'
import { ThemeContext } from 'styled-components'
import {
  Container,
  ButtonContainer,
  ProfileContainer,
  Content,
  Text,
  SubText
} from './style'

const Profile = ({ navigation, switchTheme }) => {
  const userInfo = useSelector(store => store.userInfoReducer.userInfo)
  const themeContext = useContext(ThemeContext)

  const handleLogout = () => {
    logout()
    AsyncStorage.removeItem('user')
    navigation.navigate('Auth')
  }

  if (!userInfo) {
    return <></>
  }

  return (
    <Container>
      <ButtonContainer>
        <CustomButton
          title={'테마변경'}
          onPress={() => switchTheme()}
          height={'40px'}
          width={'80px'}
          buttonColor={themeContext.colors.secondary}
        />
        <CustomButton
          title={'로그아웃'}
          onPress={() => handleLogout()}
          height={'40px'}
          width={'80px'}
          buttonColor={themeContext.colors.danger}
        />
      </ButtonContainer>
      <CircularImage src={require('@/assets/image/ja.jpeg')} size={200} />
      <ProfileContainer>
        <Content>
          <Text>Name</Text>
          <SubText>{userInfo.name}</SubText>
        </Content>
        <Content>
          <Text>Email</Text>
          <SubText>{userInfo.email}</SubText>
        </Content>
        <Content>
          <Text>Groups</Text>
          <SubText>{userInfo.groups.join(', ')}</SubText>
        </Content>
        <Content>
          <Text>Remark</Text>
          <SubText>{userInfo.remark}</SubText>
        </Content>
        <Content>
          <Text>Loggined At</Text>
          <SubText>{dateFormat(userInfo.loggedin_at)}</SubText>
        </Content>
        <Content>
          <Text>Created At</Text>
          <SubText>{dateFormat(userInfo.created_at)}</SubText>
        </Content>
      </ProfileContainer>
    </Container>
  )
}

export default Profile
