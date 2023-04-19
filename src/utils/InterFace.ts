export type RootStackParams = {
    MainScreen: {}
    Login: {}
    EventLoop:{}
    ColorPage:{}
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
