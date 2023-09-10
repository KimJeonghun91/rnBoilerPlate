import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useAppDispatch } from '../../../state/redux/Store';
import { logout } from '../../../state/redux/authSlice';
import { ThemeProvider } from '../../../assets/theme';
import { AuthInfoProvider } from '../../../state';
import { ImageAtom, TouchAbleOpAtom, TextAtom, ViewAtom } from '../../atoms';
import * as IF from '../../../utils/InterFace';
import { ButtonMlc } from '../../molecules';
import { NaviItem, naviList } from './NaviList';
import Config from '../../../assets/constants/Config';
import { useAuthStore } from '../../../state/zustand/Store';

const DrawerComponent = React.memo(({ props }: any) => {
    const theme = ThemeProvider();
    const authInfo = AuthInfoProvider();
    const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();
    const dispatch = useAppDispatch();
    const { logout: logoutZs } = useAuthStore();
    let gState: IF.TGlobalState = Config.GLOBAL_STATE;

    const logOut = useCallback(() => {
        Alert.alert('', '로그아웃 하시겠습니까?',
            [{ text: '취소', style: 'cancel', onPress: () => { } },
            {
                text: '확인', onPress: () => {
                    navigation.dispatch(DrawerActions.closeDrawer());


                    if (gState === 'redux') {
                        dispatch(logout());
                    } else if (gState === 'zustand') {
                        logoutZs();
                    }
                    Alert.alert('', '로그아웃 하였습니다.');
                    navigation.reset({ index: 0, routes: [{ name: 'Login', params: {} }] });
                },
            }], { cancelable: false }
        );
    }, [navigation, dispatch, gState, logoutZs]);


    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: theme.palette.background.paper }}>
            <ViewAtom style={[styles.dHeader, { backgroundColor: theme.palette.primary.main }]}>

                <ViewAtom style={styles.rowEnd}>
                    <TouchAbleOpAtom style={styles.close} onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()); }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/ic_x.png')} resizeMode="contain" />
                    </TouchAbleOpAtom>
                </ViewAtom>

                {
                    !authInfo?.id ? <ViewAtom style={styles.loginBox}>
                        <ButtonMlc containerStyle={[styles.btnLogin, { backgroundColor: theme.palette.primary.light }]} title="로그인 하기" fontSize={theme.layout.subtitle2} onPress={() => { navigation.navigate('Login', {}); }} />
                    </ViewAtom> : <>
                        <ViewAtom style={[styles.myInfoSub, {}]}>
                            <ViewAtom style={styles.idBox}>
                                <TextAtom style={styles.txtId}>ID: {authInfo.id}</TextAtom>
                            </ViewAtom>
                        </ViewAtom>
                    </>
                }
            </ViewAtom>


            <ViewAtom style={[styles.menuBox, {}]}>
                {
                    naviList.map((item: NaviItem, index: number) => (
                        <TouchableOpacity key={index} style={styles.menuWrap} onPress={() => { navigation.navigate(item.path, item.initParams); }}>
                            <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                            <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>{item.name}</TextAtom>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity style={styles.menuWrap} onPress={() => { logOut(); }}>
                    <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                    <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>로그아웃</TextAtom>
                </TouchableOpacity>
            </ViewAtom>
        </DrawerContentScrollView>
    );
});

const styles = StyleSheet.create({
    menuWrap: { flexDirection: 'row', alignItems: 'center', paddingLeft: 25, paddingVertical: 13 },
    menuImg: { width: 22, height: 22 },
    menuText: { fontWeight: 'bold', marginLeft: 15 },
    dHeader: { width: '100%', paddingTop: 0, borderBottomRightRadius: 40, paddingLeft: 15, paddingBottom: 25, marginTop: -5 },
    loginBox: { width: '100%', alignItems: 'flex-start' },
    myInfoSub: { width: '100%', flexDirection: 'row', alignItems: 'center' },
    close: { padding: 10 },
    idBox: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
    menuBox: { width: '100%', paddingVertical: 10 },
    rowEnd: { flexDirection: 'row', justifyContent: 'flex-end' },
    dnBox: { marginTop: 10, flexDirection: 'row', alignItems: 'center' },
    txtId: { fontWeight: 'bold' },
    dnSwitch: { marginLeft: 5 },
    btnLogin: { marginTop: 5, marginBottom: 8, paddingVertical: 8 },
});

export default DrawerComponent;
