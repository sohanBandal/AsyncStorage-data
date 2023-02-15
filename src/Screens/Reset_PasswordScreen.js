import React, { useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustamHeddar from "../Comman/CustamHeddar";
import OTPTextInput from 'react-native-otp-textinput'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ResetPassApi } from '../Redux/fetchToDos';
import Apis from "../CollApi/ShortUrl";


const Reset_PasswordScreen = (props) => {
    console.log('resetpass=======', props.route.params.ForgotData)

    const [Email, setEmail] = useState(props.route.params.ForgotData.resetEmail);
    const [Otp, setOtp] = useState(props.route.params.ForgotData.resetOtp);
    const [otp, setotp] = useState();
    const [Password, setPassword] = useState();

    const ResetPassBtn = async () => {
        let Bodydata = {
            email: Email,
            otp: Otp,
            password: Password
        }
        let resss = await props.ResetPassApi(Apis.ForgotApiUrl2, Apis.POST, Bodydata)
        console.log('--resssresetpasss----', resss)
        if (resss) {
            props.navigation.navigate('LoginScreen')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: ' #F5F5F5', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F5F5F5" translucent={false} />
            <CustamHeddar
                onPress={() => props.navigation.goBack()}
                HedderText='Reset Password' />
            <ScrollView style={{ backgroundColor: ' #F5F5F5', padding: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF0059', marginBottom: 20 }}>{Email}</Text>
                <OTPTextInput
                    handleTextChange={(text) => setotp(text)}
                    defaultValue={otp}
                />
                <TextInput
                    onChangeText={(test) => setPassword(test)}
                    value={Password}
                    style={{ marginTop: 20, width: '100%', borderBottomWidth: 1, fontSize: 18, marginBottom: 20 }}
                    placeholder='New Password'
                    keyboardType='number-pad' />

                <TouchableOpacity onPress={() => ResetPassBtn()}
                    style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 150, borderRadius: 10, }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>Verify Code</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', marginVertical: 20, color: 'black' }}>Don’t receive SMS?<Text style={{ color: '#FF0059' }}> Resend Code</Text> </Text>

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
        ...bindActionCreators({ ResetPassApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset_PasswordScreen)