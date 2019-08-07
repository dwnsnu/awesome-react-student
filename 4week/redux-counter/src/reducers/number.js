import * as types from '../actions/index';

const initialState = {
    number: 0
};

const number = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default number;