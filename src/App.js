
import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Image, Text, Pressable, Linking} from 'react-native';
const colorGithub = '#010409';
const colorfontGithub = '#C9D1D9';
const colorGit = '#8b949e';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/94770042?s=96&v=4'
const urltoGithub = 'https://github.com/JulioSilvaDEV';
const App = () => {

    const handlePressãoGoToGithub = async () => {
        console.log('Verificando link');
       const res = await Linking.canOpenURL(urltoGithub);
       if(res){
        console.log('Link aprovado');
        console.log('Abrindo link');
       await Linking.openURL(urltoGithub);
       }
    }
    return (
        <SafeAreaView  style={style.container}> 
        <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
    <View style={style.content}>
        <Image style={style.avatar} source={{uri:imageProfileGithub}}/>
        <Text style={[style.defaultText,style.name]}>Julio Silva</Text>
        <Text style={[style.defaultText,style.nickname]}>JulioDev</Text>
        <Text style={[style.defaultText, style.description]}>Estudante de Ánalise e desenvolvimento de sistemas.</Text>
        <Pressable onPress={handlePressãoGoToGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
        </View>
        </Pressable>
    </View>
         </SafeAreaView> 
    );
};

export default App;


const style = StyleSheet.create({
    container: { // column
        backgroundColor: colorGithub,
        flex: 1, //Expandir para tela inteira
        justifyContent: 'center',
    
    },
    content:{
       alignItems:'center',
       padding: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 2, 
    },
    defaultText:{
        color:colorfontGithub,

    },
    name:{
        fontSize:24,
        marginTop:20,
        fontWeight:'bold',
    },
    nickname:{
        fontSize:18,
        color:colorGit,
    },
    description:{
        fontSize: 14,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:colorGit,
        borderRadius: 10,
        padding: 20,
        marginTop:25,
    },
    textButton:{
        fontSize: 16,
        fontWeight:'bold',
    },

 } );
