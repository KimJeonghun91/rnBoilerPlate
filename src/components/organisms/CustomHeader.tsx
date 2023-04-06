import React, { useMemo } from "react";
import { View, TouchableOpacity, Image, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useTypedSelector } from '../../utils/redux/store';
import { toggleMode } from '../../utils/redux/themeSlice';
import TextAtom from "../atoms/TextAtom";
import { ThemeProvider } from "../../assets/theme";

const CustomHeader = ({ }: any) => {
    const theme = ThemeProvider();
    const { mode } = useTypedSelector((state) => state.theme);
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const topBarHeight = 54;


    const useRenderView = useMemo(() => (
        <View style={{ width: theme.layout.window.width, height: topBarHeight, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.palette.primary.main }}>
            <View style={{ flex: 1, height: topBarHeight, justifyContent: 'space-between', alignItems: 'center', paddingRight: 8, flexDirection: 'row' }}>
                <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 5 }} onPress={() => {
                    dispatch(toggleMode());
                }}>
                    <TextAtom>DayNight 변경 : {mode}</TextAtom>
                </TouchableOpacity>


                <TouchableOpacity style={{ paddingVertical: 1, paddingHorizontal: 8 }} onPress={() => {
                    try {
                        navigation.toggleDrawer();
                    } catch (error) { console.log('toggleDrawer UNDEFINED'); };
                }}>
                    <Image style={{ width: 26, height: 26 }}
                        source={require('../../assets/img/ic_drawer.png')} resizeMode='contain' />
                </TouchableOpacity>
            </View>
        </View>
    ), []);





    // CustomHeader 동작방식이 플랫폼별로 달라서 아래처럼 처리.
    return (
        Platform.OS === 'ios' ? (
            <SafeAreaView style={{ flex: 1, width: theme.layout.window.width, backgroundColor: theme.palette.background.default }} edges={['top']}>
                {useRenderView}
            </SafeAreaView>
        ) : (
            useRenderView
        )
    );
}
export default CustomHeader;