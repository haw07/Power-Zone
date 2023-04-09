import React from "react";

function GetTouch() {
  return (
    <div class="gettouch-section h-100" style={{ minWidth: "100px" }}>
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-4">
            <div class="gt-text">
              <div class="icon">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <p class="p_">333 Middle Winchendon Rd, Rindge, NH 03461</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gt-text gt-t">
              <div class="icon">
                <i class="fa fa-mobile"></i>
              </div>
              <ul class="lis mb-4">
                <li class="items">125-711-811</li>
                <li class="items">125-668-886</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gt-text email gt-t">
              <div class="icon">
                <i class="fa-solid fa-envelope f-env"></i>
              </div>
              <p class="p_">Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTouch;
