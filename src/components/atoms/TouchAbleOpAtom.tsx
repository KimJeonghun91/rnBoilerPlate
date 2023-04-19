import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

type TouchAbleOpAtomProps = TouchableOpacityProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const TouchAbleOpAtom = ({ ...props }: TouchAbleOpAtomProps) => {
  return (
    <TouchableOpacity {...props} style={[props.style, {}]}>{props.children}</TouchableOpacity>
  );
};

TouchAbleOpAtom.defaultProps = {
  style: {
    paddingVertical: 10, paddingHorizontal: 30, borderRadius: 6,
  }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TouchAbleOpAtom;
