const reducer = (state, action) => {
    if (action.type === "INC") {
        return (state = state + 1);
    }
    if (action.type === "DEC") {

        let newNum = 0;

        state >= 1 ? (newNum = state - 1) : (newNum = 0);
        return newNum;

        // if (state > 0) {
        //     return (state = state - 1);
        // } else {
        //     alert("d")
        // }
    }
    return state;
};

export default reducer;