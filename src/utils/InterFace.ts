export type RootStackParams = {
    MainScreen: { title: string }
    Main: { title: string }
    Login: {}
    EventLoop: { title: string }
    ColorPage: { title: string }
    RadiusPage: { title: string }
    GridSystem: { title: string }
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
