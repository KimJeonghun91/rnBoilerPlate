import React, { } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { CustomHeader } from '../../organisms';
import MainScreen from './MainScreen';
import Login from '../../../screens/Login';
import EventLoop from '../../../screens/EventLoop';
import ThemePage from '../../../screens/ThemePage';
import GridSystem from '../../../screens/GridSystem';
import HocPtPage from '../../../screens/HocPtPage';
import ObserverPtPage from '../../../screens/ObserverPtPage';
import GlobalStatePage from '../../../screens/GlobalStatePage';
import RnQueryPage from '../../../screens/RnQueryPage';
import RnQueryDetail from '../../../screens/RnQueryDetail';
import ModalPage from '../../../screens/ModalPage';
import SuspensePage from '../../../screens/SuspensePage';
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
                name="HocPtPage"
                component={HocPtPage}
                options={optionComponent}
            />
            <Stack.Screen
                name="ObserverPtPage"
                component={ObserverPtPage}
                options={optionComponent}
            />
            <Stack.Screen
                name="GlobalStatePage"
                component={GlobalStatePage}
                options={optionComponent}
            />
            <Stack.Screen
                name="RnQueryPage"
                component={RnQueryPage}
                options={optionComponent}
            />
            <Stack.Screen
                name="RnQueryDetail"
                component={RnQueryDetail}
                options={optionComponent}
            />
            <Stack.Screen
                name="ModalPage"
                component={ModalPage}
                options={optionComponent}
            />
            <Stack.Screen
                name="SuspensePage"
                component={SuspensePage}
                options={optionComponent}
            />
        </Stack.Navigator>
    );
};

export default Root;
