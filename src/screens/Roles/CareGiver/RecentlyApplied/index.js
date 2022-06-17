import React from 'react'
import { View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../../components/Header';
const RecentlyApplied = ({ navigation }) => {
    return (
        <>
            <Header title="Applied" navigation={navigation} />
            <View style={styles.vacancy}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recently Applied</Text>
            </View>
            <View style={styles.recently}>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Image
                            style={{
                                width: 70, height: 70, borderRadius: 35,
                                marginRight: 20
                            }}
                            source={{
                                uri: 'https://img.freepik.com/free-photo/child-drawing-with-crayons-with-her-mom-home_1301-6422.jpg?t=st=1651496766~exp=1651497366~hmac=2cf4f4283de12289f27f82846b332e820747b2615fbbce228e11be3c58337209&w=740',
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Child Care</Text>
                            <Text>United States</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons name='android-messages' size={25} color="#4ab242" />
                    </View>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                        <Text>See Resume</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                        <Text>See Details</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.recently}>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Image
                            style={{
                                width: 70, height: 70, borderRadius: 35,
                                marginRight: 20
                            }}
                            source={{
                                uri: 'https://kaleidoscope.in/assets/images/slider/elder-health-care.jpg',
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Senior Care</Text>
                            <Text>United States</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons name='android-messages' size={25} color="#4ab242" />
                    </View>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                        <Text>See Resume</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#4ab242", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 }}>
                        <Text>See Details</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    vacancy: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    recently: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    bg: {
        width: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 10,
        marginRight: 20
        // borderRadius:20,
        // marginVertical:10
    },
});


export default RecentlyApplied
