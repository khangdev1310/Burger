import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector,useDispatch } from "react-redux";
import "./Burger.css";
import {addBurger} from '../Redux/Actions/burgerAction'

export default function Burger() {
  const { burger, menu, total } = useSelector((state) => state.burgers);

  const dispatch = useDispatch();
  const handleBurger = () => {
    //Duyệt Object
    // Cách cũ
    // const content = [];
    // for(let burgers in burger){
    //     let breadMid = [];
    //     for (let i = 0; i < burger[burgers]; i++) {
    //       breadMid.push(<div key={i} className={burgers}></div>)
    //     }
    //     content.push(breadMid);
    //   // console.log(burgers,burger[burgers]);
    // }
    // return content;

    // []: bóc tách phần tử mảng
    return Object.entries(burger).map(([propsBurgers, values], index) => {
      const breadMid = [];
      for (let i = 0; i < values; i++) {
        breadMid.push(<div key={i} className={propsBurgers}></div>);
      }
      return breadMid;
    });
  };

  const handleMenu = () => {
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button onClick={() => {dispatch(addBurger(propsMenu,1))}}  className="btn btn-success mr-3">+</button>
            {burger[propsMenu]}
            <button onClick={() => {dispatch(addBurger(propsMenu,-1))}} className="btn btn-warning ml-3">-</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="display-4 text-success">Bài tập Burger</h3>
      <div className="row">
        <div className="col-7">
          <h3 className="text-center" style={{ color: "red" }}>
            Bánh hamburger của bạn
          </h3>
          <div className="breadTop"></div>
          {handleBurger()}

          <div className="breadBottom"></div>
        </div>
        <div className="col-5">
          <h3 className="text-center">Chọn thức ăn</h3>
          <table className="table">
            <thead>
              <tr>
                <td>Thức ăn</td>
                <td></td>
                <td>Giá</td>
                <td>Thành tiền</td>
              </tr>
              {handleMenu()}
            </thead>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>Tổng tiền</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
