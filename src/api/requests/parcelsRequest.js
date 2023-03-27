

import data from '../data/parcels.json';


export const getParcels = () =>{
    
    return data
}

//to do:

// import parcelsApi from '../parcelsApi';

// export const getParcels = async () => {
//   const APIinstance = new parcelsApi();
//   try {
//     const {data} = await APIinstance.getParcelsList();
//     return data;
//   } catch (error) {
//     console.error(error);
//    
//   }
// };