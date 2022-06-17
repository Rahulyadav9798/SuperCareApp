import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'
const JobKidsLove = (props) => {
    const [jobKidsLove, setJobKidsLove] = useState()
    const [kidsLoveValue, setJobKidsLoveValue] = useState("1")
    useEffect(() => {
        const getJobKidsLove = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobKidsLove`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setJobKidsLove(data)
        }
        getJobKidsLove()
    }, [])
    useEffect(() => {
        props.setKidsLove(kidsLoveValue)
    }, [kidsLoveValue])
    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>kids Love</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {jobKidsLove && jobKidsLove.map((s) => (
                    <Text key={s.Value} onPress={() => setJobKidsLoveValue(s.Value)} style={[styles.ctgry, { backgroundColor: kidsLoveValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: kidsLoveValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default JobKidsLove
