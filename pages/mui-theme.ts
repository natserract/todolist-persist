import jss from 'jss'
import camelCase from 'jss-plugin-camel-case'

jss.use(camelCase())

const colors = {
  primary: '#0091FF',
  secondary: '#ff78a7',
  green: '#5cc2ab',
  black: '#000000',
  grey: '#eee',
  white: '#ffffff',
  textPrimary: '#666',
  textDisabled: '#acacac',
  // red: '#d50000',
  red: '#ff6b90',
  transparent: 'rgba(0, 0, 0, 0)',
}

const palette = {
  common: colors,
}

export default {
  colors,
  palette
}
