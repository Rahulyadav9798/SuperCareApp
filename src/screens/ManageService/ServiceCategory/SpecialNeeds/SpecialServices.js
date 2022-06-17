import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Button } from 'react-native-paper';
import mystyle from '../../../../styles/index'

const SpecialServices = ({ navigation }) => {
    return (
        <>
            <View style={mystyle.container}>
                <Checkbox.Item label='Ambulation' status='checked' />
                <Checkbox.Item label='Assistive Technology/AAC' />
                <Checkbox.Item label='Bathing/Grooming/Hygiene' />
                <Checkbox.Item label='Bed Baths' />
                <Checkbox.Item label='Behavior - Applied Behavior Analysis' />
                <Checkbox.Item label='Behavior - Positive Behavioral Support' />
                <Checkbox.Item label='Bladder Management Assistance' />
                <Checkbox.Item label='Blood Sugar Testing' />
                <Checkbox.Item label='Bowel Management Assistance' />
                <Checkbox.Item label='Brushing Protoco' />
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("SpecialAccount")}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </>
    )
}

export default SpecialServices
