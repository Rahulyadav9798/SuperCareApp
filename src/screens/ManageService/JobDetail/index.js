import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import mystyle from '../../../styles/index'
import DatePicker from 'react-native-date-picker'
import {
    Button
} from 'react-native-paper'
import Header from '../../../components/Header'

const JobDetail = ({ navigation }) => {
    const [dateY, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    let YDAY = `${dateY.getDate()}/${dateY.getMonth() + 1}/${dateY.getFullYear()}`
    return (
        <>
            <Header title="Job detail" navigation={navigation} />
            <View style={mystyle.container}>
                <View style={[mystyle.mb10, mystyle.mh5]}>
                    <Text style={[mystyle.mv10, mystyle.fnt600]} >Job Title</Text>
                    <TextInput style={mystyle.input} />
                </View>
                <View style={[mystyle.mb10, mystyle.mh5]}>
                    <Text style={[mystyle.mv10, mystyle.fnt600]}>Description</Text>
                    {/* <TextInput style={[mystyle.input]} multiline={true}/> */}
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>

                <View style={[mystyle.mb10, mystyle.mh5]}>
                    <Text style={[mystyle.mv10, mystyle.fnt600]}>Location</Text>
                    <TextInput style={mystyle.input} />
                </View>
                <View style={[mystyle.mb10, mystyle.mh5]}>
                    <Text style={[mystyle.mv10, mystyle.fnt600]}>Expiry Date</Text>
                    <Button mode="contained" color="#f8f8f8" icon="calendar"
                        labelStyle={{
                            color: "#37BDBF"
                        }}
                        onPress={() => setOpen(true)}
                    >
                        <Text style={{ color: "gray" }}>{YDAY}</Text>
                    </Button>
                    <DatePicker
                        modal
                        open={open}
                        date={dateY}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={mystyle.nxtBtn}>
                    <Button mode="contained" color="#3cb371"
                        labelStyle={{
                            color: "#fff"
                        }}
                        onPress={() => navigation.navigate("ChildCareWhen")}
                    >
                        <Text>Next</Text>
                    </Button>
                </View>
            </View >
        </>
    )
}
const styles = StyleSheet.create({
    textAreaContainer: {
        borderWidth: 1,
        borderColor: "#c8c8c8",
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        fontSize: 16
    }
})
export default JobDetail
