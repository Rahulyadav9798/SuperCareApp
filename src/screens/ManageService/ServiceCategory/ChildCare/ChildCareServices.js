import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';
import { Checkbox, Button } from 'react-native-paper';
import Header from '../../../../components/Header';
import mystyle from '../../../../styles/index'
import Loader from '../../../../components/Loader/Loader';

const ChildCareServices = ({ navigation }) => {
    const [checked, setChecked] = React.useState("unchecked")
    const [needRes, setNeedRes] = useState()
    useEffect(() => {
        async function needReason() {
            try {
                // const token = await AsyncStorage.getItem('token')
                const config = {
                    headers: {
                        // "Authorization": `Bearer ${token}`
                    },
                }
                await axios.get(`http://daycare.uveoustech.com/api/Jobs/GetJobNeedReason`,
                    // config
                ).then(function (response) {
                    const data = response.data
                    setNeedRes(data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        needReason()
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <Header title="Need Reason" navigation={navigation} />
            {needRes ?
                <View style={mystyle.container}>
                    {needRes.map((reason) => (
                        <Checkbox.Item label={reason.Text} value={reason.Selected}
                        key={reason.Value}   />
                    ))}
                    {/* <Checkbox.Item label='Light Housekeeping' status='checked' />
                <Checkbox.Item label='Errands / Groceries' />
                <Checkbox.Item label='Has Own Car	 ' />
                <Checkbox.Item label='Willing to Drive Children	' />
                <Checkbox.Item label='CPR / First Aid	 ' />
                <Checkbox.Item label='Meal Preparation' />
                <Checkbox.Item label='Laundry	' />
                <Checkbox.Item label='Homework Help	' />
                <Checkbox.Item label='Comfortable with Pets	' /> */}
                    <View style={mystyle.nxtBtn}>
                        <Button mode="contained" color="#3cb371"
                            labelStyle={{
                                color: "#fff"
                            }}
                            onPress={() => navigation.navigate("Home")}
                        >Next
                        </Button>
                    </View>
                </View>
                :
                <Loader/>
            }
        </View>
    )
}

export default ChildCareServices
