import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper';

const TextInputHandle = (props) => {
  const [text, onChangeText] = useState("")
  return (
    <TextInput
      mode="flat"
      label={props.label}
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      secureTextEntry={props.entry}
      theme={{
        colors: {
          primary: '#4ab242',// Outline color here
          placeholder: '#c8c8c8', text: '#000',
          underlineColor: 'transparent', background: '#f8f8f8'
        }
      }}
    />
  )
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    fontSize: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 57,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
})
export default TextInputHandle
