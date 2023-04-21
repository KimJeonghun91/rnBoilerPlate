import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Alert, Switch } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useAppDispatch, useTypedSelector } from '../../../utils/redux/Store';
import { toggleMode } from '../../../utils/redux/ThemeSlice';
import { logout } from '../../../utils/redux/AuthSlice';
import { ThemeProvider } from '../../../assets/theme';
import { ImageAtom, TouchAbleOpAtom, TextAtom, ViewAtom } from '../../atoms';
import * as IF from '../../../utils/InterFace';

const DrawerComponent = React.memo(({ props }: any) => {
    const theme = ThemeProvider();
    const authInfo = useTypedSelector((state) => state.auth);
    const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();
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


    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: theme.palette.background.paper }}>
            <ViewAtom style={[styles.dHeader, { backgroundColor: theme.palette.primary.main }]}>

                <ViewAtom style={styles.rowEnd}>
                    <TouchAbleOpAtom style={styles.close} onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()); }}>
                        <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/ic_x.png')} resizeMode="contain" />
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

                <ViewAtom style={styles.dnBox}>
                    <TextAtom>DayNight 변경</TextAtom>
                    <Switch
                        style={styles.dnSwitch}
                        trackColor={{ false: theme.palette.grey[500], true: theme.palette.grey[300] }}
                        thumbColor={theme.currentMode === 'light' ? theme.palette.primary.light : theme.palette.grey[300]}
                        ios_backgroundColor={theme.palette.grey[300]}
                        onValueChange={() => { dispatch(toggleMode()); }}
                        value={theme.currentMode === 'light' ? true : false}
                    />
                </ViewAtom>

            </ViewAtom>


            <ViewAtom style={[styles.menuBox, {}]}>
                <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('Main', { title: '홈' }); }}>
                    <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                    <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>홈</TextAtom>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('GridSystem', { title: '그리드 레이아웃' }); }}>
                    <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                    <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>그리드 레이아웃</TextAtom>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('ColorPage', { title: '컬러 팔레트' }); }}>
                    <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                    <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>컬러 팔레트</TextAtom>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('EventLoop', { title: '이벤트 루프' }); }}>
                    <ImageAtom style={[styles.menuImg, { tintColor: theme.palette.text.primary }]} source={require('../../../assets/img/logo.png')} resizeMode="contain" />
                    <TextAtom allowFontScaling={false} style={[styles.menuText, { color: theme.palette.text.primary }]}>이벤트 루프</TextAtom>
                </TouchableOpacity>
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
    dHeader: { width: '100%', paddingTop: 0,  borderBottomRightRadius: 40, paddingLeft: 15, paddingBottom: 25,marginTop:-5 },
    myInfoSub: { width: '100%', flexDirection: 'row', alignItems: 'center' },
    close: { padding: 10 },
    idBox: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
    menuBox: { width: '100%', paddingVertical: 10 },
    rowEnd: { flexDirection: 'row', justifyContent: 'flex-end' },
    dnBox: { marginTop: 10, flexDirection: 'row', alignItems: 'center' },
    txtId: { fontWeight: 'bold' },
    dnSwitch: { marginLeft: 5 },
});

export default DrawerComponent;
