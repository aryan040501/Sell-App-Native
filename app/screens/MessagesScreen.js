import React, {useState} from 'react'
import { View, StatusBar, Text, FlatList, SafeAreaView, StyleSheet, Platform } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import ListItemDelete from '../components/ListItemDelete'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setrefreshing] = useState(false);


    const handleDelete = message => {
        //delete message
        setMessages(messages.filter(m=> m.id !==message.id))
    }

    return (
        <SafeAreaView style = {styles.screen}>
        <View >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                <ListItem 
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={()=>console.log("hahaha")}
                    renderRightActions={()=> <ListItemDelete onPress={()=>handleDelete(item)}/>}
                />)}
                
                ItemSeparatorComponent={()=> <View style={{width: '100%', height: 1, backgroundColor: 'grey'}}/>}
                refreshing={refreshing}
                onRefresh={()=> {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
                />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    pad: {
        paddingTop: 15,
    },
})