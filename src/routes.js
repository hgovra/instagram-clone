import React from "react";
import { SafeAreaView, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  useFonts,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

import Feed from "./pages/Feed";
import FeedHeader from "./components/FeedHeader";

const Stack = createStackNavigator();

export default function Routes() {
  let [fontsLoaded] = useFonts({
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              
            }}
          >
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{
                header: () => <FeedHeader />,
                headerStyle: {
                  height: 170,
                },
                headerMode: 'float',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
