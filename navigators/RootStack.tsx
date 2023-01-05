import React, { FunctionComponent }from "react"

// React Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


//Components

import Welcome from "../screens/Welcome";
export type RootStackParameterList = {
  Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParameterList>();

const RootStack: FunctionComponent = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;