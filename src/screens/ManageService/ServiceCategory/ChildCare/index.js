import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { RadioButton, Button } from 'react-native-paper'
import mystyle from '../../../../styles/index'

const ChildCare = ({ navigation }) => {
    const [value, setValue] = React.useState('Immediately');
    return (
        <View style={mystyle.container}>
            <View style={styles.box2}>
                <TouchableHighlight style={styles.careBox} underlayColor="#c8efc5" onPress={() => navigation.navigate('ChildCareWhen')}>
                    <View style={styles.careBox} >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../../../assets/icons/baby-stroller.png")}
                        />
                        <Text>Babysitter</Text>
                    </View>
                </TouchableHighlight>
                {/* <View style={styles.careBox} >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../../../assets/icons/mother.png")
                        }
                    />
                    <Text onPress={() => navigation.navigate('ChildCare')}>Nanny</Text>
                </View>
                <View style={styles.careBox} >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../../../assets/icons/daycare-center.png")
                        }
                    />
                    <Text onPress={() => navigation.navigate('ChildCare')}>Child Care Center</Text>
                </View>
                <View style={styles.careBox} >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../../../assets/icons/family.png")
                        }
                    />
                    <Text onPress={() => navigation.navigate('ChildCare')}>Family Child Care</Text>
                </View> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headTxt: {
        fontSize: 18,
        color: "#333333"
    },
    box2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    careBox: {
        width: 150,
        margin: 10,
        height: 150,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        textAlign: "center",
    },
});

export default ChildCare
