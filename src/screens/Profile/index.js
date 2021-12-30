import React, { useState, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { CustomButton, CircularImage } from '@/components'
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'
import { logout } from '@/api/session'
import { dateFormat } from '@/utils/date'
import { ThemeContext } from 'styled-components'
import {
  Container,
  ButtonContainer,
  ProfileContainer,
  Content,
  Text,
  SubText,
  ImageButton,
  ImageButtonContainer,
  IconContainer
} from './style'

const Profile = ({ navigation, switchTheme }) => {
  const userInfo = useSelector(store => store.userInfoReducer.userInfo)
  const themeContext = useContext(ThemeContext)

  const handleLogout = () => {
    logout()
    AsyncStorage.removeItem('user')
    navigation.navigate('Auth')
  }

  const [imageSource, setImageSource] = useState(undefined)
  const options = {
    title: 'Load Photo',
    customButtons: [
      { name: 'button_id_1', title: 'CustomButton 1' },
      { name: 'button_id_2', title: 'CustomButton 2' }
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }

  const showCamera = async () => {
    const res = await launchCamera(options)
    setImageSource(res.errorCode || res.didCancel ? undefined : res.uri)
    Alert.alert('핸드폰을 연결해주세요!')
  }

  const showImageLibrary = async () => {
    const res = await launchImageLibrary(options)
    setImageSource(res.didCancel ? undefined : res.assets[0].uri)
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
      <CircularImage
        src={
          !imageSource
            ? require('@/assets/image/default.jpeg')
            : { uri: imageSource }
        }
        size={150}
      />
      <ImageButtonContainer>
        <ImageButton onPress={showCamera}>
          <IconContainer
            name={'camera'}
            size={20}
            iconColor={themeContext.colors.secondary}
          />
        </ImageButton>
        <ImageButton onPress={showImageLibrary}>
          <IconContainer
            name={'ios-albums'}
            size={20}
            iconColor={themeContext.colors.secondary}
          />
        </ImageButton>
      </ImageButtonContainer>
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
