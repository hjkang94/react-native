import React from 'react'
import {
  DetailContainer,
  DetailContent,
  DetailText,
  DetailSubText
} from './style'

const Detail = ({ route }) => {
  const contents = route.params.map(item => (
    <DetailContent key={item.name}>
      <DetailText>{item.name}</DetailText>
      <DetailSubText>{item.value}</DetailSubText>
    </DetailContent>
  ))

  return <DetailContainer>{contents}</DetailContainer>
}

export default Detail
