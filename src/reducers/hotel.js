
const initialstate = {
  hotel1: ["TTTTTTTTTT", 'asdsad'],
  hotel2: ['DDDDDDDDDDDDDDD', 'asdasd']
};

export default function hotelList1(state = initialstate, action) {
  if(action.type === "ADD__HOTEL") {
    return {
      ...state,
      hotel1: [...state.hotel1, action.payload]
    }
  }
  return state;
}