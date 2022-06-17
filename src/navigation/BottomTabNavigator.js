import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './stack-navigators/HomeStackNavigator';
import CareGiverProfile from '../screens/Roles/CareGiver/Profile';
import JobPost from '../screens/Roles/CareGiver/JobPost';
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#4ab242',
                // tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Feed"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="postjob"
                component={JobPost}
                options={{
                    tabBarLabel: "Post",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="plus" size={40} color={color} />
                    ),
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: { display: "none" },
                }}



            />
            <Tab.Screen
                name="Profile"
                component={CareGiverProfile}
                options={{
                    tabBarLabel: 'Me',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                    tabBarHideOnKeyboard: true
                }}
            />
            {/* <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
}
export default BottomTabNavigator