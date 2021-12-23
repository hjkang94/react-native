import React from 'react'
import { Modal } from 'react-native'
import { ModalContainer, ModalContent, Button, ButtonText } from './style'

const CustomModal = props => {
  const { visible, setVisible, body } = props
  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          {body}
          <Button onPress={() => setVisible(!visible)}>
            <ButtonText>닫기</ButtonText>
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default CustomModal
