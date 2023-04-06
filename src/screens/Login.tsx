import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ServerApi from "../utils/ServerApi";
import * as IF from "../utils/InterFace";
import Colors from "../assets/constants/Colors";
import { ViewAtom } from "../components/atoms";
import { loginSuccess, loginFailed } from '../utils/redux/authSlice';
import { ButtonMlc, LoginTextInputMlc, RootViewMlc } from "../components/molecules";



const Login = () => {
    const navigation = useNavigation<StackNavigationProp<IF.RootStackParams>>();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        async function fetchData() {

        };
        fetchData();
        return () => { };
    }, []);


    const handleLogin = useCallback(async (id: string, pw: string) => {
        setLoading(false);

        try {
            // 로그인 API 연결
            // const response = await ServerApi.loginUser({ id, pw });
            dispatch(loginSuccess({ id: id, token: 'aaaaa-bbbb-vvvv-dddddd-eeeeee' }));
            navigation.reset({
                index: 0, routes: [{ name: 'MainScreen', params: {} }]
            });

        } catch (error) {
            dispatch(loginFailed('LOGIN false'));
        };
    }, []);



    return (
        <RootViewMlc isLoader={loading}>
            <ViewAtom style={{ marginTop: 30 }}>
                <LoginTextInputMlc
                    allowFontScaling={false}
                    autoCapitalize='none'
                    placeholder={`아이디`}
                    placeholderTextColor={Colors.gray01}
                    value={id}
                    onChangeText={(text) => setId(text)} />

                <LoginTextInputMlc
                    allowFontScaling={false}
                    autoCapitalize='none'
                    placeholder={`비밀번호`}
                    placeholderTextColor={Colors.gray01}
                    value={pw}
                    onChangeText={(text) => setPw(text)} />
            </ViewAtom>


            <ButtonMlc containerStyle={styles.btnLogin} title="로그인 하기" onPress={() => {
                if (id === '') return Alert.alert('', '아이디를 입력해주세요.');
                setLoading(true);
                setTimeout(() => {
                    handleLogin(id, pw);
                }, 1500);
            }} />
        </RootViewMlc>
    )
}

const styles = StyleSheet.create({
    btnLogin: { marginTop: 30, width: 340 },
});

export default Login;