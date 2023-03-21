import React from "react";
import { Image, Platform } from "react-native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './screens/Main';
import MyPage from './screens/MyPage';
import Login from './screens/Login';
import DrawerComponent from "./components/templates/DrawerComponent";
import Colors from "./assets/constants/Colors";
import Layout from "./assets/constants/Layout";
import CustomHeader from "./components/organisms/CustomHeader";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const bottomImg = 32;




function MainScreen() {
    return (
        <Tab.Navigator initialRouteName="HealthWrite" backBehavior='none'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [{ display: "flex", }, null]
            }}
            sceneContainerStyle={[{
                ...Platform.select({
                    ios: { shadowColor: "rgb(50, 50, 50)", shadowOpacity: 0.1, shadowRadius: 3, shadowOffset: { height: 1, width: 1 } },
                    android: { elevation: 3 }
                })
            }, { width: Layout.window.width }]}>

            <Tab.Screen name="Main" component={Main} initialParams={{ initialPage: 0 }}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <Image style={{ width: bottomImg, height: bottomImg, tintColor: focused ? Colors.mainColor : Colors.gray01 }}
                                resizeMode={'contain'} source={require('./assets/img/ic_home.png')} />
                        );
                    },
                }}
            />

            <Tab.Screen name="MyPage" component={MyPage}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <Image style={{ width: bottomImg, height: bottomImg, tintColor: focused ? Colors.mainColor : Colors.gray01 }}
                                resizeMode={'contain'} source={require('./assets/img/ic_my.png')} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};



function Root({ navigation }: any) {
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
            <Drawer.Screen name="Root" component={Root} />
        </Drawer.Navigator>
    );
}


export default Navigator;
