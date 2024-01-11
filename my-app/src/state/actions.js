export const addCalorieItem = (item) => {
    return {
      type: 'ADD_CALORIE_ITEM',
      payload: item,
    };
  };
  
  export const selectDate = (date) => {
    return {
      type: 'SELECT_DATE',
      payload: date,
    };
  };
  