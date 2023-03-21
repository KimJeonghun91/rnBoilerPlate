import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import ViewAtom from "../atoms/ViewAtom";

export default () => (
    <ViewAtom style={styles.container}>
        <ActivityIndicator color='#0000ff' />
    </ViewAtom>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});