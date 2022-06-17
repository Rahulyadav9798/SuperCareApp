import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'

const AddtionalService = (props) => {
    const [additional, setAdditional] = useState()
    const [addtionalValue, setAdditionalValue] = useState("")
    useEffect(() => {
        const getAdditionalService = async () => {
            const postData = await AsyncStorage.getItem('postData')
            const job = await JSON.parse(postData)
            const id = job.categoryId
            const res = await fetch(`${baseUrl}/Jobs/GetJobAdditional?categoryId=${id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setAdditional(data)
            console.log("additional", data)
        }
        getAdditionalService()
    }, [])
    useEffect(() => {
        props.setAdditionalReq(addtionalValue)
    }, [addtionalValue])
    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Additional Services{"(optional)"}</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {additional && additional.map((s) => (
                    <Text key={s.Value} onPress={() => setAdditionalValue(s.Value)} style={[styles.ctgry, { backgroundColor: addtionalValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: addtionalValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
                        {s.Text}
                    </Text>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ctgry: {
        // marginTop: 5,
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        borderWidth: 1,
    },
})
export default AddtionalService
