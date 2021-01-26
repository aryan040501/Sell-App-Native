import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput:{
        fontSize:18,
        fontFamily: Platform.OS === 'android'? "Roboto" : "Avenir",
    },
    icon:{
        marginRight: 10,
        marginTop: 5,
    },
})
