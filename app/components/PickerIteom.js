import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PickerIteom({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
    }
})
