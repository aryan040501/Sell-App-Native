import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import ListItemDelete from '../components/ListItemDelete'
import Icon from '../components/Icon'


const menuItems = [
    {   
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: "red",
        }
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: "dodgerblue",
        }
    }
    
]

export default function AccountsScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title="Aryaman"
                subtitle="aryamansinha@gmail.com"
                image={require("../assets/mosh.jpg")}
            />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item=> item.title}
                    ItemSeparatorComponent={()=> <View style={{width: '100%', height: 1, backgroundColor: 'black'}}/>}
                    renderItem={({item})=> 
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }/>
                }
                />
            </View>
            <View style={styles.container}>
            <ListItem
                title="LogOut"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                } />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
      },
    container:{
        marginVertical: 20,
        backgroundColor: 'grey'
    }
})
