import React from 'react'
import { View, Text, TextInput } from 'react-native'
import mystyle from '../../../../styles/index'
import {
    Button
} from 'react-native-paper'


const HousekeeperAccount = ({ navigation }) => {
    return (
        <View style={mystyle.container}>
            <View style={[mystyle.mv10, mystyle.mh5]}>
                <Text style={mystyle.mv10}>First name</Text>
                <TextInput style={mystyle.input} />
            </View>
            <View style={[mystyle.mb10, mystyle.mh5]}>
                <Text style={mystyle.mv10}>Last name</Text>
                <TextInput style={mystyle.input} />
            </View>
            <View style={[mystyle.mb10, mystyle.mh5]}>
                <Text style={mystyle.mv10}>Email address</Text>
                <TextInput style={mystyle.input} />
            </View>
            <View style={[mystyle.mb10, mystyle.mh5]}>
                <Text style={mystyle.mv10}>Password</Text>
                <TextInput style={mystyle.input} />
            </View>
            <View style={mystyle.nxtBtn}>
                <Button mode="contained" color="#3cb371"
                    labelStyle={{
                        color: "#fff"
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    Next
                </Button>
            </View>
        </View>
    )
}

export default HousekeeperAccount
