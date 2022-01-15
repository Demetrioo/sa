import React from 'react'
import { View, Button,Text, Image, TouchableOpacity} from 'react-native'

import styles from '../styles/suasDenuncias'


const SuasDenuncias = ({navigation}) => {


    return(
        <View style={styles.container}>
            <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View style={{width:100, paddingTop:10,paddingBottom:10}}>
                <Image
                    source={require('../assets/fotoperfil.jpg')} style={styles.imgperfil}
                />
                </View>
            </TouchableOpacity>
            <View style={styles.header}>
            <Text style={styles.textHeader}>Suas Denúncias</Text>
            </View>
            </View>
            <View style={styles.centro}>
                <Image style={{marginBottom:50}}
                    source={require('../assets/balao.png')}
                    />
                <Text style={styles.p1}>Você não possui nenhuma denúncia ativa!</Text>
                <Text style={styles.p2}>Denuncie agora no botão abaixo!</Text>
            </View>

            
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.img}>
                    <Image 
                        source={require('../assets/add-denuncia.png')}
                    />
                </TouchableOpacity>
   
        </View>
    )
}

export default SuasDenuncias