import React from "react";

function GetTouch() {
  return (
    <div className="gettouch-section h-100">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="gt-text">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <p className="p_">333 Middle Winchendon Rd, Rindge, NH 03461</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gt-text gt-t">
              <div className="icon">
                <i className="fa fa-mobile"></i>
              </div>
              <ul className="lis mb-4">
                <li className="items">125-711-811</li>
                <li className="items">125-668-886</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gt-text email gt-t">
              <div className="icon">
                <i className="fa-solid fa-envelope f-env"></i>
              </div>
              <p className="p_">Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTouch;
