import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'

const PetCareService = (props) => {
    const [petService, setPetCareService] = useState()
    const [petServiceValue, setPetServiceValue] = useState("3")
    useEffect(() => {
        const getDiagonosis = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetPetCareService`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setPetCareService(data)
        }
        getDiagonosis()
    }, [])

    useEffect(() => {
        props.setPetServiceArray(petServiceValue)
    }, [petServiceValue])

    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Pet care service</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {petService && petService.map((s) => (
                    <Text key={s.Value} onPress={() => setPetServiceValue(s.Value)} style={[styles.ctgry, { backgroundColor: petServiceValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: petServiceValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default PetCareService
