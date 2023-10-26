import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

export default function RouteHandler() {
    return (
        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
                header: () => {
                    return <Header />;
                },
            }}
        >
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    );
}