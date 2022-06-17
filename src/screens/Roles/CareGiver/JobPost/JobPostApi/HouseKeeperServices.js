import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'
const HouseKeeperServices = () => {
    const [housekeeperservice, setHouseKeeperService] = useState()
    const [selectHousekeeperService, setSelectHousekeeperService] = useState("")
    useEffect(() => {
        const getHouseKeeperService = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetJobHouseServices`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            setHouseKeeperService(data)
        }
        getHouseKeeperService()
    }, [])

    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Housekeeper Service Needed</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {housekeeperservice && housekeeperservice.map((s) => (
                    <Text key={s.Value} onPress={() => setSelectHousekeeperService(s.Value)} style={[styles.ctgry, { backgroundColor: selectHousekeeperService === s.Value ? "#3cb371" : "#fff", fontSize: 12, color: selectHousekeeperService === s.Value ? "#fff" : "#000", borderColor: "#eee" }]}>
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
export default HouseKeeperServices
