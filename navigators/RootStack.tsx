import React, { FunctionComponent }from "react"

// React Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { Text } from "react-native";

//Components

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";

import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "./../assets/avi/avatar.png";

export type RootStackParameterList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParameterList>();

const RootStack: FunctionComponent = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0, 
            elevation: 0, 
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile 
            img={Avi}
            imgContainerStyle={{backgroundColor: colors.tertiary}}/>
          ), 
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Samrez!"
                subText="Welcome Back"
                {...props}/>
            ),

          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;