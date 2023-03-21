const setRxLoginInfo = (userObj:any) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const setRxNotiCnt = (cnt:any) => {
    return {
        type: "SET",
        payload: cnt
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

const allActions = {
    setRxNotiCnt,
    setRxLoginInfo,
    logOut
}

export default allActions