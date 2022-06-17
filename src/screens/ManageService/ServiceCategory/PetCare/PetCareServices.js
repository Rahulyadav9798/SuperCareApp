import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Button } from 'react-native-paper';
import mystyle from '../../../../styles/index'

const PetCareServices = ({ navigation }) => {
    return (
        <>
            <View style={mystyle.container}>
                <Checkbox.Item label='Pet Sitting/walking' status='checked' />
                <Checkbox.Item label='Pet Transportation' />
                <Checkbox.Item label='Grooming' />
                <Checkbox.Item label='Daily Feeding' />
                <Checkbox.Item label='Overnight Sitting' />
                <Checkbox.Item label='Administration of Medicine' />
                <Checkbox.Item label='Dog Training' />
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("PetCareAccount")}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </>
    )
}

export default PetCareServices
