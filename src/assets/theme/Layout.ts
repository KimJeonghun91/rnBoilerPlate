import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const baseFs = 13;
const h1 = baseFs + 23;
const h2 = baseFs + 15;
const h3 = baseFs + 10;
const h4 = baseFs + 6;
const h5 = baseFs + 4;
const h6 = baseFs + 2;

const subtitle1 = h5;
const subtitle2 = h6;
const body1 = baseFs + 0;
const body2 = baseFs - 2;


const layout = {
  window: {
    width,
    height,
  },
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2
};


export type IVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';

export type ILayout = {
  window: {
    width: number;
    height: number;
  },
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subtitle1: number;
  subtitle2: number;
  body1: number;
  body2: number;
} 

export default layout;