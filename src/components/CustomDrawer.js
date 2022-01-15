import React from "react";
import { View, Text, Image } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#002F21'}}> 
            {/* PARTE DE CIMA DO DRAWER */}
                <View style={{backgroundColor:'#002F21', padding:10, flexDirection:'row'}}>
                    <Image source={require('../assets/fotoperfil.jpg')} style={{height:80, width:80,borderTopEndRadius: 50, 
                        borderTopStartRadius: 50, borderBottomEndRadius: 50, borderBottomStartRadius: 50, marginBottom:10}}/>
                    <Text style={{color:'white', marginVertical:35, marginLeft:10}}>Bruno Ecker Sanceverino</Text>
                </View>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            {/* PARTE DE BAIXO DO DRAWER */}
    
            <View style={{padding:10, borderTopWidth:1, borderTopColor: '#ccc', backgroundColor:'#B1B7B5'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <Text style={{fontSize:15}}>Sair</Text>
            </TouchableOpacity>
            </View>
        </View>
            

    )
}

export default CustomDrawer