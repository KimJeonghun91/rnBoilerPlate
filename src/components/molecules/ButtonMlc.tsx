import React, { FC, useMemo } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TouchAbleOpAtom, TextAtom } from '../atoms';
import { ThemeProvider } from '../../assets/theme';

interface Props {
    title: string;
    fontSize?: number;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

const ButtonMlc: FC<Props> = ({ title, onPress, containerStyle, fontSize = 16 }) => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            button: { paddingVertical: 15, paddingHorizontal: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
            title: { color: theme.palette.grey[0], fontWeight: 'bold' },
        }), [theme]
    );


    return (
        <TouchAbleOpAtom style={[styles.button, containerStyle]} onPress={onPress}>
            <TextAtom style={[styles.title, { fontSize: fontSize }]}>{title}</TextAtom>
        </TouchAbleOpAtom>
    );
};

export default ButtonMlc;
