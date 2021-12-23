import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Detail = ({ route }) => {
  const item = route.params

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>ID</Text>
        <Text style={styles.detailText}>{item.id}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Name</Text>
        <Text style={styles.detailText}>{item.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Desc</Text>
        <Text style={styles.detailText}>{item.description}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Active</Text>
        <Text style={styles.detailText}>{item.active}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>CreatedAt</Text>
        <Text style={styles.detailText}>{item.created_at}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>UreatedAt</Text>
        <Text style={styles.detailText}>{item.updated_at}</Text>
      </View>
    </View>
  )
}

export default Detail
