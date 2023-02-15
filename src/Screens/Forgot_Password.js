import React, { useState } from "react";
import { StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import Apis from "../CollApi/ShortUrl";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ForgotApi } from '../Redux/fetchToDos';


const Forgot_Password = (props) => {
    const [Email, setEmail] = useState('boss90@gmail.com');
    const ForGotBtn = async () => {
        let Bodydata = {
            email: Email
        }
        let resss = await props.ForgotApi(Apis.ForgotApiUrl, Apis.POST, Bodydata)
        console.log('forgotttt--', resss)
        if (resss.data.status) {
            let sendData = {
                resetOtp: resss.data.data.otp,
                resetEmail: resss.data.data.email
            }
            props.navigation.navigate('Reset_PasswordScreen', { ForgotData: sendData })
        } else {
            alert('Please Check your Email')
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: ' #F5F5F5', padding: 20 }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F5F5F5" translucent={false} />
            <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold', marginVertical: 20 }}>Forgot Password?</Text>
            <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Forgot your Password?</Text>
            <Text style={{ fontSize: 16, color: 'black', marginVertical: 40 }}>Please enter the email address associacted with your email. We will email you a link to reset your password.?</Text>

            <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Email</Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={Email}
                style={{ width: '100%', borderBottomWidth: 1, fontSize: 18, marginBottom: 20 }}
                placeholder=' Enter your Email in Mobile Number' />

            <TouchableOpacity onPress={() => ForGotBtn()}
                style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 150, borderRadius: 10, }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>Send</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ ForgotApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot_Password)