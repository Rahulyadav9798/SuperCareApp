import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { ProgressBar, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import mystyle from '../../../../styles/index'
import JobKidsLove from './JobPostApi/JobKidsLove';
import HouseKeeperServices from './JobPostApi/HouseKeeperServices';
import { baseUrl } from '../../../../api';
import Diagonosis from './JobPostApi/Diagonosis';
import Subjects from './JobPostApi/Subjects';
import PetCareService from './JobPostApi/PetCareService';
import PetTypes from './JobPostApi/PetTypes';
import ErrnardsService from './JobPostApi/ErrnardsService';

const JobPostStep2 = ({ navigation }) => {
    const [serviceSubCategory, setServiceSubCategory] = useState();
    const [stepOneData, setStepOneData] = useState()
    const [subCategoryId, setSubCategoryId] = useState("1")
    const [neededs, setNeededs] = useState("1")
    const [kidslove, setKidsLove] = useState([])
    const [seniorNeededs, setSeniorNeededs] = useState("0")
    const [diagonosisArray, setDiagonosisArray] = useState([])
    const [subjectsArray, setSubjectsArray] = useState([])
    const [petsServiceArray, setPetServiceArray] = useState([])
    const [transportation, setTransporation] = useState(true)
    const [smoker, setSmoker] = useState(false)
    const [comforwithPet, setComfortwithPet] = useState(false)
    const [jobOccur, setJobOccur] = useState('0')
    const needed = [{ id: "1", Text: "Immediately" }, { id: "2", Text: "Within Days" }, { id: "3", Text: "Within Weeks" }, { id: "4", Text: "Within Months" }, { id: "5", Text: "Not Sure" }]
    const seniorNeeded = [{ id: "0", Text: "Companion Care" }, { id: "1", Text: "Hands-on Care" }, { id: "2", Text: "Live-in Home Care" }, { id: "3", Text: "Respite Care" }]

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
        const getServiceSubCategory = async () => {
            const postData = await AsyncStorage.getItem('postData')
            const job = await JSON.parse(postData)
            const res = await fetch(`${baseUrl}/ServiceSubCategory/Search`, {
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
                    "Name": "",
                    "CategoryId": job.categoryId
                })
            })
            let data = await res.json()
            let finalData = await data.Data
            setServiceSubCategory(finalData)
        }
        getServiceSubCategory()
    }, [])
    const myIdealCaregiver = () => {
        if (stepOneData && (stepOneData.categoryId === "2" || stepOneData.categoryId === "3" || stepOneData.categoryId === "4" || stepOneData.categoryId === "5")) {
            return (
                <>
                    <View style={[mystyle.mv10]}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>My Ideal Caregiver</Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text onPress={() => setTransporation(!transportation)} style={[styles.ctgry, { backgroundColor: transportation === true ? "#3cb371" : "#fff", fontSize: 12, color: transportation === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                            Has Own Transportation
                        </Text>
                        <Text onPress={() => setSmoker(!smoker)} style={[styles.ctgry, { backgroundColor: smoker === true ? "#3cb371" : "#fff", fontSize: 12, color: smoker === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                            Non-smoker
                        </Text>
                        <Text onPress={() => setComfortwithPet(!comforwithPet)} style={[styles.ctgry, { backgroundColor: comforwithPet === true ? "#3cb371" : "#fff", fontSize: 12, color: comforwithPet === true ? "#fff" : "#000", borderColor: "#eee" }]}>
                            Comfortable with Pets
                        </Text>
                    </View>
                </>
            )
        }
    }

    const storePostData = async () => {
        const jobData = {
            whenNeed: neededs,
            jobOccur: jobOccur,
            subCategoryId: subCategoryId,
            kidslove: kidslove,
            transportation: transportation,
            smoker: smoker,
            comforwithPet: comforwithPet,
            diagonosisArray: diagonosisArray,
            subjectsArray: subjectsArray,
            petsServiceArray: petsServiceArray,
        }
        try {
            await AsyncStorage.setItem('postDataTwo', JSON.stringify(jobData))
            navigation.navigate('JobPostLastStep')
        } catch (e) {
            // saving error
            console.warn(e)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={[mystyle.ft24, mystyle.fw600, mystyle.black]}>Second Step</Text>
                <ProgressBar style={{ marginVertical: 5, height: 5 }} progress={.6} color="#3cb371" />
                <View style={mystyle.mv10}>

                    <View style={[mystyle.mb10,]}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>When do you need care ?</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                        {needed.map((s) => (
                            <Text key={s.id} onPress={() => setNeededs(s.id)} style={{ backgroundColor: neededs === s.id ? "#3cb371" : "#fff", fontSize: 12, marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: neededs === s.id ? "#fff" : "#000" }}>
                                {s.Text}
                            </Text>
                        ))}
                    </View>
                    <View style={[mystyle.mv10]}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>How often will this job occur?</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                        <Text onPress={() => setJobOccur("0")} style={{ backgroundColor: jobOccur === "0" ? "#3cb371" : "#fff", fontSize: 12, color: "#fff", marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: jobOccur === "0" ? "#fff" : "#000" }}>
                            Regularly Scheduled
                        </Text>
                        <Text onPress={() => setJobOccur("1")} style={{ backgroundColor: jobOccur === "1" ? "#3cb371" : "#fff", fontSize: 12, color: "#fff", marginBottom: 10, marginRight: 10, padding: 10, borderRadius: 25, alignSelf: 'flex-start', borderWidth: 1, borderColor: "#eee", color: jobOccur === "1" ? "#fff" : "#000" }}>
                            Occasionaly/One-time
                        </Text>
                    </View>
                    {stepOneData && stepOneData.categoryId === "1" ?
                        <>
                            <View style={[mystyle.mv10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Type of caregiver needed:</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {serviceSubCategory && serviceSubCategory.map((s) => (
                                    <Text key={s.ID} onPress={() => setSubCategoryId(s.ID)} style={[styles.ctgry, { backgroundColor: subCategoryId === s.ID ? "#3cb371" : "#fff", fontSize: 12, color: subCategoryId === s.ID ? "#fff" : "#000", borderColor: "#eee" }]}>
                                        {s.Name}
                                    </Text>
                                ))}
                            </View>
                            <JobKidsLove setKidsLove={setKidsLove} />
                        </>
                        :
                        null}
                    {myIdealCaregiver()}
                    {stepOneData && stepOneData.categoryId === "2" ?
                        <>
                            <Diagonosis setDiagonosisArray={setDiagonosisArray} />
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "3" ?
                        <>
                            <Subjects setSubjectsArray={setSubjectsArray} />
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "4" ?
                        <>
                            <PetCareService setPetServiceArray={setPetServiceArray} />
                            {/* <PetTypes /> */}
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "5" ?
                        <>
                            <View style={[mystyle.mv10]}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Type of caregiver</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                {seniorNeeded.map((s) => (
                                    <Text key={s.id} onPress={() => setSeniorNeededs(s.id)} style={[styles.ctgry, { backgroundColor: seniorNeededs === s.id ? "#3cb371" : "#fff", fontSize: 12, color: seniorNeededs === s.id ? "#fff" : "#000", borderColor: "#eee" }]}>
                                        {s.Text}
                                    </Text>
                                ))}
                            </View>
                        </>
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "6" ?
                        <HouseKeeperServices />
                        :
                        null}
                    {stepOneData && stepOneData.categoryId === "7" ?
                        <ErrnardsService />
                        :
                        null}
                </View>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={storePostData}
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

export default JobPostStep2
