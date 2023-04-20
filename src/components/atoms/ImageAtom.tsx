import React, { useState } from 'react';
import { Image, ImageProps } from 'react-native';

interface ImageAtomProps extends ImageProps {
  errorImage: ImageProps['source'];
}

const ImageAtom = ({ style, source, errorImage, resizeMode, ...rest }: ImageAtomProps) => {
  const [imgError, setImgError] = useState(false);

  const onError = () => {
    if (errorImage) {
      setImgError(true);
    }
  };

  const imageSource = imgError ? errorImage : source;

  return (
    <Image
      style={[{}, style]}
      resizeMode={resizeMode ?? 'cover'}
      source={imageSource}
      onError={onError}
      {...rest}
    />
  );
};

ImageAtom.defaultProps = {
  resizeMode: 'cover',
  errorImage: require('../../assets/img/logo.png'),
};

export default ImageAtom;
