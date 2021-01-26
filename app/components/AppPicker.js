import React, {useState} from 'react'
import { Modal, Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PickerIteom from './PickerIteom';


export default function AppPicker({icon, items, onSelectItem, selectedItem, placeholder}) {
    
    const [modalv, setModalv] = useState(false);

    return (

        <React.Fragment>
        <TouchableWithoutFeedback onPress={()=>setModalv(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}
            <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
            <MaterialCommunityIcons name="chevron-down" size={20} color="white" />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalv}>
            <Button title="close" onPress={()=>setModalv(false)}/>
            <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item})=><PickerIteom label={item.label} onPress={()=> {
                    setModalv(false); 
                    onSelectItem(item)}}
                />
                }
            />
        </Modal>
            
        </React.Fragment>
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
    text:{
        flex: 1,
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
