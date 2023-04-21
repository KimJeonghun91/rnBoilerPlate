import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { } from 'react';
import Root from './components/templates/navigation/Root';
import DrawerComponent from './components/templates/navigation/DrawerComponent';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (<DrawerComponent props={props} />);
}

export default function Navigator() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerPosition: 'right', headerShown: false }}
            drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="Root" component={Root} />
        </Drawer.Navigator>
    );
}
