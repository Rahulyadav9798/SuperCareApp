import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { baseUrl } from '../../../../../api'
import mystyle from '../../../../../styles'

const PetTypes = () => {
    const [petTypes, setPetTypes] = useState()
    useEffect(() => {
        const getDiagonosis = async () => {
            const res = await fetch(`${baseUrl}/Jobs/GetPetsTypes`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            console.log(data)
            setPetTypes(data)
        }
        getDiagonosis()
    }, [])

    return (
        <>
            <View style={[mystyle.mv10]}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3c4043" }}>Which type of pets ?</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {petTypes && petTypes.map((p) => (
                    <View style={{ width: "25%" }} key={p.ID}>
                        <Text style={{ textAlign: 'left', marginBottom: 5 }}>{p.Name}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput placeholder='0' keyboardType="numeric" style={{ paddingLeft: 10, height: 60 }} />
                        </View>
                    </View>
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
    inputContainer: {
        borderWidth: 1,
        marginBottom: 5,
        borderColor: "#e8e8e8",
        height: 30,
        width: "70%",
        justifyContent: "center",
        borderRadius: 100,
        overflow: "hidden"
    }
})
export default PetTypes
