import React, { FC } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TouchAbleOpAtom, TextAtom } from '../atoms';

interface Props {
    title: string;
    fontSize?: number;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

const ButtonMlc: FC<Props> = ({ title, onPress, containerStyle, fontSize = 16 }) => {
    return (
        <TouchAbleOpAtom style={[styles.button, containerStyle]} onPress={onPress}>
            <TextAtom style={[styles.title, { fontSize: fontSize }]}>{title}</TextAtom>
        </TouchAbleOpAtom>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ButtonMlc;
