import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Animatable.Text animation="fadeInDown" duration={3000} style={styles.logoTxt}>SuperCare</Animatable.Text>
                <Text style={styles.subHeading}>SuperCare provides best cares</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    logoTxt: {
        fontSize: 48,
        color: "#4ab242",
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,
        fontWeight: '800'
    },
    subHeading: {
        fontSize: 12,
        color: "#000000aa",
    }
})

export default SplashScreen
