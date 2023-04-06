import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootViewMlc } from "../components/molecules";
import { CardView } from "../components/organisms";
import { ViewAtom } from "../components/atoms";
import { ThemeProvider } from "../assets/theme";



const Main = () => {
    const theme = ThemeProvider();
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {

        };
        fetchData();
        return () => { };
    }, []);


    return (
        <RootViewMlc>
            <ViewAtom style={{ flexDirection: 'row', width: theme.layout.window.width }}>
                <CardView style={{ padding: 20 }} />

            </ViewAtom>
        </RootViewMlc>
    )
}
export default Main;