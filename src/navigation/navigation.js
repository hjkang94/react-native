import React from 'react'
import {
  Home,
  Profile,
  Account,
  AccountDetail,
  Summary,
  Login,
  Web,
  Splash
} from '@/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native'
import { Color } from '@/assets/css'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const config = {
  screens: {
    Auth: 'auth',
    HomeBase: 'homebase',
    Splash: 'splash'
  }
}

const linking = {
  prefixes: ['https://myapp.com', 'myapp://'],
  config
}

function getIconName(name) {
  let iconName = ''
  switch (name) {
    case 'Home':
      iconName = 'ios-home'
      break
    case 'Profile':
      iconName = 'ios-settings'
      break
    default:
      break
  }
  return iconName
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={params => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const name = params.route.name
          return (
            <Icon
              name={getIconName(name)}
              size={20}
              color={focused ? Color.danger : '#808080'}
            />
          )
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                color: focused ? Color.danger : '#808080'
              }}>
              {params.route.name}
            </Text>
          )
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: '뒤로',
          headerStyle: {
            backgroundColor: Color.babyPink
          },
          headerTintColor: Color.primary
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="HomeBase" component={Tabs} />
        <Stack.Screen
          name="Account"
          options={{
            title: '계정',
            headerShown: true
          }}
          component={Account}
        />
        <Stack.Screen
          name="Summary"
          options={{
            title: '계정요약',
            headerShown: true
          }}
          component={Summary}
        />
        <Stack.Screen
          name="AccountDetail"
          options={{
            title: '상세보기',
            headerShown: true
          }}
          component={AccountDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
