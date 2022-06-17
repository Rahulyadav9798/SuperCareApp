import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
const HearAboutUs = (props) => {
    const [hearData, setHearData] = useState([])
    const [selectedValue, setSelectedValue] = useState("0");
    useEffect(() => {
        async function getHearAbout() {
            const url = "http://daycare.uveoustech.com/api/HearAboutUs/Search"
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
            setHearData(finalData)
        }
        getHearAbout()
    }, [])

    useEffect(() => {
        props.hearHandleChange(selectedValue)
    }, [selectedValue])

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ width: "100%", backgroundColor: '#f8f8f8', }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item style={{ color: "#ccc" }} label='How Did you hear about us ?' value='0' />
                {hearData.map((h) => (
                    <Picker.Item color='#000' key={h.ID} label={h.Name} value={h.ID} />
                ))}
            </Picker>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    }
});


export default HearAboutUs
