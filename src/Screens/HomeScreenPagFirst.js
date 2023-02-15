import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HomeCatApi } from '../Redux/fetchToDos';
import Apis from "../CollApi/ShortUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreenPagFirst = (props) => {
    const [detail, setdetail] = useState()
    useEffect(() => {
        HomeDetail()
    }, [])

    const HomeDetail = async () => {
        let ressss = await props.HomeCatApi(Apis.HomeCategoryApi, Apis.GET)
        console.log('ressshome--', JSON.stringify(ressss))
        if (ressss.data) {
            setdetail(ressss.data.data)
        }
    };
    const LogUotbtn = async () => {
        await AsyncStorage.removeItem('AlldataSave')
        props.navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] })
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <ImageBackground source={require('../Asesst/Images/Rectangle.png')} style={{ marginHorizontal: 10, padding: 10, justifyContent: 'space-around', overflow: 'hidden', borderRadius: 10, alignItems: 'center', marginVertical: 20 }}>
                    {/* <Image source={item.ItemImage} /> */}
                    <Text style={{ fontSize: 18, color: 'white' }}>{item.price}</Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>{item.sub_cate}</Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>{item.name}</Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>{item._id}</Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>{item.description}</Text>

                </ImageBackground>
            </TouchableOpacity>

        )
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F5F5F5" translucent={false} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: '10%' }}>DELIVER TO</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginVertical: 10 }}>
                    <Image source={require('../Asesst/Images/Location.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Home. Mansorovar jaipur</Text>
                    <TouchableOpacity>
                        <Image source={require('../Asesst/Images/DownArrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <TextInput style={{ backgroundColor: '#A1A1A12B', width: '85%', borderRadius: 10, textAlign: 'center', fontSize: 18, paddingHorizontal: 40 }}
                        placeholder='Search for food' />
                    <Image source={require('../Asesst/Images/SerchIcon.png')} style={{ position: 'absolute', left: 20 }} />
                    <TouchableOpacity style={{ backgroundColor: '#FF0059', padding: 10, }}>
                        <Image source={require('../Asesst/Images/SetingIcon.png')} style={{ padding: 10 }} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../Asesst/Images/Bennar.png')} style={{ width: '100%', marginVertical: 20, overflow: 'visible' }} />
            </View>

            <Text style={{ fontSize: 21, color: 'black', marginLeft: 10, fontWeight: 'bold' }}>Categories</Text>
            <Text onPress={() => LogUotbtn()} style={{ fontSize: 30, color: 'black', marginLeft: 10, fontWeight: 'bold', textAlign: 'center' }}>LogOtp</Text>

            <FlatList
                data={detail}
                renderItem={renderItem}
                keyExtractor={item => item.id} />

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
        ...bindActionCreators({ HomeCatApi }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenPagFirst)