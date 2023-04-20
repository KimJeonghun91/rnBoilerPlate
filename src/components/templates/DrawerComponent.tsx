import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextAtom from '../atoms/TextAtom';
import ViewAtom from '../atoms/ViewAtom';
import { useAppDispatch, useTypedSelector } from '../../utils/redux/Store';
import { logout } from '../../utils/redux/AuthSlice';
import { themeProvider } from '../../assets/theme';

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
        <ViewAtom style={[styles.container, { backgroundColor: theme.palette.grey[0] }]}>
            <ScrollView style={styles.scrollCon}>
                <ViewAtom style={[styles.dHeader, { backgroundColor: theme.palette.grey[500] }]}>
                    {
                        !authInfo ? <>
                            <TextAtom>로그인이 필요해요</TextAtom>
                        </> : <>
                            <ViewAtom style={[styles.myInfo, { backgroundColor: theme.palette.grey[500] }]}>
                                <TextAtom>내 정보</TextAtom>
                            </ViewAtom>

                            <ViewAtom style={[styles.myInfoSub, { backgroundColor: theme.palette.grey[500] }]}>
                                <ViewAtom style={styles.idBox}>
                                    <TextAtom>{authInfo.id}</TextAtom>
                                </ViewAtom>
                            </ViewAtom>
                        </>
                    }

                    <TouchableOpacity style={styles.close} onPress={() => {
                        navigation.dispatch(DrawerActions.closeDrawer());
                    }}>
                        <TextAtom>닫기</TextAtom>
                    </TouchableOpacity>
                </ViewAtom>

                <ViewAtom style={[styles.divider, { backgroundColor: theme.palette.grey[500] }]} />

                <ViewAtom style={[styles.menuBox, { backgroundColor: theme.palette.grey[0] }]}>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('Main', {}); }}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_home.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>홈</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_my.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>그리드 레이아웃</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => {
                        navigation.navigate('ColorPage', {});
                    }}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_my.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>컬러 팔레트</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => {
                        navigation.navigate('EventLoop', {});
                    }}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_my.png')} resizeMode="contain" />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>이벤트 루프</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { logOut(); }}>
                        <TextAtom allowFontScaling={false} style={styles.menuText}>로그아웃</TextAtom>
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
    dHeader: { width: '100%', paddingTop: 20, position: 'relative' },
    myInfo: { width: '100%' },
    myInfoSub: { width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15 },
    close: { position: 'absolute', top: 50, right: 5, padding: 10 },
    scrollCon: { flex: 1 },
    idBox: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: 70, paddingLeft: 10 },
    divider: { width: '100%', height: 15 },
    menuBox: { width: '100%', paddingVertical: 10 },
});

export default DrawerComponent;
