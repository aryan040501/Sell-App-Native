import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function button({title}) {
    return (
        <TouchableOpacity style = {styles.appbutton}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    appbutton:{
        backgroundColor: "dodgerblue",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text:{
        color: "white",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})
