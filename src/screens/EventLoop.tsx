import React, { useState, useEffect, useLayoutEffect } from "react";
import { Linking } from "react-native";
import { RootViewMlc } from "../components/molecules";
import { TextAtom, TouchAbleOpAtom } from "../components/atoms";



const EventLoop = () => {
    const [orderOfExecution, setOrderOfExecution] = useState("Start");

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
            <TextAtom style={{ textAlign: 'center', paddingHorizontal: 20, marginTop: 20 }}>{`MacroQueue와 MicroQueue 때문에 나중에 선언된 Promise가 빨리 처리됨`}</TextAtom>
            <TextAtom style={{ textAlign: 'center', paddingHorizontal: 20, marginTop: 20 }}>{`setImmediate는 React Native에서 제공하는 함수 중 하나로, 비동기적으로 실행될 함수를 등록하여 다음 Event Loop에서 실행될 수 있도록 하는 함수입니다.`}</TextAtom>
            <TextAtom style={{ textAlign: 'center', paddingHorizontal: 20, marginTop: 20 }}>{`현재 Event Loop에서 실행되지 않고, 대신 다음 Event Loop에서 실행됩니다. 이렇게 하면 현재 실행 중인 코드의 다른 부분이 먼저 실행될 수 있으므로, 애플리케이션의 성능이 향상될 수 있습니다.`}</TextAtom>


            <TouchAbleOpAtom style={{ marginTop: 10, marginBottom: 40 }} onPress={() => { Linking.openURL(`https://kimjeonghun91.github.io/blog/devlog/2023-03-27-js-event-loop/`); }}>
                <TextAtom style={{ color: 'blue', textDecorationLine: 'underline' }}>{`내용 더 보기`}</TextAtom>
            </TouchAbleOpAtom>

            <TextAtom style={{ textAlign: 'center' }}>{orderOfExecution}</TextAtom>
        </RootViewMlc>
    )
}
export default EventLoop;