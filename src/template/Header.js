import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo1 from "../images/products/phongtho/logo1.PNG" 

function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <img style={{ height: "30px" }} alt="" src={logo1} className="mb-2 rounded-circle"/>
            <span className="ms-2 h3 text-uppercase">
              Đồ Gỗ Đại Đồng Tâm - 0982385996
            </span>
          </Link>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link  text-uppercase" to="/">
                    Trang chủ <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link  text-uppercase" to="/introduce">
                    Giới thiệu <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-uppercase" to="/service">
                    Dịch vụ
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-uppercase" to="/contact">
                    Liên hệ
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-uppercase" to="/certificate">
                    Hình ảnh
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
