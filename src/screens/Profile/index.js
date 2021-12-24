import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { CustomButton } from '@/components'
import { useSelector } from 'react-redux'
import { logout } from '@/api/session'
import {
  Container,
  LogoutContainer,
  ProfileContainer,
  Content,
  Text,
  SubText,
  IconContent
} from './style'
import { Color } from '@/assets/css'

const Profile = ({ navigation }) => {
  const userInfo = useSelector(store => store.userInfoReducer.userInfo)
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
      <LogoutContainer>
        <CustomButton
          title={'로그아웃'}
          onPress={() => handleLogout()}
          height={'40px'}
          width={'80px'}
          buttonColor={Color.danger}
        />
      </LogoutContainer>
      <IconContent name={'happy-outline'} size={150} />
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
          <SubText>{userInfo.loggedin_at}</SubText>
        </Content>
        <Content>
          <Text>Created At</Text>
          <SubText>{userInfo.created_at}</SubText>
        </Content>
      </ProfileContainer>
    </Container>
  )
}

export default Profile
