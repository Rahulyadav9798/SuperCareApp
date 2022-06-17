import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from "react-native"
import { RadioButton, Button } from 'react-native-paper'
import mystyle from '../../../../styles/index'

const TutoringLevel = ({ navigation }) => {
    const [value, setValue] = React.useState('first');
    return (
        <>
            <View style={mystyle.container}>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={styles.headTxt}>What level is this for?</Text>
                </View>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item label="Adult" value="Adult" />
                    <RadioButton.Item label="College" value="College" />
                    <RadioButton.Item label="High School" value="High" />
                    <RadioButton.Item label="Elementry School" value="Elementry" />
                </RadioButton.Group>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={[styles.headTxt ,styles.headTxt2]}>Do you prefer in person or online tutoring?</Text>
                </View>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item label="Online" value="Online" />
                    <RadioButton.Item label="In Person" value="Person" />
                    <RadioButton.Item label="Either" value="Either" />
                </RadioButton.Group>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate('TutoringAccount')}
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
        fontWeight:"500"
    },
    headTxt2:{
        lineHeight:30
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

export default TutoringLevel
