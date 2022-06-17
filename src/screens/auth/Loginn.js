import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from '../../redux/actions/userActions';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [emailValidError, setEmailValidError] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigation.navigate('HomeApp')
        }
    }, [dispatch, error, navigate, isAuthenticated])

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (val.length === 0) {
            setEmailValidError('');
        } else if (reg.test(val) === false) {
            setEmailValidError('Enter valid email address');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };
    const PasswordValidEmail = val => {
        if (val.length < 6) {
            setPasswordValidError('Password must be more than 6 characters');
        } else if (val.length > 0) {
            setPasswordValidError("")
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logTxt}>SuperCare</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                    <Text style={{ color: "#000", fontWeight: "400", marginRight: 1 }}>Email</Text>
                    <Text style={{ fontWeight: "bold", color: "#ff0000" }}>*</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={value => {
                            setEmail(value);
                            // handleValidEmail(value)
                        }}
                        onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
                        // left={<TextInput.Icon name="account" color="#3AC9A3" />}
                        value={email}
                        theme={{
                            colors: {
                                primary: '#4ab242',// Outline color here
                                placeholder: '#c8c8c8', text: '#696969',
                                // underlineColor: 'transparent', background: '#f8f8f8'
                            }
                        }}
                    />
                </View>
                <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
                    {emailValidError ? <Text style={{ marginTop: 2, textAlign: "left", color: "red" }}>{emailValidError}</Text> : null}
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ color: "#000", fontWeight: "400" }}>Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode="flat"
                        placeholder="Password"
                        style={styles.input}
                        onChangeText={(text) => SetPassword(text)}
                        value={password}
                        // error={true}
                        onEndEditing={e => PasswordValidEmail(e.nativeEvent.text)}
                        secureTextEntry={passwordVisible}
                        right={<TextInput.Icon color="#3AC9A3" name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                        theme={{
                            colors: {
                                primary: '#4ab242',// Outline color here
                                placeholder: '#c8c8c8', text: '#696969',
                                underlineColor: 'transparent', background: '#f8f8f8'
                            }
                        }}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {passwordValidError ? <Text style={{ marginTop: 2, textAlign: "left", color: "red" }}>{passwordValidError}</Text> : null}
                </View>
            </View>

            <View style={[styles.loginBtn]}>
                {email.length === 0 && password.length === 0 ?
                    <Button mode="contained" color="#3cb371" labelStyle={{ color: "#fff" }}
                        style={{ height: 50, justifyContent: "center" }} onPress={() => (ToastAndroid.show("Please fill complete details", ToastAndroid.SHORT))}>
                        <Text> Login</Text>
                    </Button>
                    :
                    <Button mode="contained" color="#3cb371" labelStyle={{ color: "#fff" }}
                        style={{ height: 50, justifyContent: "center" }}
                        // onPress={() => navigation.navigate("SignUp")}>
                        onPress={onSubmit}>
                        <Text> Login</Text>
                    </Button>
                }
            </View>
            <View style={styles.signUp}>
                <Text>Don't have an account ?</Text>
                <Text onPress={() => navigation.navigate("ChooseProfile")} style={{ color: "#3cb371", marginHorizontal: 10 }}>Sign Up</Text>
            </View>
            <Text style={styles.forget}>Forgot Password ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        position: "relative",
    },
    inputContainer: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ccc",
        height: 55,
        overflow: 'hidden',
        marginTop: 10,
        justifyContent: "center"
    },
    input: {
        borderRadius: 0,
        paddingHorizontal: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        fontSize: 18,
        height: 58,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    logTxt: {
        textAlign: "center",
        fontSize: 48,
        color: "#3cb371",
        fontWeight: '800',
        marginBottom: 100,
    },
    loginBtn: {
        borderRadius: 100,
        overflow: "hidden",
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10
    },
    forget: {
        textAlign: "center",
        color: "#3cb371"
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20

    }
})
export default LoginScreen
