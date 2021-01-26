import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import Constants from 'expo-constants'

const listing =[
    {
        id: 1,
        title: 'red jacket for sale',
        price: '100',
        image: require('../assets/jacket.jpeg')
    },
    {
        id: 2,
        title: 'chair for sale',
        price: '200',
        image: require('../assets/chair.jpg')
    }
];

export default function ListingScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList 
                data={listing}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>
                    <Card
                        title={item.title}
                        price={"Rs "+ item.price}
                        image={item.image}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        padding: 20,
        
      },
})
