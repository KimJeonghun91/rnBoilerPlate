import { useTypedSelector } from './redux/Store';
import * as IF from '../utils/InterFace';
import Config from '../assets/constants/Config';
import { useAuthStore, useCounterStore } from '../state/zustand/Store';

// ----------------------------------------------------------------------


// !! 주의 : 사용하는 전역 상태 관리자만 남기고 제거 해야됨. !!
let gState: IF.TGlobalStateManager = Config.GLOBAL_STATE_MANAGER;
const AuthInfoProvider = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return gState === 'zustand' ? useAuthStore() : useTypedSelector((state) => state.auth);
};

const CounterProvider = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return gState === 'zustand' ? useCounterStore() : useTypedSelector((state) => state.counter);
};
export { AuthInfoProvider, CounterProvider };
