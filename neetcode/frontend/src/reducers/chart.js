import { GET_CHART } from '../actions/types.js'

const initialstate = {
    chart: []
}

export default function(state = initialstate, action) {
    switch(action.type) {
        case GET_CHART:
            return {

                ...state,
                chart: action.payload 

            }
            default:
                return state;
    }
}