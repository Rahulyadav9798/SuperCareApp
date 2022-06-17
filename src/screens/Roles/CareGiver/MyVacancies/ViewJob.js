import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../../../components/Header';
import Loader from '../../../../components/Loader/Loader';
import { baseUrl } from '../../../../api';

const ViewJob = ({ route, navigation }) => {
    const { JobId } = route.params;
    const [jobDetails, setJobDetails] = useState([])
    useEffect(() => {
        async function getJobDetails() {
            const token = await AsyncStorage.getItem('token')
            const res = await fetch(`${baseUrl}/Jobs/${JobId}`, {
                // const res = await fetch(`http://daycare.uveoustech.com/api/Jobs/211`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            let data = await res.json()
            let finalData = data.Entity

            setJobDetails(finalData)
        }
        getJobDetails()
    }, [])
    return (
        <>
            <Header title="Description" navigation={navigation} />
            <View style={style.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {jobDetails != "" ?
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: "#3c4043", textTransform: "capitalize", fontSize: 24, fontWeight: "bold" }}>{jobDetails.JobTitle}</Text>
                            <Text style={{ fontSize: 16, lineHeight: 23, color: "gray", textTransform: "capitalize" }}>{jobDetails.PostedBy.CompanyName}</Text>
                            <Text style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", paddingBottom: 10, color: "#3c4043", textAlign: "left", fontSize: 16, textTransform: "capitalize" }}><Entypo name="location-pin" color="green" size={15} />{jobDetails.PostedBy.City}</Text>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Description</Text>
                                {/* <Text style={{ lineHeight: 25 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> */}
                                <Text>{jobDetails.Description}</Text>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Minimum Education Level</Text>
                                <Text style={{ lineHeight: 25 }}>{jobDetails.EducationLevel.Name}</Text>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Pay Type</Text>
                                <Text>${parseInt(jobDetails.MinPayRate) + "-" + parseInt(jobDetails.MaxPayRate)}/hour</Text>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Schedule Type</Text>
                                <Text>{jobDetails.JobOccurs}</Text>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Job Type</Text>
                                <Text>{jobDetails.Category.Name}</Text>
                            </View>

                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Job Start Date</Text>
                                <Text style={{ lineHeight: 25 }}>{jobDetails.CreateTime}</Text>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ letterSpacing: .5, color: "#3c4043", lineHeight: 30, fontWeight: "bold", fontSize: 16 }}>Expiry Date</Text>
                                <Text style={{ lineHeight: 25 }}>{jobDetails.ExpiringDate}</Text>
                            </View>
                            {/* <Text style={{ textTransform: "capitalize" }}>{jobDetails.PostedBy.City}<Entypo name="location-pin" color="green" size={15} /></Text> */}
                            {/* <Text style={{ fontSize: 14 }}>Min. ${jobDetails.MinPayRate}</Text>
                            <Text style={{ fontSize: 14 }}>Max. ${jobDetails.MaxPayRate}</Text>
                            <Text style={{ fontSize: 14 }}>Expiry Date: {jobDetails.ExpiringDate}</Text> */}
                        </View>
                        :
                        <Loader />
                    }
                </ScrollView>
            </View>

        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
export default ViewJob
