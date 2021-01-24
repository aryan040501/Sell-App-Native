import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Card({title, price, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    image:{
        borderRadius: 10,
        width: '100%',
        height: 200,
    },
    details: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subtitle: {
        color: "green",
    }

})
