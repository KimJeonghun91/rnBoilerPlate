import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootViewMlc } from "../components/molecules";
import { CardView } from "../components/organisms";
import { TextAtom, ViewAtom } from "../components/atoms";
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
 
        </RootViewMlc>
    )
}
export default Main;