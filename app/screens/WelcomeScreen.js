import React from 'react'
import { Button, ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
export default function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={1}
            source={require('../assets/bg.jpg')}
            style = {styles.ImgBackground}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={styles.text}>Sell What you Dont Need</Text>
            <View style={styles.buttons1}>
                <AppButton title="login" style={styles.appbutton}/>
            </View>
            <View style={styles.buttons}>
                <AppButton title="SignUp" style={styles.appbutton}/>
            </View>
            
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    ImgBackground : {
        flex: 1,
    },
    logoContainer: {
        zIndex: 999,
    },
    logo:{
        top: 230,
        width: '100%',
        height: '10%',
    },
    text: {
        color: 'white',
        top: 210,
        left: 100,
    },
    buttons: {
        marginTop:-5,
        flex: 0,
        justifyContent: "flex-end",
        padding: 10,
    },
    buttons1: {
        marginTop: 580,
        flex: 0,
        justifyContent: "flex-end",
        padding: 10,
    },
    login: {
        width: '100%',
    },
    signup: {
        width: '100%',
    },
})
