export type RootStackParams = {
    MainScreen: { title: string }
    Main: { title: string }
    Login: {}
    EventLoop: { title: string }
    ThemePage: { title: string }
    RadiusPage: { title: string }
    GridSystem: { title: string }
    HocPtPage: { title: string }
    ObserverPtPage: { title: string }
    ModalPage: { title: string }
};


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
