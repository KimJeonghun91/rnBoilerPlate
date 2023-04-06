import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import TextAtom from '../atoms/TextAtom';

interface Props {
    title: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

const ButtonMlc: FC<Props> = ({ title, onPress, containerStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
            <TextAtom style={styles.title}>{title}</TextAtom>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonMlc;