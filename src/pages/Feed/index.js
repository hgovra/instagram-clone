import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Feather } from '@expo/vector-icons';

import {
  useFonts,
  WorkSans_500Medium,
  WorkSans_700Bold
} from '@expo-google-fonts/work-sans';

import { Container, HomeBackground, Titulo } from './styles';

export default () => {
  let [fontsLoaded] = useFonts({
    WorkSans_500Medium,
    WorkSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <HomeBackground >
          <Titulo>
            Instagram
          </Titulo>
          <Feather name="camera" size={48} color="#e09b9c" />
        </HomeBackground>
      </Container>
    );
  }
};