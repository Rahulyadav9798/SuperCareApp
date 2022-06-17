import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './src/store';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import GetStartedScreen from './src/screens/GetStarted';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import ChooseProfile from './src/screens/ChooseProfile';
import JobPost from './src/screens/Roles/CareGiver/JobPost';
import JobPostStep2 from './src/screens/Roles/CareGiver/JobPost/JobPostStep2';
import { baseUrl } from './src/api';
import JobPostLastStep from './src/screens/Roles/CareGiver/JobPost/JobPostLastStep';

const Stack = createNativeStackNavigator();

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function userExist() {
      try {
        const token = await AsyncStorage.getItem('token')
        // await AsyncStorage.removeItem('token')
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        }
        const res = await axios.get(`${baseUrl}/_Account/CheckUserInfo`,
          config
        )
        let data = res.data
        setUserData(data)
        console.log("userData", data)
      } catch (error) {
        console.log(error)
      }
    }
    userExist()
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={userData.length === 0 ? "Login" : "HomeApp"} screenOptions={{
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: '#fff'
          }
        }}>
          <Stack.Screen name="HomeApp" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChooseProfile" component={ChooseProfile} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Jobpost" component={JobPost} options={{ headerShown: false }} />
          <Stack.Screen name="JobPostStepTwo" component={JobPostStep2} options={{ headerShown: false }} />
          <Stack.Screen name="JobPostLastStep" component={JobPostLastStep} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
