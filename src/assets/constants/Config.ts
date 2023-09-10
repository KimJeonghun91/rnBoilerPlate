import packageJson from '../../../package.json';
import * as IF from '../../utils/InterFace';

const GLOBAL_STATE: IF.TGlobalState = 'zustand';

export default {
  GLOBAL_STATE,
  APP_VER: packageJson.version,
  IS_LOG: true,
};
