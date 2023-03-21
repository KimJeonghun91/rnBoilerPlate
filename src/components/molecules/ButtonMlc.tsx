import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../assets/constants/Colors";
import ViewAtom from "../atoms/ViewAtom";

export default () => (
    <ViewAtom style={styles.container}>
        <ActivityIndicator color={Colors.mainColor} />
    </ViewAtom>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});