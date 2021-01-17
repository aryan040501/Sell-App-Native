import React from 'react'
import { Button, ImageBackground, Image, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require('../assets/bg.jpg')}
            style = {styles.ImgBackground}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={styles.text}>Sell What you Dont Need</Text>
            <View style={styles.buttons}>
                <Button title="login" style={styles.login} color="pink"/>
                <Button title="sign--up" style={styles.signup} color="green"/>
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
        flex: 1,
        justifyContent: "flex-end",
    },
    login: {
        width: '100%',
    },
    signup: {
        width: '100%',
    },
})
