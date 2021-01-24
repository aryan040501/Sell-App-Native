import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpeg')}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Jacket for Sale</Text>
                <Text style={styles.price}>Rs 100</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: "green",
    },
})
