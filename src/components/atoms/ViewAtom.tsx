import React from 'react';
import { View, ViewProps } from "react-native";

type ViewAtomProps = ViewProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const ViewAtom = ({ ...props }: ViewAtomProps) => {
  return (
    <View {...props} style={[props.style, {}]}>{props.children}</View>
  )
};

ViewAtom.defaultProps = {
  style: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default ViewAtom;