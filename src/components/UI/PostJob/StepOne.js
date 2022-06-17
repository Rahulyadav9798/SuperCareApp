import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, StyleSheet, Button, TextInput } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mystyle from '../../../../styles'

const StepOne = ({ navigation }) => {
    const [serviceCategory, setServiceCategory] = useState();
    const [jobTitle, setJobTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [location, setLocation] = useState("")
    const [minPay, setMinPay] = useState("")
    const [maxPay, setMaxPay] = useState("")
    const [categoryId, setCategoryId] = useState("1")
    console.log(jobTitle)
    useEffect(() => {
        const getServiceCategory = async () => {
            const res = await fetch("http://daycare.uveoustech.com/api/ServiceCategory/Search", {
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
            categoryId: categoryId
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
                <Text style={[mystyle.ft24, mystyle.fw600, mystyle.mt20, mystyle.black]}>Post Job</Text>
                <ProgressBar style={{ marginVertical: 5, height: 5 }} progress={.3} color="#3cb371" />
                <View style={mystyle.mv10}>
                    <Text style={[mystyle.mb15, mystyle.fw600]}>Job Title</Text>
                    <TextInput style={styles.input} placeholder="Enter job title"
                        onChangeText={(text) => setJobTitle(text)} />
                    <Text style={[mystyle.mb15, mystyle.fw600]}>Job Description</Text>
                    <TextInput style={styles.input} placeholder="Enter description"
                        onChangeText={(text) => setDesc(text)} />
                    <Text style={[mystyle.mb15, mystyle.fw600]}>Location</Text>
                    <TextInput style={styles.input} placeholder="Enter location"
                        onChangeText={(text) => setLocation(text)} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "48%" }}>
                            <Text style={[mystyle.mb15, mystyle.fw600]}>Min. Salary</Text>
                            <TextInput style={[styles.input]} placeholder="$5"
                                onChangeText={(text) => setMinPay(text)} keyboardType="numeric" />
                        </View>
                        <View style={{ width: "48%" }}>
                            <Text style={[mystyle.mb15, mystyle.fw600]}>Max. Salary</Text>
                            <TextInput style={[styles.input]} placeholder="$10"
                                onChangeText={(text) => setMaxPay(text)} keyboardType="numeric" />
                        </View>
                    </View>
                    <Text style={[mystyle.mb5, mystyle.fw600]}>Select Category</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                        {serviceCategory && serviceCategory.map((s) => (
                            <Text key={s.ID} onPress={() => setCategoryId(s.ID)} style={[styles.ctgry, { backgroundColor: categoryId === s.ID ? "#3cb371" : "#fff", color: categoryId === s.ID ? "#fff" : "#000", borderColor: "#eee" }]}>
                                {s.Name}
                            </Text>
                        ))}

                    </View>
                </View>
                <View style={[styles.loginBtn]}>
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
        marginVertical: 20,
        marginHorizontal: 10
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        borderRadius: 2,
        paddingHorizontal: 0,
        marginBottom: 20,
    },
    ctgry: {
        marginVertical: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        borderWidth: 1,
    },
    loginBtn: {
        // marginTop: 30,
        marginBottom: 10,
    },

})
export default StepOne
