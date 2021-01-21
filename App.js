import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, StatusBar, NativeModules, TouchableWithoutFeedback, Image, Button, Alert, Platform} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  const {landscape} = useDeviceOrientation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text style={{
        //fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        textTransform: "capitalize",
        textAlign: "justify",
        padding: 10,

      }}>I love React native! This is my first react native app.. Heres my some text</Text>

    </View>

    

  );
}

