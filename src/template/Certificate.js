import React from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import company1 from "../images/company/company1.jpg"
import company2 from "../images/company/company2.jpg"
import company3 from "../images/company/company3.jpg"
import company4 from "../images/company/company4.jpg"
import company5 from "../images/company/company5.jpg"
import company6 from "../images/company/company6.jpg"
import company7 from "../images/company/company7.jpg"
import company8 from "../images/company/company8.jpg"
import company9 from "../images/company/company9.jpg"

function Certificate(props) {
    return (
      <div className="container mt-5 py-5 px-xl-5">
        <ScrollToTopOnMount />
        <div className="border-bottom mb-5">
          <h4>Hình ảnh xưởng gỗ doanh nghiệp</h4>
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company1}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company2}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company3}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company5}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company6}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company7}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company8}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company9}
          />
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={company4}
          />
        </div>
      </div>
    );
}

export default Certificate;