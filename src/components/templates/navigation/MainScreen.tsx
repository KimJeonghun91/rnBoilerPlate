import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../../assets/theme';
import CustomTabBarIcon from './CustomTabBarIcon';
import Main from '../../../screens/Main';
import GridSystem from '../../../screens/GridSystem';
const Tab = createBottomTabNavigator();

const MainScreen = ({ }) => {
    const theme = ThemeProvider();

    return (
        <Tab.Navigator initialRouteName="HealthWrite" backBehavior="none"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [{ display: 'flex' }, null],
            }}
            sceneContainerStyle={[{
                ...Platform.select({
                    ios: { shadowColor: 'rgb(50, 50, 50)', shadowOpacity: 0.1, shadowRadius: 3, shadowOffset: { height: 1, width: 1 } },
                    android: { elevation: 3 },
                }),
            }, { width: theme.layout.window.width }]}>

            <Tab.Screen name="Main" component={Main}
                options={{
                    tabBarIcon: ({ focused }: any) => {
                        return (<CustomTabBarIcon focused={focused} source={require('../../../assets/img/logo.png')} theme={theme} />);
                    },
                }}
            />

            <Tab.Screen name="GridSystem" component={GridSystem}
                options={{
                    tabBarIcon: ({ focused }: any) => {
                        return (<CustomTabBarIcon focused={focused} source={require('../../../assets/img/logo.png')} theme={theme} />);
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default MainScreen;
