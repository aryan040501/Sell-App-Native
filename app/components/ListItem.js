import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({title, subtitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor="grey" onPress={onPress}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    details:{
        marginLeft: 10,
        marginTop: -10,
        justifyContent: 'center'
    },
    container: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title:{
        paddingTop: 10,
    },
    subtitle:{
        color: "#6e6969"
    }
})
