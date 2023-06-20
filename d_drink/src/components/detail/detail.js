import './detail.css';

export function Detail() {
  return (
    <>
      <div className="container">
        <div className="single_product">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#fff", padding: '11px' }}
          >
            <div className="row">
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="image_selected">
                  <img
                    src="https://thucphamsachgiatot.vn/image/cache/catalog/XBIA-HEINEKEN-700x700.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-lg-7 order-3">
                <div className="product_description">
                  {/* <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Trang chủ</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Sản phẩm</a>
                      </li>
                    </ol>
                  </nav> */}
                  <div className="product_name">
                    Bia Heineken Sleek Thùng 24 Lon 330Ml
                  </div>
                  <div>
                    {" "}
                    <span className="product_price">445,000 vnd</span>
                  </div>
                  <div>
                    {" "}
                    <span className="product_saved">Giá sau thuế:</span>{" "}
                    <span style={{ color: "black" }}>
                      445,000 vnd<span></span>
                    </span>
                  </div>
                  <hr className="singleline my-3" />
                  <div>
                    <span className="product_info">
                      Tên sản phẩm: Bia Heineken Sleek Thùng 24 Lon 330Ml
                      <span>
                        <br />
                        <span className="product_info">
                          Khối lượng tịnh / Thể tích thực / Kích thước: 24
                          Lon*330Ml
                          <span>
                            <br />{" "}
                            <span className="product_info">
                              Sản xuất: Việt Nam
                              <span>
                                <br />
                                <span className="product_info">
                                  Thành phần: Nước, đại mạch, hoa bia và ngũ cốc
                                  <span>
                                    <br />
                                    <span className="product_info">
                                      Độ Cồn: 5%
                                      <span>
                                        <br />
                                        <span className="product_info">
                                          Hướng dẫn sử dụng: Dùng trực tiếp,
                                          ngon hơn khi ướp lạnh.
                                          <span>
                                            <br />
                                            <span className="product_info">
                                              Hướng dẫn bảo quản: Nơi khô ráo,
                                              thoáng mát, tránh ánh nắng trực
                                              tiếp.
                                              <span>
                                                <br />
                                                <span className="product_info">
                                                  Lưu ý: Không dùng cho phụ nữ
                                                  mang thai, người dưới 18 tuổi.
                                                  <span></span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <hr className="singleline mb-4" />
                  <div className="order_info d-flex flex-row">
                    <form action="#"></form>
                  </div>
                  <div className="row">
                    <label
                      className="fw-bold col-2 d-flex justify-content-center"
                      style={{ padding: "6px 0px" }}
                      htmlFor=""
                    >
                      Số lượng:
                    </label>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i className="fa fa-minus" />
                      </button>
                      <input
                        id=""
                        min={0}
                        name="quantity"
                        defaultValue={1}
                        type="number"
                        className="form-control form-control-sm"
                        style={{ width: '50px' }}
                      />
                      <button
                        className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                    <div className="col-xs-6 mt-4">
                      <button
                        type="button"
                        className="btn btn-primary shop-button"
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
