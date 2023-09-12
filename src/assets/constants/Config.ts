import packageJson from '../../../package.json';
import * as IF from '../../utils/InterFace';

const GLOBAL_STATE_MANAGER: IF.TGlobalStateManager = 'zustand';

export default {
  GLOBAL_STATE_MANAGER,
  APP_VER: packageJson.version,
  IS_LOG: true,
};
