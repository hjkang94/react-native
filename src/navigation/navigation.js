import React, { useContext } from 'react'
import {
  Home,
  Profile,
  Account,
  AccountDetail,
  AccountAdd,
  Summary,
  Login,
  Web,
  Splash,
  Project
} from '@/screens'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components'
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

const Tabs = props => {
  const themeContext = useContext(ThemeContext)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={params => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: themeContext.colors.lightPrimary
        },
        tabBarIcon: ({ focused, color, size }) => {
          const name = params.route.name
          return (
            <Icon
              name={getIconName(name)}
              size={20}
              color={focused ? themeContext.colors.secondary : '#808080'}
            />
          )
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                color: focused ? themeContext.colors.secondary : '#808080'
              }}>
              {params.route.name}
            </Text>
          )
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile">
        {subProps => <Profile switchTheme={props.switchTheme} {...subProps} />}
      </Tab.Screen>
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

const MainNavigation = props => {
  const themeContext = useContext(ThemeContext)
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeContext.colors.background
    }
  }
  return (
    <NavigationContainer linking={linking} theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: '??????',
          headerStyle: {
            backgroundColor: themeContext.colors.lightPrimary
          },
          headerTintColor: themeContext.colors.secondary
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="HomeBase">
          {subProps => <Tabs switchTheme={props.switchTheme} {...subProps} />}
        </Stack.Screen>
        <Stack.Screen
          name="Account"
          options={{
            title: '??????',
            headerShown: true
          }}
          component={Account}
        />
        <Stack.Screen
          name="Summary"
          options={{
            title: '????????????',
            headerShown: true
          }}
          component={Summary}
        />
        <Stack.Screen
          name="Project"
          options={{
            title: '????????????',
            headerShown: true
          }}
          component={Project}
        />
        <Stack.Screen
          name="AccountDetail"
          options={{
            title: '?????? ????????????',
            headerShown: true
          }}
          component={AccountDetail}
        />
        <Stack.Screen
          name="AccountAdd"
          options={{
            title: '?????? ??????',
            headerShown: true
          }}
          component={AccountAdd}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
