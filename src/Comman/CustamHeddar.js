import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";


const CustamHeddar = (props) => {
    return(
<View style={{flexDirection:'row',padding:10,alignItems:'center'}}>
    <View style={{width:'15%'}}>
    <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../Asesst/Images/BackArrow.png')} style={{tintColor:'black'}}/>
                </TouchableOpacity>
    </View>
    <View style={{width:'75%'}}>
    <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{props.HedderText}</Text>
    </View>
</View>
    );
}
export default CustamHeddar;