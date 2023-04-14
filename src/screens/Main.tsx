import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Grid, GridFlexItem, RootViewMlc } from '../components/molecules';
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
        <RootViewMlc style={{}}>
            <ViewAtom style={{ marginTop: 20, width: theme.layout.window.contentWidth }}>
                <Grid rowGap={15} columnGap={15}>
                    <GridFlexItem size={1}>
                        <CardView title={'Grid'} subTitle={'그리드 레이아웃'}>
                            <ViewAtom>
                                <TextAtom>5/12</TextAtom>
                            </ViewAtom>
                        </CardView>
                    </GridFlexItem>

                    <GridFlexItem size={1}>
                        <CardView borderRadius={5}>
                            <TextAtom>5/12</TextAtom>
                        </CardView>
                    </GridFlexItem>
                </Grid>
            </ViewAtom>
        </RootViewMlc>
    )
}
export default Main;