import React from 'react'
import {
  DetailContainer,
  DetailContent,
  DetailText,
  DetailSubText
} from './style'

const Detail = ({ route }) => {
  const item = route.params

  return (
    <DetailContainer>
      <DetailContent>
        <DetailText>ID</DetailText>
        <DetailSubText>{item.id}</DetailSubText>
      </DetailContent>
      <DetailContent>
        <DetailText>Name</DetailText>
        <DetailSubText>{item.name}</DetailSubText>
      </DetailContent>
      <DetailContent>
        <DetailText>Desc</DetailText>
        <DetailSubText>{item.description}</DetailSubText>
      </DetailContent>
      <DetailContent>
        <DetailText>Active</DetailText>
        <DetailSubText>{item.active}</DetailSubText>
      </DetailContent>
      <DetailContent>
        <DetailText>CreatedAt</DetailText>
        <DetailSubText>{item.created_at}</DetailSubText>
      </DetailContent>
      <DetailContent>
        <DetailText>UreatedAt</DetailText>
        <DetailSubText>{item.updated_at}</DetailSubText>
      </DetailContent>
    </DetailContainer>
  )
}

export default Detail
