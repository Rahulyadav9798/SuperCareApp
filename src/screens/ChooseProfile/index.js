import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

const ChooseProfile = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View> */}

            <View style={styles.header}>
                <Text style={styles.logTxt}>SuperCare</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "#fff"
                }]}
            >
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <MaterialCommunityIcons name="tooltip-account" size={40} color="#3cb371" />
                    <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 16, fontWeight: "bold" }}>What are you looking for ?</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                        style={[styles.signIn]}>
                        <MaterialCommunityIcons name="briefcase-search" size={40} color="#3cb371" />
                        <Text style={[styles.textSign]}>I want a job</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.signIn]}>
                        <FontAwesome5 name="hand-holding-heart" size={35} color="#3cb371" />
                        <Text style={[styles.textSign]}>I want a caregiver</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#009387'
    },
    logTxt: {
        textAlign: "center",
        fontSize: 48,
        color: "#3cb371",
        textShadowColor: 'black',
        // textShadowOffset: { width: -1, height: 0 },
        // textShadowRadius: 10,
        fontWeight: '800',
        // marginBottom: 100,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        // backgroundColor: "rgba(74, 178, 66, .1)"
    },
    footer: {
        flex: .8,
        backgroundColor: '#DDDDDD',
        // marginTop: -30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 30,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 40,
        elevation: 5,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    button: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f9f9f9",
        borderRadius: 20,
        elevation: 1
    },
    textSign: {
        // fontSize: 16,
        // fontWeight: 'bold'
    }
});
export default ChooseProfile
