import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import mystyle from '../../styles'
import KeyboardAvoidingComponent from '../../components/UI/KeyboardAvoiding';
import HearAboutUs from './HearAboutUs';
import { baseUrl } from '../../api';
const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hear, setHear] = useState("0")
    const hearHandleChange = (value) => {
        setHear(value)
    }

    useEffect(() => {
        url = `${baseUrl}/_Account/Reg`
        async function register() {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "Password": password,
                    "FirstName": firstName,
                    "LastName": lastName,
                    "ZipCode": zipCode,
                    "Email": email,
                    "HearAboutUsId": hear,
                    "CompanyName": "string",
                    "PhoneNumber": phoneNumber,
                    "Address": "string",
                    "AccountType": "CareGiver",
                    "CompanyType": "Individual",
                    "EducationLevelId": 0,
                    "CategoryId": 0
                })
            })
        }
        register()
    }, [])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingComponent>
                <View>
                    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                        <Text style={styles.heading}>Register</Text>
                        {/* <Text style={{ backgroundColor: "#3cb371", marginVertical: 5, height: 3, width: 100 }}></Text> */}
                        <Text style={[mystyle.grey, mystyle.ft16]}>Introduce yourself to the candidates</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="First Name" /> */}
                            <TextInput
                                mode="flat"
                                label="First Name"
                                autoCorrect={false}
                                style={styles.input}
                                onChangeText={(e) => setFirstName(e)}
                                value={firstName}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="Last Name" /> */}
                            <TextInput
                                mode="flat"
                                label="Last Name"
                                style={styles.input}
                                onChangeText={(e) => setLastName(e)}
                                value={lastName}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="Zip Code" /> */}
                            <TextInput
                                mode="flat"
                                label="Zip Code"
                                style={styles.input}
                                onChangeText={(e) => setZipCode(e)}
                                value={zipCode}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="Zip Code" /> */}
                            <TextInput
                                mode="flat"
                                label="Enter Phone Number"
                                style={styles.input}
                                onChangeText={(e) => setPhoneNumber(e)}
                                value={phoneNumber}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="Enter Email" /> */}
                            <TextInput
                                mode="flat"
                                label="Enter Email"
                                style={styles.input}
                                onChangeText={(e) => setEmail(e)}
                                value={email}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {/* <TextInputHandle label="Enter Password" entry={true} /> */}
                            <TextInput
                                mode="flat"
                                label="Enter Password"
                                style={styles.input}
                                onChangeText={(e) => setPassword(e)}
                                value={password}
                                secureTextEntry={true}
                                theme={{
                                    colors: {
                                        primary: '#4ab242',// Outline color here 
                                        placeholder: '#ccc', text: '#000',
                                        underlineColor: 'transparent', background: '#f8f8f8'
                                    }
                                }}
                            />
                        </View>
                        <View style={{ marginVertical: 10, marginHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                            <HearAboutUs hearHandleChange={hearHandleChange} />
                        </View>
                        <View style={[styles.loginBtn]}>
                            {email.length === 0 && password.length === 0 && zipCode.length === 0 && firstName.length === 0 && lastName.length === 0 ?
                                <Button mode="contained" color="#3cb371" labelStyle={{ color: "#fff" }}
                                    onPress={() => (ToastAndroid.show("Please fill complete details", ToastAndroid.SHORT))}>
                                    Register
                                </Button>
                                :
                                <Button mode="contained" color="#3cb371" labelStyle={{ color: "#fff" }}
                                    onPress={() => navigation.navigate("Jobpost")}>
                                    {/* onPress={() => navigation.navigate("HomeApp")}> */}
                                    Register
                                </Button>
                            }
                        </View>
                        <View style={styles.signUp}>
                            <Text>Already have an account ?</Text>
                            <Text onPress={() => navigation.navigate("Login")} style={{ color: "#3cb371", marginHorizontal: 10 }}>Login</Text>
                        </View>
                    </Animatable.View>
                </View>
            </KeyboardAvoidingComponent >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        position: "relative",
    },
    inputContainer: {
        borderRadius: 2,
        height: 55,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        borderRadius: 0,
        fontSize: 16,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 57,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: '800',
        color: "#000"
    },
    loginBtn: {
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 10
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center"
    },
})
export default SignUpScreen
