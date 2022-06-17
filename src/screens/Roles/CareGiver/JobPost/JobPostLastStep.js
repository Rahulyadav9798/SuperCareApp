import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { ProgressBar, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker'
import mystyle from '../../../../styles/index'
import ChildrenCount from './ChildrenCount';
import Entypo from 'react-native-vector-icons/Entypo';
import { baseUrl } from '../../../../api';
import AddtionalService from './JobPostApi/AdditionalService';
import SeniorCareServices from './JobPostApi/SeniorCareServices';
import PetTypes from './JobPostApi/PetTypes';

const JobPostLastStep = ({ navigation }) => {
    const [stepOneData, setStepOneData] = useState()
    const [needReason, setNeedReason] = useState();
    const [needReasonValue, setNeedReasonValue] = useState("0")
    const [zeroTo6Month, setZeroto6Month] = useState("0");
    const [sevenTo3Years, setSevento3Years] = useState("0");
    const [fourTo6Years, setFourto6Years] = useState("0");
    const [sevenTo11Years, setSevenTo11Years] = useState("0");
    const [infant, setInfant] = useState(true)
    const [adult, setAdult] = useState(false)
    const [youth, setYouth] = useState(false)
    const [senior, setSenior] = useState(false)
    const [teen, setTeen] = useState(false)
    const [tweleveMore, setTweleveMore] = useState("0");
    const [seniorAgeValue, setSeniorAgeValue] = useState("0")
    const [seniorRelationValue, setRelationValue] = useState("0")
    const [expDate, setExpDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [additionalReq, setAdditionalReq] = useState()
    let expiryDate = `${expDate.getDate()}/${expDate.getMonth() + 1}/${expDate.getFullYear()}`
    const seniorAge = [{ id: "0", Text: "30s" }, { id: "1", Text: "40s" }, { id: "2", Text: "50s" }, { id: "3", Text: "60s" }]
    const seniorRelation = [{ id: "0", Text: "Mother" }, { id: "1", Text: "Father" }, { id: "2", Text: "Husband" }, { id: "3", Text: "Wife" }, { id: "4", Text: "Self" }]
    const zeroTo6MonthHandleChange = (e) => {
        setZeroto6Month(e)
    }
    const sevenTo3YearsHandleChange = (e) => {
        setSevento3Years(e)
    }
    const fourTo6YearsHandleChange = (e) => {
        setFourto6Years(e)
    }
    const sevenTo11YearsHandleChange = (e) => {
        setSevenTo11Years(e)
    }
    const tweleveMoreHandleChange = (e) => {
        setTweleveMore(e)
    }
    useEffect(() => {
        const getPostData = async () => {
            try {
                const postData = await AsyncStorage.getItem('postData')
                const job = await JSON.parse(postData)
                setStepOneData(job)
            } catch (e) {
                // saving error
                console.warn(e)
            }
        }
        getPostData()
    }, [])

    useEffect(() => {
        const getNeedReason = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobNeedReason`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await res.json()
            setNeedReason(data)
        }
        getNeedReason()
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault()
        const token = await AsyncStorage.getItem('token')
        const user = await AsyncStorage.getItem('user')
        const userData = await JSON.parse(user)
        const stepOneData = await AsyncStorage.getItem('postData')
        const stepOne = await JSON.parse(stepOneData)
        const stepTwoData = await AsyncStorage.getItem('postDataTwo')
        const stepTwo = await JSON.parse(stepTwoData)
        console.log("stepOne", stepOneData)
        console.log("stepTwoData", stepTwoData)
        await fetch(`${baseUrl}/Jobs/Add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "Entity": {
                    // "CategoryId": stepOne.categoryId,
                    // "PersonId": userData.Attributes.PesonId,
                    "CategoryId": 1,
                    "PersonId": 7,
                    "Schedule": {
                        "ScheduleDetails": [
                            {
                                "Available": "0",
                                "Sun": true,
                                "Mon": true,
                                "Tue": true,
                                "Wed": true,
                                "Thu": true,
                                "Fri": true,
                                "Sat": true,
                            }
                        ]
                    },
                    "JobTitle": stepOne.jobTitle,
                    "Description": stepOne.desc,
                    "JobOccurs": stepOne.jobOccur,
                    "CareNeededs": stepTwo.whenNeed,
                    "ZeroToSixMonths": "0",
                    "SevenToThreeYears": "9",
                    "FourToSixYears": "0",
                    "SevenYearToElevenYears": "0",
                    "TwelveAboveYears": "1",
                    "EducationLevelId": stepOne.educationLevelId,
                    "ZipCode": stepOne.location,
                    "CareGiverNeededs": stepTwo.subCategoryId,
                    "MinPayRate": stepOne.minPay,
                    "MaxPayRate": stepOne.maxPay,
                    "ExpiringDate": "2022-06-16T12:04:01.613Z",
                    // expDate,
                    "JobStatus": "Open",
                    "SelectedJobAdditionals": [
                        // additionalReq
                        0
                    ],
                    "SelectedKidsLoves": [
                        // stepTwoData.kidslove
                        0
                    ],
                    "SelectedNeedReasons": [
                        // needReasonValue
                        0
                    ],
                }
                // "Entity": {
                //     "CategoryId": 1,
                //     "PersonId": 7,
                //     "JobTitle": "need a babysitter",
                //     "Description": "need a babysitter",
                //     "JobOccurs": "0",
                //     "CareNeededs": "0",
                //     "ZeroToSixMonths": "0",
                //     "SevenToThreeYears": "0",
                //     "FourToSixYears": "0",
                //     "SevenYearToElevenYears": "0",
                //     "TwelveAboveYears": "1",
                //     "EducationLevelId": 1,

                //     "ZipCode": "20302",
                //     "CareGiverNeededs": "0",

                //     "MinPayRate": 40,
                //     "MaxPayRate": 80,

                //     "ExpiringDate": "2022-07-16T12:04:01.613Z",
                //     "JobStatus": "Open",
                //     "Schedule": {

                //       "JobScheduleDetails": [
                //         {
                //           "ID": 0,

                //           "Available": "0",
                //           "Sun": true,
                //           "Mon": true,
                //           "Tue": true,
                //           "Wed": true,
                //           "Thu": true,
                //           "Fri": true,
                //           "Sat": true
                //         }
                //       ]
                //     },
                //   "SelectedJobAdditionals": [
                //     0
                //   ],

                //   "SelectedKidsLoves": [
                //     0
                //   ],
                //   "SelectedNeedReasons": [
                //     0
                //   ]

                // }
            })

        }).then(response => {
            console.log(response)

        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={[mystyle.ft24, mystyle.fw600, mystyle.black]}>Last Step</Text>
                <ProgressBar style={{ marginVertical: 5, height: 5 }} progress={1} color="#3cb371" />
                <View style={mystyle.mv10}>
                    {stepOneData && stepOneData.categoryId === "1" ?
                        <>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: '#3c4043' }}>Number of children</Text>
                            </View>
                            <ChildrenCount zeroTo6MonthHandleChange={zeroTo6MonthHandleChange} sevenTo3YearsHandleChange={sevenTo3YearsHandleChange} fourTo6YearsHandleChange={fourTo6YearsHandleChange} sevenTo11YearsHandleChange={sevenTo11YearsHandleChange} tweleveMoreHandleChange={tweleveMoreHandleChange} />
                            <View style={[mystyle.mv10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: '#3c4043' }}>I need you</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {needReason && needReason.map((s) => (
                                    <Text key={s.Value} onPress={() => setNeedReasonValue(s.Value)} style={[styles.ctgry, { backgroundColor: needReasonValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: needReasonValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
                                        {s.Text}
                                    </Text>
                                ))}
                            </View>
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "2" ?
                        <>
                            <View style={[mystyle.mb10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Age of Care Recipients</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                <Text onPress={() => setInfant(!infant)} style={[styles.ctgry, { backgroundColor: infant === true ? "#3cb371" : "#fff", fontSize: 12, color: infant === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                                    Infant
                                </Text>
                                <Text onPress={() => setAdult(!adult)} style={[styles.ctgry, { backgroundColor: adult === true ? "#3cb371" : "#fff", fontSize: 12, color: adult === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                                    Adult
                                </Text>
                                <Text onPress={() => setYouth(!youth)} style={[styles.ctgry, { backgroundColor: youth === true ? "#3cb371" : "#fff", fontSize: 12, color: youth === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                                    Youth
                                </Text>
                                <Text onPress={() => setSenior(!senior)} style={[styles.ctgry, { backgroundColor: senior === true ? "#3cb371" : "#fff", fontSize: 12, color: senior === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                                    Senior
                                </Text>
                                <Text onPress={() => setTeen(!teen)} style={[styles.ctgry, { backgroundColor: teen === true ? "#3cb371" : "#fff", fontSize: 12, color: teen === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                                    Teen
                                </Text>
                            </View>
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "5" ?
                        <>
                            <View style={[mystyle.mv10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: '#3c4043' }}>The person who needs care is in his / her</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {seniorAge.map((s) => (
                                    <Text key={s.id} onPress={() => setSeniorAgeValue(s.id)} style={[styles.ctgry, { backgroundColor: seniorAgeValue === s.id ? "#3cb371" : "#fff", fontSize: 12, color: seniorAgeValue === s.id ? "#fff" : "#000", borderColor: "#eee" }]}>
                                        {s.Text}
                                    </Text>
                                ))}
                            </View>
                            <View style={[mystyle.mv10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: '#3c4043' }}>The person who needs care is my</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {seniorRelation.map((s) => (
                                    <Text key={s.id} onPress={() => setRelationValue(s.id)} style={[styles.ctgry, { backgroundColor: seniorRelationValue === s.id ? "#3cb371" : "#fff", fontSize: 12, color: seniorRelationValue === s.id ? "#fff" : "#000", borderColor: "#eee" }]}>
                                        {s.Text}
                                    </Text>
                                ))}

                            </View>
                            <SeniorCareServices />
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "4" ?
                        <PetTypes />
                        :
                        null}
                    <AddtionalService setAdditionalReq={setAdditionalReq} />

                    <View style={[mystyle.mv10]}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: '#3c4043', color: '#3c4043' }}>My job expiry date</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setOpen(true)}
                    >
                        <View style={[styles.ctgry, { flexDirection: "row", borderColor: '#eee', width: 120, justifyContent: "space-between" }]} >
                            <Text style={{ borderColor: "#eee" }}>{expiryDate}</Text>
                            <Entypo name="edit" size={15} />
                        </View>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={expDate}
                        onConfirm={(date) => {
                            setOpen(false)
                            setExpDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        // onPress={() => navigation.navigate('HomeApp')}
                        onPress={onSubmit}
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
        // marginTop: 5,
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

export default JobPostLastStep
