import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Button } from 'react-native-paper';

const SeniorCareServices = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Checkbox.Item label='Respite Care' status='checked' />
                    <Checkbox.Item label='Light Housecleaning' />
                    <Checkbox.Item label='Live-In Home Care' />
                    <Checkbox.Item label='Meal Preparation' />
                    <Checkbox.Item label='Transportation' />
                    <Checkbox.Item label='Visiting Physician' />
                    <Checkbox.Item label='Visiting Nurse' />
                    <Checkbox.Item label='Home Modification' />
                    <Checkbox.Item label='Hospital Services' />
                    <Checkbox.Item label='Medical Transportation' />
                </View>
                <View style={styles.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("SeniorCareAccount")}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: .95,
        marginHorizontal: 10
    },
    nxtBtn: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0

    }
})

export default SeniorCareServices