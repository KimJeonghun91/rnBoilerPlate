import React, { } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Layout from "../../assets/constants/Layout";
import Colors from "../../assets/constants/Colors";
import { useAppDispatch, useTypedSelector } from '../../utils/redux/store';
import { toggleMode } from '../../utils/redux/themeSlice';
import TextAtom from "../atoms/TextAtom";

const CustomHeader = ({ }: any) => {
    const { mode } = useTypedSelector((state) => state.theme);
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const topBarHeight = 54;

    return (
        <View style={{ width: Layout.window.width, height: topBarHeight, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.mainColor }}>
            <View style={{ flex: 1, height: topBarHeight, justifyContent: 'space-between', alignItems: 'center', paddingRight: 8, flexDirection: 'row' }}>
                <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 5 }} onPress={() => {
                    dispatch(toggleMode());
                }}>
                    <TextAtom>DayNight 모드 : {mode}</TextAtom>
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
    );
}
export default CustomHeader;