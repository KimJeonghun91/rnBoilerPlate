import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { RootViewMlc } from '../components/molecules';
import { TextAtom, TouchAbleOpAtom } from '../components/atoms';
import { ThemeProvider } from '../assets/theme';
import { InfoView } from '../components/organisms';



const EventLoop = () => {
    const theme = ThemeProvider();
    const styles = useMemo(() =>
        StyleSheet.create({
            clickView: { marginTop: 15, paddingLeft: 10 },
            underLine: { textDecorationLine: 'underline', color: theme.palette.blue[600] },
            centerText: { textAlign: 'center', marginVertical: 30 },
        }), [theme]
    );

    // *************************************************************************************************************************

    const [orderOfExecution, setOrderOfExecution] = useState('Start');

    useLayoutEffect(() => {
        setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect')));

        setTimeout(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect : setTimeout')));
        }, 0);

        setImmediate(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect : setImmediate\n(즉시 처리됨)')));
        });

        Promise.resolve()
            .then(() => { setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect : Promise\n(MicroQueue)'))); });
    }, []);

    useEffect(() => {
        setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect')));

        setTimeout(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect : setTimeout')));
        }, 0);

        setImmediate(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect : setImmediate\n(즉시 처리됨)')));
        });

        Promise.resolve().then(() => { setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect : Promise\n(MicroQueue)'))); });
    }, []);


    return (
        <RootViewMlc>
            <InfoView style={{}}
                title={'이벤트 루프'}
                contents={`자바스크립트는 싱글 스레드(single-thread) 기반으로 동작됨. 즉, 한 번에 하나의 작업만 처리할 수 있다는 것을 의미. 하지만 자바스크립트는 이벤트 루프(event loop)를 통해 비동기적으로 동작할 수 있도록 지원.
                
RreactNative는 네이티브에서 동작하는 자체 이벤트루프(EventLoopController 모듈)를 사용함. 따라서 JS 이벤트루프와 다르게 동작할 수 있음.
코드와 실행된 순서를 보면 MacroQueue와 MicroQueue 때문에 나중에 선언된 Promise가 빨리 처리됨.`}>
                <TouchAbleOpAtom style={styles.clickView} onPress={() => { Linking.openURL('https://kimjeonghun91.github.io/blog/devlog/2023-03-27-js-event-loop/'); }}>
                    <TextAtom style={[styles.underLine]}>{'내용 더 보기 (링크)'}</TextAtom>
                </TouchAbleOpAtom>
            </InfoView>

            <TextAtom style={styles.centerText}>{orderOfExecution}</TextAtom>
        </RootViewMlc>
    );
};

export default EventLoop;
