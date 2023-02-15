import React, { useEffect } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpalceScreen = (props) => {
   useEffect(() => {
      setTimeout(async () => {
         const value = await AsyncStorage.getItem('AlldataSave');
         if (value) {
            props.navigation.reset({ index: 0, routes: [{ name: 'HomeScreenPagFirst' }] })
         } else {
            props.navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] })
         }
      }, 5000);
   }, [])
   return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0059" translucent={false} />

         <ImageBackground source={require('../Asesst/Images/bkimage.png')} style={{ width: '100%', height: 470, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../Asesst/Images/deliveryMan.png')} />
         </ImageBackground>

         <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 22, color: 'black', fontWeight: 'bold' }}>Order from a wide range of restaurants </Text>
         <Text style={{ textAlign: 'center', marginTop: 22, color: 'black' }}>Ready from a wide range of resturants </Text>

         <TouchableOpacity
            style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 22, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>GET STARTED</Text>
         </TouchableOpacity>
      </ScrollView>
   );
}
export default SpalceScreen;