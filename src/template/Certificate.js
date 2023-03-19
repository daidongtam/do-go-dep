import React from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import giaychungnhan from "../images/products/phongtho/giaychungnhan.PNG" ;
import giaychungnhan1 from "../images/products/phongtho/giaychungnhan1.PNG" 
function Certificate(props) {
    return (
      <div className="container mt-5 py-5 px-xl-5">
        <ScrollToTopOnMount />
        <div className="border-bottom mb-5">
          <h4>
            Giấy chứng nhận đăng ký kinh doanh công ty cổ phần của chúng tôi
          </h4>
          <img
            className="border rounded ratio ratio-1x1 mt-5 py-5"
            alt=""
            src={giaychungnhan}
          />

          <img
            className="border rounded ratio ratio-1x1 mt-5 py-5"
            alt=""
            src={giaychungnhan1}
          />
        </div>
      </div>
    );
}

export default Certificate;