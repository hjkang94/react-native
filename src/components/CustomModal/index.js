import React from 'react'
import { Modal } from 'react-native'
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalTitleText,
  Button,
  ButtonText
} from './style'

const CustomModal = props => {
  const { visible, setVisible, body, title, close } = props
  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <ModalTitleText>{title}</ModalTitleText>
          </ModalTitle>
          {body}
          <Button onPress={() => setVisible(!visible)}>
            <ButtonText>{close}</ButtonText>
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

CustomModal.defaultProps = {
  title: '상세보기',
  close: '닫기'
}

export default CustomModal
