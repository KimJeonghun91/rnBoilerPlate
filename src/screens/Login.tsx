import React, { useState, useEffect, } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput } from "react-native";
import RootViewMlc from "../components/molecules/RootViewMlc";
import TextAtom from "../components/atoms/TextAtom";
import TouchAbleOpAtom from "../components/atoms/TouchAbleOpAtom";
import Colors from "../assets/constants/Colors";
import ViewAtom from "../components/atoms/ViewAtom";



const Login = () => {
    const navigation: any = useNavigation();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        async function fetchData() {

        };
        fetchData();
        return () => { };
    }, []);


    return (
        <RootViewMlc isLoader={loading}>
            <ViewAtom style={[styles.inputWraper, { marginTop: 40, }]}>
                <TextInput
                    style={styles.tiLogin}
                    allowFontScaling={false}
                    autoCapitalize='none'
                    placeholder={`아이디`}
                    placeholderTextColor={Colors.gray01}
                    value={id}
                    onChangeText={(text) => setId(text)} />
            </ViewAtom>


            <ViewAtom style={[styles.inputWraper, { marginTop: 10, }]}>
                <TextInput
                    style={styles.tiLogin}
                    allowFontScaling={false}
                    autoCapitalize='none'
                    placeholder={`비밀번호`}
                    secureTextEntry={true}
                    placeholderTextColor={Colors.gray01}
                    value={pw}
                    onChangeText={(text) => setPw(text)} />
            </ViewAtom>

            <TouchAbleOpAtom style={styles.btnLogin}
                onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                        navigation.navigate('MainScreen', {})
                    }, 1000);
                }}>
                <TextAtom style={{ color: '#ffffff', fontWeight: 'bold' }}>로그인 하기</TextAtom>
            </TouchAbleOpAtom>
        </RootViewMlc>
    )
}

const styles = StyleSheet.create({
    inputWraper: { width: 340, paddingVertical: 3, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.gray01 },
    btnLogin: { marginTop: 30, width: 340, backgroundColor: Colors.mainColor, justifyContent: 'center', alignItems: 'center', paddingVertical: 16, borderRadius: 5 },
    tiLogin: { flex: 1, paddingLeft: 10, color: 'black' }
});

export default Login;