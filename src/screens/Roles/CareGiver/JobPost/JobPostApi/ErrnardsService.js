import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'

const ErrnardsService = () => {
    const [errnards, setErrnardss] = useState()
    const [errnardsValue, setErrnardsValue] = useState("0")
    useEffect(() => {
        const getErrnards = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobErrnardsServices`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setErrnardss(data)
        }
        getErrnards()
    }, [])

    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Service needed</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {errnards && errnards.map((s) => (
                    <Text key={s.Value} onPress={() => setErrnardsValue(s.Value)} style={[styles.ctgry, { backgroundColor: errnardsValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: errnardsValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default ErrnardsService
