import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import SuasDenuncias from '../components/SuasDenuncias'
import Teste from '../components/Teste'
import CustomDrawer from '../components/CustomDrawer'


const Drawer = createDrawerNavigator()

const RotaDrawer = () => {

    return(

            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props}/>}
                //Estilizar todos os links do Drawer
                screenOptions={{
                    headerShown: false, 
                    drawerActiveBackgroundColor: '#DFEEEA',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'black',
                    drawerLabelStyle:
                     {fontSize: 15}}}
            >

                <Drawer.Screen 
                 name='Suas Denúncias'
                 component={SuasDenuncias}
                 />
                
                <Drawer.Screen 
                    name='Teste'
                    component={Teste}
                />
                 
        
                 


            </Drawer.Navigator>
    )
}

export default RotaDrawer