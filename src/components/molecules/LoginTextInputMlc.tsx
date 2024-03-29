import React, { StyleSheet, TextInputProps } from 'react-native';
import TextInputAtom from '../atoms/TextInputAtom';
import ViewAtom from '../atoms/ViewAtom';
import { ThemeProvider } from '../../assets/theme';

type RootViewMlcProps = TextInputProps & {};

const RootViewMlc = ({ ...props }: RootViewMlcProps) => {
    const theme = ThemeProvider();

    return (
        <ViewAtom style={[styles.inputWraper, { borderColor: theme.palette.grey[500] }]}>
            <TextInputAtom
                {...props}
                style={[styles.tiLogin, { color: theme.palette.text.primary }]} />
        </ViewAtom>
    );
};

RootViewMlc.defaultProps = {
    style: {}, // 디폴트
};

const styles = StyleSheet.create({
    tiLogin: { flex: 1, paddingLeft: 10 },
    inputWraper: { width: 340, paddingVertical: 3, marginTop: 10, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 5 },
});

export default RootViewMlc;
