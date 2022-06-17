import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { baseUrl } from '../../../../api';
const EducationLevel = (props) => {
    const [educationLevel, setEducationLevel] = useState([])
    const [selectedValue, setSelectedValue] = useState("1");
    useEffect(() => {
        async function getHearAbout() {
            const url = `${baseUrl}/EducationLevel/Search`
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "Page": 1,
                    "Limit": 10,
                    "SortInfo": {
                        "Property": "ID",
                        "Direction": "Asc"
                    },
                    "Name": ""
                })
            })
            let data = await res.json()
            let finalData = data.Data
            setEducationLevel(finalData)
        }
        getHearAbout()
    }, [])
    useEffect(() => {
        props.setEducationLevelId(selectedValue)
    }, [selectedValue])
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ width: "100%" }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item style={{ color: "#c9c9c9" }} label='Select education level' value='1' />
                {educationLevel.map((h) => (
                    <Picker.Item color='#333333aa' key={h.ID} label={h.Name} value={h.ID} />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginLeft: -12,
    }
});


export default EducationLevel
