import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'

const Diagonosis = (props) => {
    const [diagonosis, setDiagonosis] = useState()
    const [diagonosisValue, setDiagonosisValue] = useState("7")
    useEffect(() => {
        const getDiagonosis = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetDiagonoses`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setDiagonosis(data)
        }
        getDiagonosis()
    }, [])
    useEffect(() => {
        props.setDiagonosisArray(diagonosisValue)
    }, [diagonosisValue])
    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Diagonosis</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {diagonosis && diagonosis.map((s) => (
                    <Text key={s.Value} onPress={() => setDiagonosisValue(s.Value)} style={[styles.ctgry, { backgroundColor: diagonosisValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: diagonosisValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default Diagonosis
