import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
const Header = ({ title, isHome, navigation }) => {
    return (
        <>
            <View style={[styles.sectionContainer]}>
                <View style={styles.header}>
                    {isHome ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon
                                reverseColor
                                name='menu-outline'
                                type='ionicon'
                                size={35}
                                color='white'
                            />
                        </TouchableOpacity>
                        :
                        <View>
                            <Icon
                                reverseColor
                                name='arrowleft'
                                type='antdesign'
                                size={30}
                                color='#ffffff'
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    }
                    <Text style={styles.logo}>{title}</Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        // backgroundColor: "#008577",
        backgroundColor: "#4ab242",
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    logo: {
        fontSize: 20,
        fontWeight: '600',
        color: "white",
        marginLeft: 20
    }
});

export default Header
