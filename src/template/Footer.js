import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
       <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Liên hệ với chúng tôi</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"/>ĐỒ GỖ ĐẠI ĐỒNG TÂM
                </h6>
                <p>Cửa hàng đồ gỗ nội thất cao cấp Đại Đồng Tâm - Đồ gỗ mỹ nghệ La Xuyên chất lượng cao, tinh xảo, chính nghệ nhân sản xuất.</p>
                <p>Địa chỉ: Khu CN II - Quyết Phong - Yên Ninh - Ý Yên - Nam Định</p>
                <p>Điện thoại liên hệ, hỗ trợ, tư vấn: 0982385996</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                <Link className="text-reset  text-uppercase" to="/introduce">
                  Giới thiệu
                </Link>
              </p>
              <p>
                <Link className="text-reset text-uppercase" to="/service">
                  Dịch vụ
                </Link>
              </p>
              <p>
                <Link className="text-reset text-uppercase" to="/contact">
                  Liên hệ
                </Link>
              </p>
              <p>
                <Link className="text-reset text-uppercase" to="/certificate">
                  Hình ảnh
                </Link>
              </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" />Yên Ninh Ý Yên Nam Định</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  daidongtamcompany@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" />0982385996</p>
              </div>
            </div>
          </div>
        </section>

      </footer>
  );
}

export default Footer;
