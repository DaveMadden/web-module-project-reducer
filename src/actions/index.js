export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEM_CLEAR = "MEM_CLEAR";
export const MEM_ADD = "MEM_ADD";
export const MEM_RECALL = "MEM_RECALL";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return ({type: CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const mAdd = () => {
    return ({type:MEM_ADD})
}
export const mRec = () => {
    return ({type:MEM_RECALL})
}
export const mClr = () => {
    return ({type:MEM_CLEAR})
}