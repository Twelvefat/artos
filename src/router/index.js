import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import { History, Home, Login, Register, Transaction } from '../pages';
import { colors } from '../utils/Colors';
import { fonts } from '../utils/Fonts';

const Stack = createStackNavigator();
const Tab = AnimatedTabBarNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            tabBarOptions={{
                activeTintColor: colors.text.primary,
                inactiveTintColor: colors.text.secondary,
                activeBackgroundColor: colors.background.softYellow,
                labelStyle: {
                    fontFamily: fonts.primary[500]
                }
            }}
            appearence={{
                dotSize: "small",
                floating: true,
                shadow: false,
                whenInactiveShow: 'icon-only',
                shadow: true,
                tabBarBackground: colors.background.white,
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="home"
                            size={20}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="activity"
                            size={20}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Transaction"
                component={Transaction}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="edit"
                            size={20}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen 
                name="BottomTab"
                component={BottomTab}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                component={Login}
                name="Login"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                component={Register}
                name="Register"
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router