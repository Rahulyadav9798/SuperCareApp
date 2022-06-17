import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from "./stack-navigators/HomeStackNavigator";
import { DrawerContent } from '../components/DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="MenuTab" options={{ headerShown: false }}
            drawerContent={props => <DrawerContent  {...props} />}>
            {/* <Drawer.Screen name="MenuTab" component={TabNavigator} /> */}
            {/* <Drawer.Screen name="MenuTab" component={HomeStack} options={{ headerShown: false }} /> */}
            <Drawer.Screen name="MenuTab" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator