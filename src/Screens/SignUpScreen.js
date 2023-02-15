import React, { useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustamHeddar from "../Comman/CustamHeddar";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SigupApi } from '../Redux/fetchToDos';
import Apis from "../CollApi/ShortUrl";

const SignUpScreen = (props) => {

    const [Email, setEmail] = useState('bandal11@gmail.com');
    const [Name, setName] = useState('boss');
    const [Password, setPassword] = useState('123456789');

    const SignUpBtn = async () => {
        let Bodydata = {
            email: Email,
            name: Name,
            password: Password
        }
        let resss = await props.SigupApi(Apis.SignUpurl, Apis.POST, Bodydata)
        console.log('resssss--------', resss)
        if (resss.data.status) {
            let Senddata = {
                userOtp: resss.data.data.otp,
                userEmail: resss.data.data.email
            }
            console.log('Senddata======', Senddata)
            props.navigation.navigate('OtpScreen', { OtpSend: Senddata })
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FF0059', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0059" translucent={false} />
            <CustamHeddar
                onPress={() => props.navigation.goBack()} />
            <ScrollView style={{ padding: 10 }}>


                <Image source={require('../Asesst/Images/deliveryboyride.png')} style={{ alignSelf: 'center' }} />

                <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 5, padding: 10, marginTop: -50 }}>
                    <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold', marginVertical: 10 }}>Sign Up</Text>

                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        value={Email}
                        style={{ width: '100%', backgroundColor: '#FE8A4717', borderRadius: 10, paddingLeft: 15, fontSize: 18, marginBottom: 15 }}
                        placeholder='Enter Email Id/ Phone No.'
                        keyboardType='email-address' />

                    <TextInput
                        onChangeText={(text) => setName(text)}
                        value={Name}
                        style={{ width: '100%', backgroundColor: '#FE8A4717', borderRadius: 10, paddingLeft: 15, fontSize: 18, marginBottom: 15 }}
                        placeholder='Password'
                        keyboardType='number-pad' />

                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        value={Password}
                        style={{ width: '100%', backgroundColor: '#FE8A4717', borderRadius: 10, paddingLeft: 15, fontSize: 18, marginBottom: 15 }}
                        placeholder='Confirm Password'
                        keyboardType='number-pad' />

                    <TouchableOpacity onPress={() => SignUpBtn()}
                        style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 20, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>SIGN UP</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 20, color: 'black' }}>Dont’t have an account ?  <Text onPress={() => props.navigation.navigate('LoginScreen')} style={{ color: '#FF0059' }}>Login</Text> </Text>

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
        ...bindActionCreators({ SigupApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)