import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from './components/templates/navigation/DrawerComponent';
import Root from './components/templates/navigation/Root';

const Drawer = createDrawerNavigator();


export default function Navigator() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerPosition: 'right', headerShown: false }}
            drawerContent={() => (<DrawerComponent />)}>
            <Drawer.Screen name="Root" component={Root} />
        </Drawer.Navigator>
    );
}
