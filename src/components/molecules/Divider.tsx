
import React, { useMemo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import ViewAtom from '../atoms/ViewAtom';
import { ThemeProvider } from '../../assets/theme';

const Divider = ({ }: ViewProps) => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            divider: { width: '100%', height: 1, backgroundColor: theme.palette.grey[400] },
        }), [theme]
    );

    return (
        <ViewAtom style={styles.divider} />
    );
};

Divider.defaultProps = {
};

export default Divider;
