import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import mystyle from '../../../styles/index'
import Header from '../../../components/Header';
import Loader from '../../../components/Loader/Loader';

const SubCategory = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [subServiceCategory, setSubServiceCategory] = useState()
    useEffect(() => {
        async function getSubServiceCategory() {
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
                await axios.post(`http://daycare.uveoustech.com/api/ServiceSubCategory/Search`,
                    // config,
                    {
                        "Page": 1,
                        "Limit": 10,
                        "SortInfo": {
                            "Property": "Name",
                            "Direction": "Asc"
                        },
                        "Name": "",
                        "CategoryId": itemId
                    }
                ).then(function (response) {
                    const data = response.data.Data
                    setSubServiceCategory(data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getSubServiceCategory()
    }, [])
    return (
        <>
            <Header title="Sub services" navigation={navigation} />
            <View style={mystyle.container}>
                {subServiceCategory ?
                    <View style={styles.box2}>
                        {subServiceCategory.map(sub => (
                            <TouchableHighlight key={sub.ID} style={[styles.careBox]} underlayColor="#c8efc5" onPress={() => navigation.navigate('Jobdetail')}>
                                <View style={styles.careBox} >
                                    {/* <Image
                                style={{ width: 50, height: 50 }}
                                source={require("../../../assets/icons/baby-stroller.png")
                                }
                            /> */}
                                    <Text style={{ textAlign: "center" }}>{sub.Name}</Text>
                                </View>
                            </TouchableHighlight>
                        ))}

                    </View>
                    :
                    <Loader />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headTxt: {
        fontSize: 18,
        color: "#333333"
    },
    box2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        position: "relative",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    careBox: {
        width: 150,
        margin: 10,
        height: 150,
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
});

export default SubCategory
