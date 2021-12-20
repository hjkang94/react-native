import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'

export default class IconButton extends Component {
  static defaultProps = {
    title: 'untitled',
    icon: 'alert-circle',
    borderColor: '#1687A7',
    backColor: '#FFF',
    titleColor: '#1687A7',
    width: 100,
    height: 100,
    onPress: () => null
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderColor: this.props.borderColor,
            backgroundColor: this.props.backColor,
            width: this.props.width,
            height: this.props.height
          }
        ]}
        onPress={this.props.onPress}>
        <Icon name={this.props.icon} size={30} color={this.props.borderColor} />
        <Text style={[styles.text, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
