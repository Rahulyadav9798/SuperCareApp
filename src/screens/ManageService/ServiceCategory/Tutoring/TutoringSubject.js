import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Button } from 'react-native-paper';

const TutoringSubjects = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Checkbox.Item label='Art' status='checked' />
                    <Checkbox.Item label='Business' />
                    <Checkbox.Item label='Computers' />
                    <Checkbox.Item label='Cooking & Sewing' />
                    <Checkbox.Item label='Dance' />
                    <Checkbox.Item label='Driving' />
                    <Checkbox.Item label='English' />
                    <Checkbox.Item label='Foreign Language' />
                    <Checkbox.Item label='Math' />
                </View>
                <View style={styles.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("TutoringLevel")}
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

export default TutoringSubjects
