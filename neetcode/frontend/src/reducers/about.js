import { GET_ABOUT } from '../actions/types.js'

const initialstate = {
    about: []
}

export default function(state = initialstate, action) {
    switch(action.type) {
        case GET_ABOUT :
            return {

                ...state,
                about: action.payload 

            }
            default:
                return state;
    }
}