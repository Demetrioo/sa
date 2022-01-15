import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1
    },
    centro:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    p1: {
        fontSize:25,
        textAlign:'center',
        marginBottom:25
    },
    p2:{
        fontSize:18,
        textAlign:'center'
    },
    img:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
    },
    imgperfil: {
        width: 35,
        height: 35,
        marginTop:25,
        marginLeft: 10,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
    },
    flex:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#002F21'
    },
    header:{
        marginTop:35,
        textAlign:'center',
        width:215,
        padding:10,
        paddingBottom:30
    },
    textHeader: {
        color:'#fff',
        fontSize:17
    }
})