import React, { useState } from "react";
import { Alert, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Apis from "../CollApi/ShortUrl";
import CustamHeddar from "../Comman/CustamHeddar";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { OTPApi } from '../Redux/fetchToDos';
import OTPTextInput from 'react-native-otp-textinput'

const OtpScreen = (props) => {
    console.log('propsssss--', props.route.params.OtpSend)
    //props.route.params.OtpSend.userEmail   props.route.params.OtpSend.userOtp
    const [Email, setEmail] = useState();
    const [otp, setotp] = useState();
    const [BIGOTP, setBIGOTP] = useState();

    const OtpApiBtn = async () => {
        let Bodydata = {
            email: Email,
            otp: BIGOTP
        }
        let otpresss = await props.OTPApi(Apis.Basurl, Apis.otpApiurl, Bodydata)
        console.log('---otp-------', otpresss)
        if (otpresss) {
            props.navigation.navigate('LoginScreen')
        } else {
            Alert.alert('Please check your Otp')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#FF0059', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0059" translucent={false} />
            <CustamHeddar
                onPress={() => props.navigation.goBack()} />
            <ScrollView style={{ padding: 10 }}>

                <Image source={require('../Asesst/Images/deliveryboyride.png')} style={{ alignSelf: 'center' }} />

                <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 5, padding: 10, marginTop: -43 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF0059' }}>{Email}</Text>

                    <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold', marginVertical: 10 }}>OTP</Text>
                    <OTPTextInput />

                    <TouchableOpacity onPress={() => OtpApiBtn()}
                        style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 22, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>SUBMIT</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginVertical: 20, color: 'black' }}>Did’t Receive the OTP? <Text onPress={() => props.navigation.navigate('LoginScreen')} style={{ color: '#FF0059' }}>RESEND</Text> </Text>

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
        ...bindActionCreators({ OTPApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen)