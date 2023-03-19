import Banner from "./Banner";
import Room from "./Room";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { phongkhachCollection, phonganCollection, phongthoCollection, phongnguCollection } from "../constants";

function Landing() {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div>
        <div className="container d-flex flex-column py-4">
          <div style={{ backgroundColor: "#D3D3D3", marginBottom: "10px" }} id="phongkhach">
            <Room
              title={"Nội thất phòng khách"}
              products={phongkhachCollection}
              type="phongkhach"
            />
          </div>

          <div style={{ backgroundColor: "#D3D3D3", marginBottom: "10px" }}>
            <Room
              title={"Nội thất phòng ăn"}
              products={phonganCollection}
              type="phongan"
            />
          </div>

          <div style={{ backgroundColor: "#D3D3D3", marginBottom: "10px" }}>
            <Room
              title={"Nội thất phòng ngủ"}
              products={phongnguCollection}
              type="phongngu"
            />
          </div>

          <div style={{ backgroundColor: "#D3D3D3", marginBottom: "10px" }}>
            <Room
              title={"Nội thất phòng thờ"}
              products={phongthoCollection}
              type="phongtho"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
