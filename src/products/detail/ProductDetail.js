import { Link, useParams } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import {getProduct} from "../../constants"

function ProductDetail() {
  const {productId, type} = useParams()
  const product = getProduct(productId, type)
  console.log(productId, type)
  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/">
              Tất cả sảm phẩm của chúng tôi
            </Link>
          </li>
          <li className="breadcrumb-item">
            <a className="text-decoration-none link-secondary" href="!#">
              {type}
            </a>
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
               <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={product[0].src}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1 text-uppercase">{product[0].title}</h2>
            <h4 className="text-muted mb-4">Giá: {product[0].price}</h4>
            <h4 className="mb-0">Mô tả</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
                {product[0].description}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
