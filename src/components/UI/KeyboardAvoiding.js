import React from 'react'
import { View, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from 'react-native'

const KeyboardAvoidingComponent = ({ children }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingComponent
