import React, { useCallback } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../assets/redux/allActions"
import TextAtom from '../atoms/TextAtom';

const DrawerComponent = ({ }: any) => {
    // const { rxLoginInfo } = useSelector((state: any) => state.rxLoginInfo, (prev, next) => { return prev.rxLoginInfo === next.rxLoginInfo; });
    // const navigation = useNavigation<any>();
    // const dispatch = useDispatch();


    // const logOut = useCallback(() => {
    //     Alert.alert("", `로그아웃 하시겠습니까?`,
    //         [{ text: '취소', style: 'cancel', onPress: () => { }, },
    //         {
    //             text: '확인', onPress: () => {
    //                 dispatch(allActions.logOut())
    //                 Alert.alert("", "로그아웃 하였습니다.")
    //                 navigation.reset({ index: 0, routes: [{ name: 'Login', params: {} }] });
    //             }
    //         },], { cancelable: false },
    //     )
    // }, [])


    return (
        <View style={styles.container}>
            {/* <ScrollView style={{ flex: 1 }}>

                {
                    !rxLoginInfo ? <>
                        <View style={{ width: '100%', backgroundColor: '#f8f8f8', paddingVertical: 50 }}>
                            <TextAtom>로그인이 필요해요</TextAtom>
                        </View>
                    </> : <>
                        <View style={{ width: '100%', backgroundColor: '#f8f8f8' }}>
                            <TextAtom>내 정보</TextAtom>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15, backgroundColor: '#f8f8f8' }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: 70, paddingLeft: 10 }}>
                                <TextAtom>{rxLoginInfo.NAME}</TextAtom>
                                <TextAtom>{rxLoginInfo.USERID}</TextAtom>
                            </View>
                        </View>
                    </>
                }


                <View style={{ width: '100%', backgroundColor: '#f8f8f8', height: 15 }}></View>

                <View style={{ width: '100%', backgroundColor: '#ffffff', paddingVertical: 10 }}>
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
                </View>





                <TouchableOpacity style={{ position: 'absolute', top: 0, right: 5, padding: 10 }} onPress={() => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    // navigation.closeDrawer();
                }}>
                    <TextAtom>닫기</TextAtom>
                </TouchableOpacity>
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },
    menuWrap: { flexDirection: 'row', alignItems: 'center', paddingLeft: 25, paddingVertical: 13 },
    menuImg: { width: 22, height: 22 },
    menuText: { fontWeight: 'bold', marginLeft: 15 }
})

export default DrawerComponent;