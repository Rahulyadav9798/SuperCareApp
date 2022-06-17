import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Button } from 'react-native-paper';
import mystyle from '../../../../styles/index'

const HousekeeperServices = ({ navigation }) => {
    return (
        <>
            <View style={mystyle.container}>
                <Checkbox.Item label='Bathroom Cleaning' status='checked' />
                <Checkbox.Item label='Kitchen Cleaning' />
                <Checkbox.Item label='General Room Cleaning' />
                <Checkbox.Item label='Bed Changing' />
                <Checkbox.Item label='Oven Cleaning' />
                <Checkbox.Item label='Refrigerator Cleaning' />
                <Checkbox.Item label='Cabinet Cleaning' />
                <Checkbox.Item label='Dishes' />
                <Checkbox.Item label='Window Washing' />
                <Checkbox.Item label='Surface Polishing' />
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("HouseKeeperAccount")}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </>
    )
}

export default HousekeeperServices
