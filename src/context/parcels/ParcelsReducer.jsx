import { CONTEXT_TYPES } from "./ParcelsProvider";

export const ParcelsReducer = (state, action) => {
    switch(action.type) {
        case CONTEXT_TYPES.PARCELS_LIST:
            return {
              ...state,
              parcels: action.payload,
            }
        default:
            return state
    }
}