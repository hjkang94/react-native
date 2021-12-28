import React from 'react'
import {
  Home,
  Profile,
  Account,
  AccountDetail,
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
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={params => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: props.theme.colors.lightPrimary
        },
        tabBarIcon: ({ focused, color, size }) => {
          const name = params.route.name
          return (
            <Icon
              name={getIconName(name)}
              size={20}
              color={focused ? props.theme.colors.secondary : '#808080'}
            />
          )
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                color: focused ? props.theme.colors.secondary : '#808080'
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
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: props.theme.colors.background
    }
  }
  return (
    <NavigationContainer linking={linking} theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: '뒤로',
          headerStyle: {
            backgroundColor: props.theme.colors.lightPrimary
          },
          headerTintColor: props.theme.colors.secondary
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="HomeBase">
          {subProps => (
            <Tabs
              switchTheme={props.switchTheme}
              theme={props.theme}
              {...subProps}
            />
          )}
        </Stack.Screen>
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
          name="Project"
          options={{
            title: '프로젝트',
            headerShown: true
          }}
          component={Project}
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
