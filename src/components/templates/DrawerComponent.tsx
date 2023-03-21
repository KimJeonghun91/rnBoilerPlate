import React, { useCallback } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import TextAtom from '../atoms/TextAtom';
import ViewAtom from '../atoms/ViewAtom';
import { useAppDispatch, useTypedSelector } from '../../utils/redux/store';
import { logout } from '../../utils/redux/authSlice';

const DrawerComponent = ({ }: any) => {
    const authInfo = useTypedSelector((state) => state.auth);
    const navigation = useNavigation<any>();
    const dispatch = useAppDispatch();


    const logOut = useCallback(() => {
        Alert.alert("", `로그아웃 하시겠습니까?`,
            [{ text: '취소', style: 'cancel', onPress: () => { }, },
            {
                text: '확인', onPress: () => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    dispatch(logout());
                    Alert.alert("", "로그아웃 하였습니다.")
                    navigation.reset({ index: 0, routes: [{ name: 'Login', params: {} }] });
                }
            },], { cancelable: false },
        )
    }, [])


    return (
        <ViewAtom style={styles.container}>
            <ScrollView style={{ flex: 1 }}>

                {
                    !authInfo ? <>
                        <ViewAtom style={{ width: '100%', backgroundColor: '#f8f8f8', paddingVertical: 50 }}>
                            <TextAtom>로그인이 필요해요</TextAtom>
                        </ViewAtom>
                    </> : <>
                        <ViewAtom style={{ width: '100%', backgroundColor: '#f8f8f8' }}>
                            <TextAtom>내 정보</TextAtom>
                        </ViewAtom>

                        <ViewAtom style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15, backgroundColor: '#f8f8f8' }}>
                            <ViewAtom style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: 70, paddingLeft: 10 }}>
                                <TextAtom>{authInfo.id}</TextAtom>
                            </ViewAtom>
                        </ViewAtom>
                    </>
                }


                <ViewAtom style={{ width: '100%', backgroundColor: '#f8f8f8', height: 15 }}></ViewAtom>

                <ViewAtom style={{ width: '100%', backgroundColor: '#ffffff', paddingVertical: 10 }}>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { navigation.navigate('Main', {}); }}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_home.png')} resizeMode='contain' />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>홈</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap}>
                        <Image style={styles.menuImg} source={require('../../assets/img/ic_my.png')} resizeMode='contain' />
                        <TextAtom allowFontScaling={false} style={styles.menuText}>마이 페이지</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuWrap} onPress={() => { logOut(); }}>
                        <TextAtom allowFontScaling={false} style={styles.menuText}>로그아웃</TextAtom>
                    </TouchableOpacity>
                </ViewAtom>





                <TouchableOpacity style={{ position: 'absolute', top: 0, right: 5, padding: 10 }} onPress={() => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    // navigation.closeDrawer();
                }}>
                    <TextAtom>닫기</TextAtom>
                </TouchableOpacity>
            </ScrollView>
        </ViewAtom>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },
    menuWrap: { flexDirection: 'row', alignItems: 'center', paddingLeft: 25, paddingVertical: 13 },
    menuImg: { width: 22, height: 22 },
    menuText: { fontWeight: 'bold', marginLeft: 15 }
})

export default DrawerComponent;