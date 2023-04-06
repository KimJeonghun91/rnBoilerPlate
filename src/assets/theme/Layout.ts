import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const baseFs = 13;
const fsS = baseFs + 4;
const fsM = baseFs + 6;
const fsL = baseFs + 8;

const layout = {
  window: {
    width,
    height,
  },
  fsS,
  fsM,
  fsL,
};



export type ILayout = {
  window: {
    width: number;
    height: number;
  };
  fsS: number;
  fsM: number;
  fsL: number;
}

export default layout;