import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { baseUrl } from '../../../../api';
import Header from '../../../../components/Header'
import Loader from '../../../../components/Loader/Loader';

const MyVacancies = ({ navigation }) => {
    const [vacancies, setVacancies] = useState()
    useEffect(() => {
        async function getAllVacancies() {
            const url = `${baseUrl}/Jobs/Search`
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "Page": 1,
                    "Limit": 50,
                    "SortInfo": {
                        "Property": "Name",
                        "Direction": "Asc"
                    },
                    "CategoryId": null,
                    "JobTitle": "",
                    "EducationLevelId": null,
                    "ZipCode": "",
                    "JobExpiryDate": "",
                    "PersonId": 7
                })
            })
            let data = await res.json()
            let finalData = data.Data
            setVacancies(finalData)
            console.log(finalData)
        }
        getAllVacancies()
    }, [])

    const VacancyHandle = (id) => {
        navigation.navigate("ViewJob", { JobId: id })
    }

    return (
        <View>
            <Header title="Vacancies" navigation={navigation} />
            {/* <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>My all vacancies</Text> */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 60 }}>
                {vacancies ? vacancies.map((v) => (
                    <TouchableOpacity onPress={() => VacancyHandle(v.ID)} style={styles.myvacancy} key={v.ID}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flex: 3 }}>
                                <Text style={{ color: "#3c4043", fontSize: 18, fontWeight: "bold", textTransform: "capitalize" }}>{v.JobTitle}</Text>
                                <Text style={{ color: "gray", textTransform: "capitalize", fontSize: 16 }}>{v.CompanyName_view}</Text>
                                <Text style={{ color: "#3c4043", textAlign: "left", fontSize: 16, textTransform: "capitalize" }}><Entypo name="location-pin" color="green" size={15} />{v.PostedBy.City}</Text>
                                <Text style={{ color: "#3c4043", textAlign: "left", fontSize: 16 }}><FontAwesome name="graduation-cap" color="green" size={15} />Education. {v.Name_view2}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                                <Text style={{ marginBottom: 5, borderRadius: 5, width: 70, textAlign: "center", paddingVertical: 5, backgroundColor: "#eee" }}>{v.JobStatus}</Text>
                                {/* <Text style={{ color: "#3c4043" }} >${v.MaxPayRate}</Text> */}
                            </View>
                        </View>
                        <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", marginVertical: 10 }}>
                            <Text style={styles.btmBox}>Exp. {v.ExpiringDate.split(" ")[0]}</Text>
                            <Text style={styles.btmBox}>${parseInt(v.MinPayRate)}-{parseInt(v.MaxPayRate)}/hour</Text>
                            {v.ZipCode != null ?
                                <Text style={styles.btmBox}>Zip Code: {v.ZipCode}  </Text>
                                :
                                null}
                        </View>

                    </TouchableOpacity>
                )) :
                    <Loader />
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    myvacancy: {
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,

    },
    btmBox: {
        borderRadius: 5,
        marginRight: 5,
        padding: 5,
        backgroundColor: "#eee",
        textAlign: "left",
        fontSize: 14
    },
    bg: {
        width: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 10,
        marginRight: 20
        // borderRadius:20,
        // marginVertical:10
    },
});


export default MyVacancies
