import React from 'react';
import { Platform, TextInput, TextInputProps } from "react-native";

type TextInputAtomProps = TextInputProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const TextInputAtom = ({ ...props }: TextInputAtomProps) => {
    return (
        <TextInput {...props} style={[{paddingVertical:Platform.OS === 'ios' ? 8 : 0},props.style]}>{props.children}</TextInput>
    )
};

TextInputAtom.defaultProps = {
  style: {
    color:'#000000'
  }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextInputAtom;