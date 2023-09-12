interface DefaultScreenProps {
    title: string;
}

export type RootStackParams = {
    MainScreen: DefaultScreenProps;
    Main: DefaultScreenProps;
    Login: {};
    EventLoop: DefaultScreenProps;
    ThemePage: DefaultScreenProps;
    RadiusPage: DefaultScreenProps;
    GridSystem: DefaultScreenProps;
    HocPtPage: DefaultScreenProps;
    ObserverPtPage: DefaultScreenProps;
    ModalPage: DefaultScreenProps;
    GlobalStatePage: DefaultScreenProps;
}

// ------------------------------------------------------------ //

export interface IloginReq {
    id: string;
    pw: string;
}

export interface IloginRes {
    id: string;
    token: string;
}

export interface IAuthState {
    id: string | null;
    isLoggedIn: boolean;
    token: string | null;
    error: string | null;
}

export interface IAuth extends IAuthState {
    loginSuccess: (id: string, token: string) => void;
    loginFailed: (error: string) => void;
    logout: () => void;
}

export interface ICounterState {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (getNumber: number) => void;
}

export interface IThemeState {
    mode: 'light' | 'dark';
    toggleMode: () => void;
    changeMode: (value: 'light' | 'dark') => void;
}

export type TGlobalStateManager = 'redux' | 'zustand';
