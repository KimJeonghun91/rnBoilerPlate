import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../../assets/theme';
import Main from '../../../screens/Main';
import GridSystem from '../../../screens/GridSystem';
const Tab = createBottomTabNavigator();

function CustomTabBarIcon({ focused, source }: any) {
    const theme = ThemeProvider();

    return (
        <Image style={[styles.imgSize, { tintColor: focused ? theme.palette.primary.main : theme.palette.grey[500] }]}
            resizeMode={'contain'} source={source}
        />
    );
}

const optionComponent = {
    tabBarIcon: (props: { color: string, focused: boolean, size: number }) => {
        return (<CustomTabBarIcon focused={props.focused} source={require('../../../assets/img/logo.png')} />);
    },
};

const MainScreen = ({ }) => {
    const theme = ThemeProvider();

    return (
        <Tab.Navigator initialRouteName="HealthWrite" backBehavior="none"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [{ display: 'flex' }, null],
            }}
            sceneContainerStyle={[styles.scenenStyle, { width: theme.layout.window.width }]}>
            <Tab.Screen name="Main" component={Main} options={optionComponent} />
            <Tab.Screen name="GridSystem" component={GridSystem} options={optionComponent} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    imgSize: {
        width: 32, height: 32,
    },
    scenenStyle: {
        ...Platform.select({
            ios: { shadowColor: 'rgb(50, 50, 50)', shadowOpacity: 0.1, shadowRadius: 3, shadowOffset: { height: 1, width: 1 } },
            android: { elevation: 3 },
        }),
    },
});

export default MainScreen;
