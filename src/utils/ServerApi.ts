import axios from './axios';
import * as IF from './InterFace';


export const loginUser = async (loginReq: IF.IloginReq): Promise<IF.IloginRes> => {
    const response = await axios.post('/v1/login', loginReq);
    return response.data;
};
