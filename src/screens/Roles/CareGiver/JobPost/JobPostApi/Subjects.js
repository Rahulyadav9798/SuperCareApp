import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'
const Subjects = (props) => {
    const [subjects, setSubjects] = useState()
    const [subjectValue, setSubjectValue] = useState("4")
    useEffect(() => {
        const getSubjects = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobSubjects`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setSubjects(data)
        }
        getSubjects()
    }, [])
    useEffect(() => {
        props.setSubjectsArray(subjectValue)
    }, [subjectValue])
    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Subjects Area</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {subjects && subjects.map((s) => (
                    <Text key={s.Value} onPress={() => setSubjectValue(s.Value)} style={[styles.ctgry, { backgroundColor: subjectValue === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: subjectValue === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default Subjects
