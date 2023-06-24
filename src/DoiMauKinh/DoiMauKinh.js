import React, { Component } from "react";
import { dataKinhArr } from "./dataKinh";

import "./../CSS/style.css";

export default class DoiMauKinh extends Component {
  state = {
    glasses: dataKinhArr,
    detail: {},
  };

  handleClickKinh = (url, name, desc) => {
    this.setState({
      detail: {
        url: url,
        name: name,
        desc: desc,
      },
    });
  };

  renderListKinh = () => {
    return dataKinhArr.map(({ price, name, url, desc }, id) => {
      return (
        <div key={id} className="col ">
          <div className="ps-2">
            <img 
              onClick={() => {
                this.handleClickKinh(url, name, desc);
              }}
              src={url}
              alt="Ảnh Kính "
            />
          </div>
        </div>
      );
    });
  };
  // renderListKinh = () => {
  //   return dataKinhArr.map(({ price, name, url, desc }, id) => {
  //     return (
  //       <div key={id} className="col">
  //         <div className="p-3">
  //           <img
  //             onClick={() => {
  //               this.handleChangeColor(url);
  //             }}
  //             src={url}
  //             alt=""
  //           />
  //           <h6 className="text-center">{name}</h6>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  render() {
    const { url, name, desc , price } = this.state.detail;
    return (
      
      <div className="container">
        <h1 className="text-center" >TRY GLASSES APP ONLINE</h1>
        <div className="background">
          <div className="left_model">
            <img className="model" src="./img/model.jpg" alt="" />
            <div className="showKinh">
            <img src={url} alt="" />
            </div>

            <div className="background_model">
            <h3 className="">{price}</h3>
            <h3 className="">{name}</h3>
            <p className="">{desc}</p>
            </div>
          </div>

          <div className="right_showKinh">
            <div className="content">
              <div className="row">
                {this.renderListKinh()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
