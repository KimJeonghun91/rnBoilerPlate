import React from 'react';
import { Text, TextProps } from 'react-native';
import { themeProvider } from '../../assets/theme';
import { IVariant } from '../../assets/theme/Layout';

type TextAtomProps = TextProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
  variant?: IVariant
};

const TextAtom = ({ variant, ...props }: TextAtomProps) => {
  const theme = themeProvider();

  return (
    <Text {...props} style={[{ color: theme.palette.text.primary }, props.style]}>{props.children}</Text>
  );
};

TextAtom.defaultProps = {
  style: {}, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextAtom;
