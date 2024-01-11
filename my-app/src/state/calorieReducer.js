const initialState = {
    selectedDate: new Date(),
    calorieItems: [],
    calorieLog: {},
  };
  
  const calorieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CALORIE_ITEM':
        return {
          ...state,
          calorieItems: [...state.calorieItems, action.payload],
        };
      case 'SELECT_DATE':
        return {
          ...state,
          selectedDate: action.payload,
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default calorieReducer;
  