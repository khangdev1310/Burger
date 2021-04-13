const initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

  menu: {
    salad: 10,

    cheese: 20,

    beef: 55,
  },

  total: 85,
};

export const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BURGER": {
      // console.log(action);
      // Thay đổi giá trị của burger
      const burgerUpdate = { ...state.burger };
      if(action.payload.values === -1 && state.burger[action.payload.propsBurgers] < 1)
      {
          return { ...state };
      }
      burgerUpdate[action.payload.propsBurgers] += action.payload.values;
      state.burger = burgerUpdate;
      //Tổng tiền
      state.total += action.payload.values * state.menu[action.payload.propsBurgers];
      return { ...state};
    }

    default:
      return { ...state };
  }
};
