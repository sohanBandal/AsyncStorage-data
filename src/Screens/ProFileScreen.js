import React from "react";
import { FlatList, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

const ProFileScreen = (props) => {
    const Data = [
        { EditName: 'My Account', arrowImage: require('../Asesst/Images/RightArrow.png'), EditNameTow: 'Favourites, Offers & Settings' },
        { EditName: 'Addresses', arrowImage: require('../Asesst/Images/RightArrow.png'), EditNameTow: 'Share, Edit & Add New Addresses' },
        { EditName: 'Payments & Refunds', arrowImage: require('../Asesst/Images/RightArrow.png'), EditNameTow: 'Refund Status & Payment Modes' },
        { EditName: 'Help', arrowImage: require('../Asesst/Images/RightArrow.png'), EditNameTow: 'FAQ & Links' },


    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 15, borderRadius: 10, padding: 15, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>{item.EditName}</Text>
                        <Text>{item.EditNameTow}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Image source={item.arrowImage} />
                        <Text style={{ position: 'absolute', fontSize: 18, fontWeight: 'bold', color: 'orange', right: 1, top: -10 }}>{item.EditIcon}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FF0059', }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FF0059" translucent={false} />
            <View style={{ padding: 10 }}>
                <Image source={require('../Asesst/Images/Propfileicon.png')} style={{ alignSelf: 'center' }} />
                <View style={{ width: '100%', backgroundColor: '#FFF2F2', borderRadius: 5, padding: 10, marginTop: 20, }}>
                    <View style={{ width: '100%', backgroundColor: 'white', marginTop: 15, borderRadius: 10, padding: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Full Name</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'orange' }}>EDIT</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                    <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 10 }}>
                        <Text style={{ marginLeft: 20, marginVertical: 20, color: 'black', fontSize: 24, fontWeight: 'bold' }}>LogOut</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );

}
export default ProFileScreen;