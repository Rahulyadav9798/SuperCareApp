import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Button, Avatar,
    Title,
    Caption,
} from 'react-native-paper';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../../components/Header';
import Loader from '../../../../components/Loader/Loader';

const CareGiverProfile = ({ navigation }) => {
    const [profileData, setProfileData] = useState()
    // useEffect(() => {
    //     async function getJobDetails() {
    //         const token = await AsyncStorage.getItem('token')
    //         // const res = await fetch(`http://daycare.uveoustech.com/api/Jobs/${JobId}`, {
    //         const res = await fetch(`http://daycare.uveoustech.com/api/Caregiver/GetProfie?id=7`, {
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             },
    //         })
    //         let data = await res.json()
    //         let finalData = data
    //         console.log(finalData)
    //         setProfileData(finalData)
    //     }
    //     getJobDetails()
    // }, [])
    return (
        <>
            <Header title="Profile" navigation={navigation} />
            {/* {profileData && profileData ? */}
            <View style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Avatar.Image

                            source={{
                                uri: 'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg'
                            }}
                            size={90}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            {/* <Title style={styles.title}>{profileData.User.Name}</Title> */}
                            <Title style={styles.title}>Abhay Raj</Title>
                            {/* <Caption style={styles.caption}>{profileData.City}</Caption> */}
                            <Caption style={styles.caption}>Noida</Caption>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
                    <View style={{ marginBottom: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Zocial name='email' size={20} />
                            <Text style={{ marginLeft: 10 }}>Email</Text>
                        </View>
                        <Text style={{ color: "#3c4043", lineHeight: 30, paddingLeft: 30, fontSize: 16 }}>rajabhay@gmail.com</Text>
                    </View>
                    <View style={{ marginBottom: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Entypo name='mobile' size={20} />
                            <Text style={{ marginLeft: 10 }}>Mobile</Text>
                        </View>
                        <Text style={{ color: "#3c4043", lineHeight: 30, paddingLeft: 30, fontSize: 16 }}>8398022977</Text>
                    </View>
                    <View style={{ marginBottom: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Entypo name='location-pin' size={20} />
                            <Text style={{ marginLeft: 10 }}>Zip code</Text>
                        </View>
                        <Text style={{ color: "#3c4043", lineHeight: 30, paddingLeft: 30, fontSize: 16 }}>201301</Text>
                    </View>
                    {/* <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>First Name</Text>
                        <TextInput style={styles.input} editable={false} value={profileData.FirstName} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Last Name</Text>
                        <TextInput style={styles.input} editable={false} value={profileData.FirstName} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput style={styles.input} editable={false} value={profileData.Phone} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Zip Code</Text>
                        <TextInput style={styles.input} editable={false} value={profileData.ZipCode} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput style={styles.input} editable={false} value={profileData.Email} />
                    </View> */}

                </View>

                {/* <View style={[styles.loginBtn]}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("HomeApp")}>
                        Confirm
                    </Button>
                </View> */}
            </View>
            {/* :
                <Loader />
            } */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    userInfoSection: {
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#c8c8c8",
        backgroundColor: "#4ab242",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "capitalize",
        color: "#f8f8f8",
        margin: 0,
        textAlign: "center"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        textAlign: "center",
        color: "#f8f8f8"
    },
    input: {
        // borderRadius: 27,
        height: 44,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#eee"

    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    logTxt: {
        textAlign: "center",
        fontSize: 36,
        color: "#4ab242",
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,
        fontWeight: '800',
        marginVertical: 30
    },

    loginBtn: {
        marginHorizontal: 10,
        // marginTop: 30,
        marginBottom: 10
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center"

    },
    bg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1
        // resizeMode: "contain"
        // alignSelf: "center",
        // borderRadius: 10,
        // marginRight: 20
        // borderRadius:20,
        // marginVertical:10
    },
})
export default CareGiverProfile
