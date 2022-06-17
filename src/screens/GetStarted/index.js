import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/1.jpg'

const slides = [
  {
    key: 1,
    title: 'Connect',
    text: '',
    image: one,
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'Child Care',
    text: '',
    image: two,
    backgroundColor: '#fff',
  },
  {
    key: 3,
    title: 'Senior Care',
    text: '',
    image: three,
    backgroundColor: '#fff',
  }
];

const { width, height } = Dimensions.get('window');


function GetStartedScreen({ navigation }) {

  function _renderItem({ item }) {
    return (
      <View style={{ backgroundColor: item.backgroundColor, height: '100%', alignItems: 'center' }}>
        {/* <Image source={logo} style={{ marginTop: 32, height: 24, width: 106 }} /> */}
        <Image source={item.image} style={{ opacity: .5, width: "100%", height: "100%", marginTop: 0 }} />
        <Text style={[{ width: 303, marginTop: 80, textAlign: 'center' }]}>{item.title}</Text>
        <Text style={[{ width: 265, marginTop: 30, textAlign: 'center' }]}>{item.text}</Text>
      </View>
    );
  }

  function _renderNextButton() {
    return (
      <View>
        <View style={{ marginHorizontal: 8, backgroundColor: '#3cb371', borderRadius: 48, alignItems: 'center', marginTop: 20 }}
          onPress={() => { navigation.navigate('SignupScreen') }}>
          <Text style={[{ paddingVertical: 12, color: '#fff' }]}>Next</Text>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}
          onPress={() => { navigation.navigate('Login') }}>
          <Text style={[{ marginTop: 25 }]}>Have an account? </Text>
          <Text onPress={() => { navigation.navigate('Login') }} style={[{ marginTop: 25, color: '#179CFF' }]}>Log in</Text>

        </TouchableOpacity>
      </View>
    );
  };
  function _renderDoneButton() {
    return (
      <View>
        <TouchableOpacity style={{ marginHorizontal: 8, backgroundColor: '#3cb371', borderRadius: 48, alignItems: 'center', marginTop: 20, }}
          onPress={() => { navigation.navigate('SignUp') }}>
          <Text style={[{ paddingVertical: 12, color: '#fff' }]}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}
          onPress={() => { navigation.navigate('Login') }}>
          <Text style={[{ marginTop: 25 }]}>Have an account? </Text>
          <Text onPress={() => { navigation.navigate('Login') }} style={[{ marginTop: 25, color: '#179CFF' }]}>Log in</Text>

        </TouchableOpacity>
      </View>
    );
  };

  return (

    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      showSkipButton={false}
      bottomButton
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      // renderSkipButton={_renderSkipButton}
      activeDotStyle={{ backgroundColor: '#179CFF' }}
      dotStyle={{ backgroundColor: '#E3E5E5' }}
    />

  );
}


const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: width,
    height: height,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain'
  }
});

export default GetStartedScreen;


