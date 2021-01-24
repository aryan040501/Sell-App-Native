import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, StatusBar, NativeModules, TouchableWithoutFeedback, Image, Button, Alert, Platform} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import { AntDesign } from '@expo/vector-icons';

import Card from "./app/components/Card"
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {

  const {landscape} = useDeviceOrientation();
  return (
    <ListingDetailsScreen/>
  );
}