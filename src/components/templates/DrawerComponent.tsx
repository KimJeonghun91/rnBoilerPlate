import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Platform, Switch } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextAtom from '../atoms/TextAtom';
import ViewAtom from '../atoms/ViewAtom';
import { useAppDispatch, useTypedSelector } from '../../utils/redux/Store';
import { toggleMode } from '../../utils/redux/ThemeSlice';
import { logout } from '../../utils/redux/AuthSlice';
import { themeProvider } from '../../assets/theme';
import { ImageAtom, TouchAbleOpAtom } from '../atoms';

const DrawerComponent = ({ }) => {
    const theme = themeProvider();
    const authInfo = useTypedSelector((state) => state.auth);
    const navigation = useNavigation<any>();
    const dispatch = useAppDispatch();


    const logOut = useCallback(() => {
        Alert.alert('', '로그아웃 하시겠습니까?',
            [{ text: '취소', style: 'cancel', onPress: () => { } },
            {
                text: '확인', onPress: () => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    dispatch(logout());
                    Alert.alert('', '로그아웃 하였습니다.');
                    navigation.reset({ index: 0, routes: [{ name: 'Login', params: {} }] });
                },
            }], { cancelable: false }
        );
    }, [navigation, dispatch]);






    const useRenderView = useMemo(() => (
        <ViewAtom style={[styles.container, { backgroundColor: theme.palette.background.paper }]}>
            <ScrollView style={styles.scrollCon}>
                <ViewAtom style={[styles.dHeader, { backgroundColor: theme.palette.primary.main }]}>

                    <ViewAtom style={styles.rowEnd}>
                        <TouchAbleOpAtom style={styles.close} onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()); }}>
                            <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/ic_x.png')} resizeMode="contain" />
                        </TouchAbleOpAtom>
                    </ViewAtom>

                    {
                        !authInfo ? <>
                            <TextAtom>로그인이 필요해요</TextAtom>
                        </> : <>
                            <ViewAtom style={[styles.myInfoSub, {}]}>
                                <ViewAtom style={styles.idBox}>
                                    <TextAtom style={styles.txtId}>ID: {authInfo.id}</TextAtom>
                                </ViewAtom>
                            </ViewAtom>
                        </>
                    }

                    <TouchAbleOpAtom style={styles.dnBox} onPress={() => { }}>
                        <TextAtom>DayNight 변경</TextAtom>
                        <Switch
                            style={{ marginLeft: 5 }}
                            trackColor={{ false: theme.palette.grey[500], true: theme.palette.grey[300] }}
                            thumbColor={theme.currentMode === 'light' ? theme.palette.primary.light : theme.palette.grey[300] }
                            ios_backgroundColor={theme.palette.grey[300]}
                            onValueChange={() => { dispatch(toggleMode()); }}
                            value={theme.currentMode === 'light' ? true : false}
                        />
                    </TouchAbleOpAtom>

                </ViewAtom>


                <ViewAtom style={[styles.menuBox, {}]}>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('Main', {}); }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/logo.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>홈</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/logo.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>그리드 레이아웃</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => {
                        navigation.navigate('ColorPage', {});
                    }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/logo.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>컬러 팔레트</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => {
                        navigation.navigate('EventLoop', {});
                    }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/logo.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>이벤트 루프</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { logOut(); }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../assets/img/logo.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>로그아웃</TextAtom>
                    </TouchableOpacity>
                </ViewAtom>
            </ScrollView>
        </ViewAtom>
    ), [theme, authInfo, logOut, navigation]);



    return (
        // useRenderView
        Platform.OS === 'ios' ? (
            <SafeAreaView style={[styles.container, { width: theme.layout.window.width, backgroundColor: theme.palette.background.default }]} edges={['top']}>
                {useRenderView}
            </SafeAreaView>
        ) : (
            useRenderView
        )
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    menuWrap: { flexDirection: 'row', alignItems: 'center', paddingLeft: 25, paddingVertical: 13 },
    menuImg: { width: 22, height: 22 },
    menuText: { fontWeight: 'bold', marginLeft: 15 },
    dHeader: { width: '100%', paddingTop: 0, position: 'relative', borderBottomRightRadius: 40, paddingLeft: 15, paddingBottom: 25 },
    myInfo: { width: '100%' },
    myInfoSub: { width: '100%', flexDirection: 'row', alignItems: 'center', },
    close: { padding: 10 },
    scrollCon: { flex: 1 },
    idBox: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
    divider: { width: '100%', height: 15 },
    menuBox: { width: '100%', paddingVertical: 10 },
    rowEnd: { flexDirection: 'row', justifyContent: 'flex-end' },
    dnBox: { marginTop: 10, flexDirection: 'row', alignItems: 'center' },
    drawerImg: { width: 26, height: 26 },
    txtId: { fontWeight: 'bold' }
});

export default DrawerComponent;
