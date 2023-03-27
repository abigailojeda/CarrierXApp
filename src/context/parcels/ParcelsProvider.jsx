import { useReducer } from 'react'
import { ParcelsContext, ParcelsReducer } from '.'
import { getParcels } from '../../api/requests/parcelsRequest'

const PARCELS_INITIAL_STATE = {

    parcels: []


}

export const CONTEXT_TYPES = {
    PARCELS_LIST:'[LIST]'

}

export const ParcelsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        ParcelsReducer,
        PARCELS_INITIAL_STATE
    )

    const test = () => {
        const data = getParcels()
        // const parcelsByDeliveryDate = {};

        // data.forEach(p => {
        //   if (!parcelsByDeliveryDate[p.deliveryDate]) {
        //     parcelsByDeliveryDate[p.deliveryDate] = [p];
        //   } else {
        //     parcelsByDeliveryDate[p.deliveryDate].push(p);
        //   }
        // });
      
        console.log('context: ', data);
        dispatch({type: CONTEXT_TYPES.PARCELS_LIST,payload: data})
    }

    return (
        <ParcelsContext.Provider
            value={{
                ...state,
                test
            }}
        >
            {children}
        </ParcelsContext.Provider>
    )
}