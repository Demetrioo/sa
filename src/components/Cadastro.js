import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import styles from '../styles/cadastro'

 const Cadastro = ({navigation}) => {
    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/header.png')}
                    style={styles.imgHeader}
                />
            </View>

            <Text style={styles.text1}>Cadastre-se, é grátis!</Text>
            <Text style={styles.text2}>Crie sua conta</Text>

            <TextInput style={styles.input} placeholder='Nome:'></TextInput>
            <TextInput style={styles.input} placeholder='Sobrenome:'></TextInput>
            <TextInput style={styles.input} placeholder='E-mail:'></TextInput>
            <TextInput style={styles.input} placeholder='CPF:'></TextInput>
            <TextInput style={styles.input} placeholder='Senha:'></TextInput>
            <TextInput style={styles.input} placeholder='Confirme sua senha:'></TextInput>
            
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.carcButton}>
                    <Text style={styles.textButton}>Cadastrar</Text>
               </TouchableOpacity>
               <View style={styles.display}>
                   <Text>Já tem uma conta?</Text>
                   <Text style={styles.p2} onPress={() => navigation.navigate("Login")}> Faça Login</Text>
               </View>
            </View>
        </View>
        </ScrollView> 
    )
}

export default Cadastro