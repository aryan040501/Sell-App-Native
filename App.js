import React, {useState} from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, StatusBar, NativeModules, TouchableWithoutFeedback, Image, Button, Alert, Platform, TextInput, Switch} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'

import Icon from './app/components/Icon'
import Card from "./app/components/Card"
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountsScreen from './app/screens/AccountsScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {

  const [category, setCategory] = useState();

  const categories = [
    {label: "furniture", value: 1},
    {label: "vlothing", value: 2},
    {label: "camera", value: 3},
  ]

  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.screen}>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} placeholder="Category" />
      <AppTextInput placeholder="Email" icon="email"/>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    marginLeft: 10,
  },
})