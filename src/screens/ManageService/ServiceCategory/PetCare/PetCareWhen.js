import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from "react-native"
import { RadioButton, Button } from 'react-native-paper'
import mystyle from '../../../../styles/index'

const PetCareWhen = ({ navigation }) => {
    const [value, setValue] = React.useState('first');
    return (
        <>
            <View style={mystyle.container}>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={styles.headTxt}>Where do you need care ?</Text>
                </View>
                <View style={[mystyle.mb10, mystyle.mh5]}>
                    <TextInput style={mystyle.input} />
                </View>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item label="Immediately" value="immediately" />
                    <RadioButton.Item label="Within a week" value="week" />
                    <RadioButton.Item label="In 2-3 months" value="months" />
                    <RadioButton.Item label="Just browsing" value="browsing" />
                </RadioButton.Group>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate('PetCareServices')}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    headTxt: {
        fontSize: 18,
        color: "#394C4C",
        fontWeight: "500"
    },
    box2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    careBox: {
        width: 150,
        margin: 10,
        height: 150,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        textAlign: "center",
        // borderBottomWidth: 2,
        // borderBottomColor: "#4ab242"
    },
});

export default PetCareWhen
