import React, { useMemo } from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeProvider } from '../../assets/theme';
import { ViewAtom, TextAtom, TouchAbleOpAtom } from '../atoms';

const CustomHeader = ({ }: any) => {
    const theme = themeProvider();
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const topBarHeight = 54;


    const useRenderView = useMemo(() => (
        <ViewAtom style={[styles.renderView, { width: theme.layout.window.width, height: topBarHeight, backgroundColor: theme.palette.primary.main }]}>
            <ViewAtom style={[styles.innerView, { height: topBarHeight }]}>
                <TouchAbleOpAtom style={styles.drawerBtn} onPress={() => {
                    try {
                        navigation.toggleDrawer();
                    } catch (error) { console.log('toggleDrawer UNDEFINED'); }
                }}>
                    <Image style={styles.drawerImg} source={require('../../assets/img/ic_drawer.png')} resizeMode="contain" />
                </TouchAbleOpAtom>
            </ViewAtom>
        </ViewAtom>
    ), [theme, navigation, dispatch]);





    // CustomHeader 동작방식이 플랫폼별로 달라서 아래처럼 처리.
    return (
        Platform.OS === 'ios' ? (
            <SafeAreaView style={[styles.safeView, { width: theme.layout.window.width, backgroundColor: theme.palette.background.default }]} edges={['top']}>
                {useRenderView}
            </SafeAreaView>
        ) : (
            useRenderView
        )
    );
};

const styles = StyleSheet.create({
    renderView: { flexDirection: 'row', justifyContent: 'space-between' },
    drawerBtn: { paddingVertical: 1, paddingHorizontal: 8 },
    safeView: { flex: 1 },
    innerView: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingRight: 8, flexDirection: 'row' },
    drawerImg: { width: 26, height: 26 },
});

export default CustomHeader;
