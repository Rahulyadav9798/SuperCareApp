import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import mystyle from '../../../../styles/index'

const HouseKeeper = ({ navigation }) => {
    const [value, setValue] = React.useState('Immediately');
    return (
        <View style={mystyle.container}>
            <View style={styles.box2}>
                <TouchableHighlight style={styles.careBox} underlayColor="#c8efc5" onPress={() => navigation.navigate('HouseKeeperWhen')}>
                    <View style={styles.careBox} >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../../../assets/icons/housekeeping.png")
                            }
                        />
                        <Text>Mother's helper</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.careBox} underlayColor="#c8efc5" onPress={() => navigation.navigate('HouseKeeperWhen')}>
                    <View style={styles.careBox} >
                        <Image 
                            style={{ width: 50, height: 50 }}
                            source={require("../../../../assets/icons/housekeeping.png")
                            }
                        />
                        <Text>Mother's helper</Text>
                    </View>
                </TouchableHighlight>
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

export default HouseKeeper
