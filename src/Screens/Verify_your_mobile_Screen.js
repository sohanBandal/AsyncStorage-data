import React from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustamHeddar from "../Comman/CustamHeddar";


const Verify_your_mobile_Screen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: ' #F5F5F5', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F5F5F5" translucent={false} />
            <CustamHeddar
                onPress={() => props.navigation.goBack()}
                HedderText='Verify your mobile' />
            <ScrollView style={{ backgroundColor: ' #F5F5F5', padding: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', marginVertical: 40 }}>A verification code has been sent to+ 243 6787623 561, enter it below</Text>
                <TextInput style={{ width: '100%', borderBottomWidth: 1, fontSize: 18, marginBottom: 20 }}
                    placeholder=' please enter your OTP'
                    keyboardType='number-pad' />
                <TouchableOpacity
                    style={{ width: 370, backgroundColor: '#FF0059', alignSelf: 'center', marginTop: 150, borderRadius: 10, }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, padding: 10, fontWeight: 'bold' }}>Verify Code</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', marginVertical: 20, color: 'black' }}>Didn’t receive SMS?<Text style={{ color: '#FF0059' }}>Resend Code</Text> </Text>

            </ScrollView>
        </View>
    );
}
export default Verify_your_mobile_Screen;