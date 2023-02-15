import React, { useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustamHeddar from "../Comman/CustamHeddar";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginApi } from '../Redux/fetchToDos';
import Apis from "../CollApi/ShortUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props) => {
    const [Email, setEmail] = useState('bandal11@gmail.com');
    const [Password, setPassword] = useState('123456789');
    const LoginBtnApi = async () => {
        let Bodydata = {
            email: Email,
            password: Password
        }
        let ress = await props.LoginApi(Apis.LoginApiurl, Apis.POST, Bodydata)
        console.log('resloginnn---', ress)
        if (ress.data.status) {
            await AsyncStorage.setItem('AlldataSave', JSON.stringify(ress.data.data))
            props.navigation.reset({ index: 0, routes: [{ name: 'HomeScreenPagFirst' }] })
            // props.navigation.navigate('HomeScreenPagFirst')
        } else {
            alert('Please check your email and password')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#FF0059', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0059" translucent={false} />
            <CustamHeddar
                onPress={() => props.navigation.goBack()} />
            <ScrollView style={{ padding: 10 }}>

                <Image source={require('../Asesst/Images/FoodImages.png')} style={{ alignSelf: 'center' }} />

                <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 5, padding: 10 }}>
                    <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold', marginVertical: 10 }}>Login</Text>

                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        value={Email}
                        style={{ width: '100%', backgroundColor: '#FE8A4717', borderRadius: 10, paddingLeft: 15, fontSize: 18, marginBottom: 15 }}
                        placeholder='Email'
                        keyboardType='email-address' />

                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        value={Password}
                        style={{ width: '100%', backgroundColor: '#FE8A4717', borderRadius: 10, paddingLeft: 15, fontSize: 18, marginBottom: 15 }}
                        placeholder='Password'
                        keyboardType='number-pad' />

                    <Text onPress={() => props.navigation.navigate('Forgot_Password')} style={{ textAlign: 'right' }}>Forgot Password?</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <View style={{ borderTopWidth: 1, width: '40%' }}></View>
                        <Text style={{ marginTop: -12, color: 'black', fontSize: 16 }}>Or</Text>
                        <View style={{ borderTopWidth: 1, width: '40%' }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', alignSelf: 'center', justifyContent: 'space-around' }}>
                        <Image source={require('../Asesst/Images/FacebookIcon.png')} />
                        <Image source={require('../Asesst/Images/GoolgeIcon.png')} />
                    </View>

                    <TouchableOpacity onPress={() => LoginBtnApi()}
                        style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 20, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 20, color: 'black' }}>Dont’t have an account ?  <Text onPress={() => props.navigation.navigate('SignUpScreen')} style={{ color: '#FF0059' }}>Register</Text> </Text>

                </View>
            </ScrollView>
        </View>
    );
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ LoginApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)