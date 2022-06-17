import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'
const SeniorCareServices = () => {
    const [seniorCareService, setSeniorCareService] = useState()
    const [selectSeniorService, setSelectSeniorService] = useState("")
    useEffect(() => {
        const getSeniorCareService = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobSeniorCareService`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setSeniorCareService(data)
        }
        getSeniorCareService()
    }, [])

    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Senior Service Needed</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {seniorCareService && seniorCareService.map((s) => (
                    <Text key={s.Value} onPress={() => setSelectSeniorService(s.Value)} style={[styles.ctgry, { backgroundColor: selectSeniorService === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: selectSeniorService === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
                        {s.Text}
                    </Text>

                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ctgry: {
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        borderWidth: 1,
    },
})
export default SeniorCareServices
