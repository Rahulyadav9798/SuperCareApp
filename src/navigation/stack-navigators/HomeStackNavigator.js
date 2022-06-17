import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home';
import SubCategory from '../../screens/ManageService/SubCategory';
import JobDetail from '../../screens/ManageService/JobDetail';
import ChildCareWhen from '../../screens/ManageService/ServiceCategory/ChildCare/ChildCareWhen';
import ChildCareServices from '../../screens/ManageService/ServiceCategory/ChildCare/ChildCareServices';
import MyVacancies from '../../screens/Roles/CareGiver/MyVacancies';
import RecentlyApplied from '../../screens/Roles/CareGiver/RecentlyApplied';
import CareGiverProfile from '../../screens/Roles/CareGiver/Profile';
import JobPost from '../../screens/Roles/CareGiver/JobPost';
import JobPostStep2 from '../../screens/Roles/CareGiver/JobPost/JobPostStep2';
import ViewJob from '../../screens/Roles/CareGiver/MyVacancies/ViewJob';
const Stack = createNativeStackNavigator();
const navoptionHandler = () => ({
    headerShown: false
})
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            animation: "slide_from_right",
        }} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                // options={{
                //     headerBackVisible: false,
                //     title: 'Super care',
                // }}
                options={navoptionHandler}
            />
            {/* -----------------------------------CareGiver--------------------------------------------------------------------------------------------  */}

            <Stack.Screen name="CareGiverProfile" component={CareGiverProfile} options={{ headerShown: false }} />
            <Stack.Screen name="CareGiverJobPost" component={JobPost} options={{ headerShown: false }} />
            <Stack.Screen name="CareGiverJobPostStepTwo" component={JobPostStep2} options={{ headerShown: false }} />
            <Stack.Screen name="MyVacancies" component={MyVacancies} options={navoptionHandler} />
            <Stack.Screen name="ViewJob" component={ViewJob} options={navoptionHandler} />
            <Stack.Screen name="RecentlyApplied" component={RecentlyApplied} options={navoptionHandler} />
            <Stack.Screen name="Subservices" component={SubCategory} options={navoptionHandler} />
            <Stack.Screen name="Jobdetail" component={JobDetail} options={navoptionHandler} />
            <Stack.Screen name="ChildCareWhen" component={ChildCareWhen} options={{ title: 'When Need', headerShown: false }} />
            <Stack.Screen name="KidsLove" component={ChildCareServices} options={{ title: 'Kids Love', headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeStack;
