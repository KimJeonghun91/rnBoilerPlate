import React from 'react';
import { Image, Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './screens/Main';
import GridSystem from './screens/GridSystem';
import Login from './screens/Login';
import EventLoop from './screens/EventLoop';
import ColorPage from './screens/ColorPage';
import { DrawerComponent } from './components/templates';
import { CustomHeader } from './components/organisms';
import * as IF from './utils/InterFace';
import { ThemeProvider } from './assets/theme';
const Stack = createStackNavigator<IF.RootStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const bottomImg = 32;




function MainScreen() {
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
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ width: bottomImg, height: bottomImg, tintColor: focused ? theme.palette.primary.main : theme.palette.grey[500] }}
                                resizeMode={'contain'} source={require('./assets/img/ic_home.png')} />
                        );
                    },
                }}
            />

            <Tab.Screen name="GridSystem" component={GridSystem}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ width: bottomImg, height: bottomImg, tintColor: focused ? theme.palette.primary.main : theme.palette.grey[500] }}
                                resizeMode={'contain'} source={require('./assets/img/ic_my.png')} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}



function Root({ }: any) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false,
                }}
            />
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
                    header: props => <CustomHeader {...props} />
                }}
            />
            <Stack.Screen
                name="EventLoop"
                component={EventLoop}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
                    header: props => <CustomHeader {...props} />
                }}
            />
            <Stack.Screen
                name="ColorPage"
                component={ColorPage}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
                    header: props => <CustomHeader {...props} />
                }}
            />
        </Stack.Navigator>
    );
}

function Navigator() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerPosition: 'right', headerShown: false }}
            drawerContent={(props: any) => (
                <DrawerComponent {...props} />
            )}>
            <Drawer.Screen name='Root' component={Root} />
        </Drawer.Navigator>
    );
}


export default Navigator;