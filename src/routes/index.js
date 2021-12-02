import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../components/Cadastro'
import Login from '../components/Login'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                name='Login'
                component ={Login}
                options = {{
                    headerShown: true
                }}
            />

            <Stack.Screen 
                name='Cadastro'
                component ={Cadastro}
                options = {{
                    headerShown: true
                }}
            />

        </Stack.Navigator>
    )
}