import React, { } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { CustomHeader } from '../../organisms';
import MainScreen from './MainScreen';
import Login from '../../../screens/Login';
import EventLoop from '../../../screens/EventLoop';
import ThemePage from '../../../screens/ThemePage';
import GridSystem from '../../../screens/GridSystem';
import HocPage from '../../../screens/HocPage';
import * as IF from '../../../utils/InterFace';
const Stack = createStackNavigator<IF.RootStackParams>();

const optionComponent = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
    header: (props: any) => <CustomHeader {...props} />,
};

const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={optionComponent}
                initialParams={{ title: '홈' }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false,
                }}
            />
            <Stack.Screen
                name="GridSystem"
                component={GridSystem}
                options={optionComponent}
            />
            <Stack.Screen
                name="EventLoop"
                component={EventLoop}
                options={optionComponent}
            />
            <Stack.Screen
                name="ThemePage"
                component={ThemePage}
                options={optionComponent}
            />
            <Stack.Screen
                name="HocPage"
                component={HocPage}
                options={optionComponent}
            />
        </Stack.Navigator>
    );
};

export default Root;
