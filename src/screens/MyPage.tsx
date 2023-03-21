import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RootViewMlc from "../components/molecules/RootViewMlc";
import TextAtom from "../components/atoms/TextAtom";



const Intro = () => {
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {

        };
        fetchData();
        return () => { };
    }, []);


    return (
        <RootViewMlc>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps='handled'>
                <TextAtom>로딩 중...</TextAtom>
            </ScrollView>
        </RootViewMlc>
    )
}
export default Intro;