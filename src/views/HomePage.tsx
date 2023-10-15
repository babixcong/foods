import React from "react";
import useFoodHook from "../hooks/useFoodHook";

const HomePage = () => {
  const {
    getFood,
    getFoodFromUrl,
  } = useFoodHook();

  return (
      <React.Fragment>
        <div className={'row mt-5'} style={{'fontSize': '30px'}}>
          <div
              className={'col-xl-12 col-lg-12 text-uppercase'}>
            Đỡ phải nghĩ xem hôm nay ăn gì!!!
          </div>
          <div>
            <button onClick={() => getFoodFromUrl()}>Laays do an</button>
          </div>
        </div>
      </React.Fragment>
  );
};

export default HomePage;
