import React, { } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { CustomHeader } from '../../organisms';
import MainScreen from './MainScreen';
import Login from '../../../screens/Login';
import EventLoop from '../../../screens/EventLoop';
import ColorPage from '../../../screens/ColorPage';
import * as IF from '../../../utils/InterFace';
const Stack = createStackNavigator<IF.RootStackParams>();

const Root = () => {
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
                    header: props => <CustomHeader {...props} />,
                }}
            />
            <Stack.Screen
                name="EventLoop"
                component={EventLoop}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
                    header: props => <CustomHeader {...props} />,
                }}
            />
            <Stack.Screen
                name="ColorPage"
                component={ColorPage}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true, gestureEnabled: false,
                    header: props => <CustomHeader {...props} />,
                }}
            />
        </Stack.Navigator>
    );
};

export default Root;
