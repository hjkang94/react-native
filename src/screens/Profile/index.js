import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from '../Home/style'
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#99A799'} />
      <View style={styles.outerWrapper}>
        <Icon name={'ios-settings'} size={100} color={'green'} />
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('this is Profile Screen')}
            style={styles.buttonStyle}>
            <Text style={styles.text}>
              this is{' '}
              <Text style={{ fontWeight: 'bold', color: 'green' }}>
                {' '}
                PROFILE{' '}
              </Text>{' '}
              screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
