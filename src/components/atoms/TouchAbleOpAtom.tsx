import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import Colors from '../../assets/constants/Colors';

type TouchAbleOpAtomProps = TouchableOpacityProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const TouchAbleOpAtom = ({ ...props }: TouchAbleOpAtomProps) => {
  return (
    <TouchableOpacity {...props} style={[props.style, {}]}>{props.children}</TouchableOpacity>
  )
};

TouchAbleOpAtom.defaultProps = {
  style: {
    backgroundColor:Colors.mainColor,
    paddingVertical:10,paddingHorizontal:30,borderRadius:6
  }, // 디폴트
};

export default TouchAbleOpAtom;