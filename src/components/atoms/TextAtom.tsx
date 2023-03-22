import React from 'react';
import { Text, TextProps } from "react-native";

type TextAtomProps = TextProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const TextAtom = ({ ...props }: TextAtomProps) => {
    return (
        <Text {...props} style={[props.style]}>{props.children}</Text>
    )
};

TextAtom.defaultProps = {
  style: {
    color:'#000000'
  }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextAtom;