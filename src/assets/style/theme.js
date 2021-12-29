const margins = {
  sm: '5px',
  base: '10px',
  lg: '20px',
  xl: '30px'
}

const paddings = {
  sm: '5px',
  base: '10px',
  lg: '20px',
  xl: '30px'
}

const fonts = {
  family: {
    base: "'Noto Sans KR', sans-serif",
    title: "'Merriweather', serif"
  },
  size: {
    sm: '13px',
    base: '15px',
    lg: '18px',
    xl: '22px'
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700
  }
}

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px'
}

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`
}

const colors = {
  subText: '#848484',
  lightGray: '#DDD'
}

const lightThemeColors = {
  ...colors,
  primary: '#8675A9',
  secondary: '#424874',
  lightPrimary: '#DCD6F7',
  danger: '#f66',
  background: '#f8f8ff',
  text: 'black',
  base: 'white'
}

const darkThemeColors = {
  ...colors,
  primary: '#5F85DB',
  secondary: '#7B6CF6',
  lightPrimary: '#202124',
  danger: '#FF4C29',
  background: '#262833',
  text: '#f8f8ff',
  base: 'black'
}

// 테마와 관련없이 공통으로 사용되는 변수
const defalutTheme = {
  margins,
  paddings,
  fonts,
  device
}

export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors
}

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors
}
