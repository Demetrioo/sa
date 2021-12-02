import React from 'react'
import {View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../styles/login'
import {Linking} from 'react-native'

const Login = ({navigation}) => {


    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Image 
                    style={styles.imgHeader}
                    source={require('../assets/header.png')}
                />
            </View>
            <View>
               
                <Text style={styles.text1}>Bem-vindo(a) de volta!</Text>
                <Text style={styles.text2}>Faça login na sua conta!</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Senha"/>
                <Text style={styles.recsenha} onPress={() => navigation.navigate("RecSenha")}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.containerButton}>

            <TouchableOpacity style={styles.carcButton}>
                <Text style={styles.textButton}>Logar</Text>
            </TouchableOpacity>
                <View style={styles.display}>
                    <Text>Não tem uma conta?</Text>
                    <Text style={styles.p2} onPress={() => navigation.navigate("Cadastro")}> Cadastra-se</Text>
                </View>
            </View>

        </ScrollView>

    )
}

export default Login