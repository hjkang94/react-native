import React from 'react'
import { Home, Profile, Account, Summary, Login, Web, Splash } from '@/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native'

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

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                name={'ios-home'}
                size={20}
                color={focused ? '#1687A7' : '#808080'}
              />
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#1687A7' : '#808080'
                }}>
                Home
              </Text>
            )
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                name={'ios-settings'}
                size={20}
                color={focused ? '#1687A7' : '#808080'}
              />
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#1687A7' : '#808080'
                }}>
                Profile
              </Text>
            )
          }
        }}
      />
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
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={Auth}
        />
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        <Stack.Screen
          name="Account"
          options={{
            title: '계정',
            headerShown: true,
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#D3E0EA'
            },
            headerTintColor: '#276678'
          }}
          component={Account}
        />
        <Stack.Screen
          name="Summary"
          options={{
            title: '계정요약',
            headerShown: true,
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#D3E0EA'
            },
            headerTintColor: '#276678'
          }}
          component={Summary}
        />
        <Stack.Screen
          name="Web"
          options={{ headerShown: true, headerBackTitle: '' }}
          component={Web}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
