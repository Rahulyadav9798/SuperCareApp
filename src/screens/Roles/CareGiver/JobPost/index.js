import React, { useEffect, useState, useMemo } from 'react'
import { View, ScrollView, Text, StyleSheet, Button, TextInput } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mystyle from '../../../../styles'
import EducationLevel from './EducationLevel';
import { baseUrl } from '../../../../api';
const JobPost = ({ navigation }) => {
    const [serviceCategory, setServiceCategory] = useState();
    const [jobTitle, setJobTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [location, setLocation] = useState("")
    const [minPay, setMinPay] = useState("")
    const [maxPay, setMaxPay] = useState("")
    const [categoryId, setCategoryId] = useState("1")
    const [educationLevelId, setEducationLevelId] = useState("1")
    console.log("categoryId", categoryId)
    useEffect(() => {
        const getServiceCategory = async () => {
            const res = await fetch(`${baseUrl}/ServiceCategory/Search`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Page": 1,
                    "Limit": 10,
                    "SortInfo": {
                        "Property": "ID",
                        "Direction": "Asc"
                    },
                    "Name": ""
                })
            })
            let data = await res.json()
            let finalData = await data.Data
            setServiceCategory(finalData)
        }
        getServiceCategory()
    }, [])

    const storeUser = async () => {
        const jobData = {
            jobTitle: jobTitle,
            desc: desc,
            location: location,
            minPay: minPay,
            maxPay: maxPay,
            categoryId: categoryId,
            educationLevelId: educationLevelId
        }
        try {
            await AsyncStorage.setItem('postData', JSON.stringify(jobData))
        } catch (e) {
            // saving error
            console.warn(e)
        }
    }
    const next = () => {
        storeUser()
        navigation.navigate("JobPostStepTwo")
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={[mystyle.ft24, mystyle.fw600, mystyle.black]}>Post Job</Text>
                <ProgressBar style={{ marginVertical: 5, height: 5 }} progress={.3} color="#3cb371" />
                <View style={mystyle.mv10}>
                    <Text style={[mystyle.mb5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Job Title</Text>
                    <TextInput style={styles.input} placeholder="Enter job title"
                        onChangeText={(text) => setJobTitle(text)} />
                    <Text style={[mystyle.mb5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Job Description</Text>
                    <TextInput style={styles.input} placeholder="Enter description"
                        onChangeText={(text) => setDesc(text)} />
                    <Text style={[mystyle.mb5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder="Enter location"
                        onChangeText={(text) => setLocation(text)} maxLength={6} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "48%" }}>
                            <Text style={[mystyle.mb5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Min. Salary</Text>
                            <TextInput style={[styles.input]} placeholder="$5"
                                onChangeText={(text) => setMinPay(text)} keyboardType="numeric" maxLength={2} />
                        </View>
                        <View style={{ width: "48%" }}>
                            <Text style={[mystyle.mb5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Max. Salary</Text>
                            <TextInput style={[styles.input]} placeholder="$10"
                                onChangeText={(text) => setMaxPay(text)} keyboardType="numeric" maxLength={4} />
                        </View>
                    </View>
                    <View style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e8" }}>
                        <Text style={[mystyle.ft16, mystyle.fw600, mystyle.black]}>Education level ?</Text>
                        <EducationLevel setEducationLevelId={setEducationLevelId} />
                    </View>
                    <Text style={[mystyle.mv5, mystyle.ft16, mystyle.fw600, mystyle.black]}>Select Category</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                        {serviceCategory && serviceCategory.map((s) => (
                            <Text key={s.ID} onPress={() => setCategoryId(s.ID)} style={[styles.ctgry, { backgroundColor: categoryId === s.ID ? "#3cb371" : "#fff", fontSize: 12, color: categoryId === s.ID ? "#fff" : "#000", borderColor: "#eee" }]}>
                                {s.Name}
                            </Text>
                        ))}
                    </View>
                </View>
                <View>
                    <Button mode="contained" color="#3cb371"
                        title='Next'
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={next}>
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#e8e8e8",
        borderRadius: 2,
        paddingHorizontal: 0,
        marginBottom: 20,
        fontSize: 16
    },
    ctgry: {
        // marginVertical: 10,
        marginTop: 10,
        // marginBottom: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        borderWidth: 1,
    },

})
export default JobPost
