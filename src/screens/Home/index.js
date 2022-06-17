import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../api';
import { useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, TouchableHighlight, ScrollView, BackHandler, Alert } from 'react-native'
import Header from '../../components/Header';
import mystyle from '../../styles'
const HomeScreen = ({ navigation }) => {
    const [serviceCategory, setServiceCategory] = useState()
    const [vacancy, setVacancy] = useState()
    const [search, setSearch] = useState()
    const [searchQuery, setSearchQuery] = React.useState('');
    const { error, loading, user } = useSelector((state) => state.user)
    console.log(user)
    const onChangeSearch = query => setSearchQuery(query);
    useEffect(() => {
        async function getServiceCategory() {
            try {
                await axios.post(`${baseUrl}/ServiceCategory/Search`,
                    {
                        "Page": 1,
                        "Limit": 6,
                        "SortInfo": {
                            "Property": "Name",
                            "Direction": "Asc"
                        },
                        "Name": ""
                    }
                ).then(function (response) {
                    const data = response.data.Data
                    setServiceCategory(data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getServiceCategory()
        // const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        // return () => backHandler.remove()
    }, [])
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                Alert.alert("Hold on!", "Are you sure you want to Exit?", [
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    },
                    { text: "YES", onPress: () => BackHandler.exitApp() }
                ]);
                return true;
            };

            BackHandler.addEventListener("hardwareBackPress", onBackPress);

            return () =>
                BackHandler.removeEventListener("hardwareBackPress", onBackPress);

        }, []));

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
                    "Limit": 1,
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
            setVacancy(finalData)
        }
        getAllVacancies()
    }, [])
    const VacancyHandle = (id) => {
        navigation.navigate("ViewJob", { JobId: id })
    }
    return (
        <>
            <Header title="SuperCare" isHome={true} navigation={navigation} />
            <View style={{ flex: 1 }}>
                {/* <View style={styles.box}> */}
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Search" />
                        <FontAwesome5 name="search" size={20} />
                    </View>
                    <View style={styles.vacancy}>
                        <Text style={{ color: "#3c4043", fontSize: 16, fontWeight: "bold" }}>My vacancy</Text>
                        <Text onPress={() => navigation.navigate("MyVacancies")} style={{ fontSize: 16, fontWeight: "bold", color: "#4ab242" }}>See all</Text>
                    </View>
                    {vacancy && vacancy.map((v) => (
                        <TouchableOpacity onPress={() => VacancyHandle(v.ID)} style={styles.myvacancy} key={v.ID}>

                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={styles.bg}
                                    source={{
                                        uri: 'https://img.freepik.com/free-photo/child-drawing-with-crayons-with-her-mom-home_1301-6422.jpg?t=st=1651496766~exp=1651497366~hmac=2cf4f4283de12289f27f82846b332e820747b2615fbbce228e11be3c58337209&w=740',
                                    }}
                                />
                                <View>
                                    <Text style={{ color: "#3c4043", fontSize: 16, textTransform: "capitalize" }}>{v.JobTitle}</Text>
                                    <Text style={{ textTransform: "capitalize", fontSize: 14 }}>Uveous tech</Text>
                                    <Text style={{ textTransform: "capitalize" }}>{v.PostedBy.City}<Entypo name="location-pin" color="green" size={15} /></Text>
                                </View>
                            </View>
                            <View>
                                <TouchableHighlight>
                                    <View>
                                        <Text style={{ marginBottom: 5, borderRadius: 10, width: 70, textAlign: "center", paddingVertical: 5, backgroundColor: "rgba(74, 178, 66, .5)" }}>{v.JobStatus}</Text>

                                        <Text>${v.MaxPayRate}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </TouchableOpacity>
                    ))}
                    <View style={styles.vacancy}>
                        <Text style={{ color: "#3c4043", fontSize: 16, fontWeight: "bold" }}>Recently Applied</Text>
                        <Text onPress={() => navigation.navigate("RecentlyApplied")} style={{ fontSize: 16, fontWeight: "bold", color: "#4ab242" }}>See all</Text>
                    </View>
                    <View style={styles.recently}>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                <Image
                                    style={{
                                        width: 70, height: 70, borderRadius: 35,
                                        marginRight: 20
                                    }}
                                    source={{
                                        uri: 'https://www.pngfind.com/pngs/m/4-48198_business-man-business-man-face-png-transparent-png.png',
                                    }}
                                />
                                <View>
                                    <Text style={{ color: "#3c4043", fontSize: 16 }}>Child Care</Text>
                                    <Text>United States</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <MaterialCommunityIcons name='android-messages' size={25} color="#4ab242" />
                            </View>
                        </View>
                        <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                                <Text>See Resume</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                                <Text>See Details</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.vacancy}>
                        <Text style={{ color: "#3c4043", fontSize: 16, fontWeight: "bold" }}>Choose Category</Text>
                    </View>
                    {serviceCategory ?
                        <View style={styles.box2} >
                            {serviceCategory.map((service) => (
                                <TouchableHighlight key={service.ID} style={styles.careBox} underlayColor="#c8efc5" onPress={() => navigation.navigate('Subservices', { itemId: service.ID })}>
                                    <View>
                                        <View style={{ alignItems: "center" }}>
                                            {/* <Image
                                        style={{ width: 50, height: 50 }}
                                        source={require("../../assets/icons/boy.png")
                                        }
                                    /> */}
                                        </View>
                                        <Text>{service.Name}</Text>
                                    </View>
                                    {/* <Text style={{ textAlign: "left", paddingHorizontal: 10 }} onPress={() => navigation.navigate('ChildCare')}>{service.Description}</Text> */}
                                </TouchableHighlight>
                            ))}
                        </View>
                        :
                        <Text style={{ flex: 1, textAlign: "center", justifyContent: "center", alignItems: "center" }}>loading...</Text>}
                </ScrollView >
            </View >
        </>
    )
}


const styles = StyleSheet.create({
    box2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        // alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderRadius: 100,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#c8c8c8",
        height: 40,
        backgroundColor: "#fff",
        justifyContent: "center",
        marginHorizontal: 10,
        marginTop: 10
    },
    input: {
        width: "82%",
        fontSize: 18,
        backgroundColor: '#fff',
    },
    vacancy: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    myvacancy: {
        marginHorizontal: 10,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recently: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    careBox: {
        width: 150,
        margin: 10,
        height: 150,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#4ab242"
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


export default HomeScreen
