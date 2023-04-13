import React from "react";
import { StyleSheet } from "react-native";
import { RootViewMlc } from "../components/molecules";
import { ThemeProvider } from "../assets/theme";
import { ViewAtom, TextAtom } from "../components/atoms";



const EventLoop = () => {
    const theme = ThemeProvider();

    return (
        <RootViewMlc>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.default }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.primary }]}>text.primary</TextAtom>
            </ViewAtom>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.paper }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.disabled }]}>text.disabled</TextAtom>
            </ViewAtom>
            <ViewAtom style={[styles.cBg, { backgroundColor: theme.palette.background.neutral }]}>
                <TextAtom style={[styles.cTxt, { color: theme.palette.text.secondary }]}>text.secondary</TextAtom>
            </ViewAtom>


            <ViewAtom style={[styles.cBg, { backgroundColor:theme.palette.background.neutral, flexDirection: 'row' }]}>
                <ViewAtom style={styles.sBg}>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[100] }]}>Grey100</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[200] }]}>Grey200</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[300] }]}>Grey300</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[400] }]}>Grey400</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[500] }]}>Grey500</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[600] }]}>Grey600</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.grey[700] }]}>Grey700</TextAtom>
                </ViewAtom>
                <ViewAtom style={styles.sBg}>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.primary.main }]}>primary.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.secondary.main }]}>secondary.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.success.main }]}>success.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.warning.main }]}>warning.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.info.main }]}>info.main</TextAtom>
                    <TextAtom style={[styles.cTxt, { color: theme.palette.error.main }]}>error.main</TextAtom>
                </ViewAtom>
            </ViewAtom>
        </RootViewMlc>
    )
}


const styles = StyleSheet.create({
    cBg: { width: '100%', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' },
    sBg: { flex: 1, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
    cTxt: { textAlign: 'center', marginVertical: 5 }
});
export default EventLoop;