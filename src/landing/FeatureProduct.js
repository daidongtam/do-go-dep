import { Link } from "react-router-dom";

function FeatureProduct({src, title, price, id, type}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={src}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase">{title}</h5>
          <p className="card-text text-center text-muted">Giá: {price}</p>
          <div className="d-grid gap-2">
            <Link to={`/products/${id}/${type}`} className="btn btn-outline-dark" replace>
              Chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
