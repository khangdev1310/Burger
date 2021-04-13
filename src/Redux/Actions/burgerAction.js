import React from "react";
import {ADD_BURGER} from "../Constants/burgerConstant";

export const addBurger = (propsBurgers, values) => {
  return {
    type: ADD_BURGER,
    payload: {
      propsBurgers,
      values,
    },
  };
};
