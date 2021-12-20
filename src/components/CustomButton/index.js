import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

export default class CustomButton extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#1687A7',
    titleColor: '#fff',
    width: 100,
    height: 60,
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
            backgroundColor: this.props.buttonColor,
            width: this.props.width,
            height: this.props.height
          }
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.text, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
