import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { ProgressBar, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import mystyle from '../../../../styles/index'

const StepTwo = ({ navigation }) => {
    const [serviceSubCategory, setServiceSubCategory] = useState();
    const [needReason, setNeedReason] = useState();
    const [needReasonValue, setNeedReasonValue] = useState("8")
    const [subCategoryId, setSubCategoryId] = useState("1")
    const [neededs, setNeededs] = useState("1")
    const [jobOccur, setJobOccur] = React.useState('0')
    const needed = [{ id: "1", Text: "Immediately" }, { id: "2", Text: "Within Days" }, { id: "3", Text: "Within Weeks" }, { id: "4", Text: "Within Months" }, { id: "5", Text: "Not Sure" }]
    console.log(needReasonValue)

    useEffect(() => {
        const getPostData = async () => {
            try {
                const postData = await AsyncStorage.getItem('postData')
                const job = await JSON.parse(postData)
                console.log(job)
            } catch (e) {
                // saving error
                console.warn(e)
            }
        }
        getPostData()
    }, [])
    useEffect(() => {
        const getServiceCategory = async () => {
            const res = await fetch("http://daycare.uveoustech.com/api/ServiceSubCategory/Search", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Page": 1,
                    "Limit": 10,
                    "SortInfo": {
                        "Property": "Name",
                        "Direction": "Asc"
                    },
                    "Name": "",
                    "CategoryId": 1
                })
            })
            let data = await res.json()
            let finalData = await data.Data
            setServiceSubCategory(finalData)
        }
        getServiceCategory()
    }, [])
    useEffect(() => {
        const getNeedReason = async () => {
            const res = await fetch("http://daycare.uveoustech.com/api/Jobs/GetJobNeedReason", {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await res.json()
            // let finalData = await data.Data
            console.log("dataaaaaaa", data)
            setNeedReason(data)
        }
        getNeedReason()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={[mystyle.ft24, mystyle.fw600, mystyle.mt20, mystyle.black]}>One Last Step</Text>
                <ProgressBar style={{ marginVertical: 5, height: 5 }} progress={.6} color="#3cb371" />
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>When do you need care ?</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                    {needed.map((s) => (
                        <Text key={s.id} onPress={() => setNeededs(s.id)} style={{ backgroundColor: neededs === s.id ? "#3cb371" : "#fff", marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: neededs === s.id ? "#fff" : "#000" }}>
                            {s.Text}
                        </Text>
                    ))}
                </View>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>How often will this job occur?</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                    <Text onPress={() => setJobOccur("0")} style={{ backgroundColor: jobOccur === "0" ? "#3cb371" : "#fff", color: "#fff", marginTop: 5, marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: jobOccur === "0" ? "#fff" : "#000" }}>
                        Regularly Scheduled
                    </Text>
                    <Text onPress={() => setJobOccur("1")} style={{ backgroundColor: jobOccur === "1" ? "#3cb371" : "#fff", color: "#fff", marginTop: 5, marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: jobOccur === "1" ? "#fff" : "#000" }}>
                        Occasionaly/One-time
                    </Text>
                </View>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Type of caregiver needed:</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {serviceSubCategory && serviceSubCategory.map((s) => (
                        <Text key={s.ID} onPress={() => setSubCategoryId(s.ID)} style={[styles.ctgry, { backgroundColor: subCategoryId === s.ID ? "#3cb371" : "#fff", color: subCategoryId === s.ID ? "#fff" : "#000", borderColor: "#eee" }]}>
                            {s.Name}
                        </Text>
                    ))}
                </View>
                <View style={[mystyle.mv10, mystyle.mh5]}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>I need you</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {needReason && needReason.map((s) => (
                        <Text key={s.Value} onPress={() => setNeedReasonValue(s.Value)} style={[styles.ctgry, { backgroundColor: needReasonValue === s.Value ? "#3cb371" : "#fff", color: needReasonValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
                            {s.Text}
                        </Text>
                    ))}
                </View>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text>Next</Text>
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    },
    headTxt: {
        width: 100,
        borderTopWidth: 3,
        borderTopColor: "#3cb371",
    },
    box2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    ctgry: {
        marginTop: 5,
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        borderWidth: 1,
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

export default StepTwo
