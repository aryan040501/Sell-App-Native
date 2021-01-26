import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.delIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
            </View>
            <Image resizeMode="contain" style={styles.img} source= {require('../assets/chair.jpg')}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    delIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    container:{
        backgroundColor: '#000',
        flex: 1,
    },
    img:{
        width: '100%',
        height: '100%',
    },
})
