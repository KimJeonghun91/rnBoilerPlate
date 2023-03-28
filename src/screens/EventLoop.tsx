import React, { useState, useEffect, useLayoutEffect } from "react";
import { Linking } from "react-native";
import RootViewMlc from "../components/molecules/RootViewMlc";
import TextAtom from "../components/atoms/TextAtom";
import TouchAbleOpAtom from "../components/atoms/TouchAbleOpAtom";



const EventLoop = () => {
    const [orderOfExecution, setOrderOfExecution] = useState("Start");

    useLayoutEffect(() => {
        setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect')));

        setTimeout(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect : setTimeout')));
        }, 0);

        Promise.resolve()
            .then(() => { setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useLayoutEffect : Promise\n(MicroQueue)'))); });
    }, []);

    useEffect(() => {
        setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect')));

        setTimeout(() => {
            setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect : setTimeout')));
        }, 0);

        Promise.resolve().then(() => { setOrderOfExecution((prev) => ((prev + '\n ↓ \n' + 'useEffect : Promise\n(MicroQueue)'))); });
    }, []);


    return (
        <RootViewMlc>
            <TextAtom style={{ color: 'black', textAlign: 'center', paddingHorizontal: 20, marginTop: 20 }}>{`MacroQueue와 MicroQueue 때문에 나중에 선언된 Promise가 빨리 처리됨`}</TextAtom>

            <TouchAbleOpAtom style={{ marginTop: 10,marginBottom:40 }} onPress={() => { Linking.openURL(`https://kimjeonghun91.github.io/blog/devlog/2023-03-27-js-event-loop/`); }}>
                <TextAtom style={{ color: 'blue', textDecorationLine: 'underline' }}>{`내용 더 보기`}</TextAtom>
            </TouchAbleOpAtom>

            <TextAtom style={{ textAlign: 'center' }}>{orderOfExecution}</TextAtom>
        </RootViewMlc>
    )
}
export default EventLoop;