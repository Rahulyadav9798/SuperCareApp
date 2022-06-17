import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
const ChildrenCount = (props) => {
    const [zeroTosixMonth, setZerotosixMonth] = useState("");
    const [sevenTothreeYears, setSeventothreeYears] = useState("");
    const [fourTosixYears, setFourtosixYears] = useState("");
    const [sevenToelevenYears, setSevenToelevenYears] = useState("");
    const [tweleveMore, setTweleveMore] = useState("");
    useEffect(() => {
        props.zeroTo6MonthHandleChange(zeroTosixMonth)
    }, [zeroTosixMonth])
    useEffect(() => {
        props.sevenTo3YearsHandleChange(sevenTothreeYears)
    }, [sevenTothreeYears])
    useEffect(() => {
        props.fourTo6YearsHandleChange(fourTosixYears)
    }, [fourTosixYears])
    useEffect(() => {
        props.sevenTo11YearsHandleChange(sevenToelevenYears)
    }, [sevenToelevenYears])
    useEffect(() => {
        props.tweleveMoreHandleChange(tweleveMore)
    }, [tweleveMore])

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={zeroTosixMonth}
                style={{ width: "50%" }}
                onValueChange={(itemValue, itemIndex) => setZerotosixMonth(itemValue)}
            >
                <Picker.Item style={{ color: "#3c4043" }} label='0 - 6 month' value='' />
                <Picker.Item label='0' value='0' />
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />
            </Picker>
            <Picker
                selectedValue={sevenTothreeYears}
                style={{ width: "50%" }}
                onValueChange={(itemValue, itemIndex) => setSeventothreeYears(itemValue)}
            >
                <Picker.Item style={{ color: "#3c4043" }} label='7 Mo - 3 years' value='' />
                <Picker.Item label='0' value='0' />
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />
            </Picker>
            <Picker
                selectedValue={fourTosixYears}
                style={{ width: "50%" }}
                onValueChange={(itemValue, itemIndex) => setFourtosixYears(itemValue)}
            >
                <Picker.Item style={{ color: "#3c4043" }} label='4 - 6 years' value='' />
                <Picker.Item label='0' value='0' />
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />

            </Picker>
            <Picker
                selectedValue={sevenToelevenYears}
                style={{ width: "50%" }}
                onValueChange={(itemValue, itemIndex) => setSevenToelevenYears(itemValue)}
            >
                <Picker.Item style={{ color: "#3c4043" }} label='7 - 12 years' value='' />
                <Picker.Item label='0' value='0' />
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />

            </Picker>
            <Picker
                selectedValue={tweleveMore}
                style={{ width: "50%" }}
                onValueChange={(itemValue, itemIndex) => setTweleveMore(itemValue)}
            >
                <Picker.Item style={{ color: "#3c4043" }} label='12+ years' value='' />
                <Picker.Item label='0' value='0' />
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginLeft: -12,
        flexDirection: "row",
        flexWrap: "wrap"
    }
});


export default ChildrenCount
