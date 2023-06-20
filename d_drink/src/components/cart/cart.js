import "./cart.css";

export function Cart() {
  return (
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Giỏ hàng</h1>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://thucphamsachgiatot.vn/image/cache/catalog/XBIA-HEINEKEN-700x700.jpg"
                              className="img-fluid rounded-3"
                              alt="heniken"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-black mb-0">
                              Bia Heineken Sleek Thùng 24 Lon 330Ml
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fa fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">445,000</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i
                                className="fa fa-times"
                                style={{ color: "red" }}
                              />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://thucphamsachgiatot.vn/image/cache/catalog/XBIA-HEINEKEN-700x700.jpg"
                              className="img-fluid rounded-3"
                              alt="heniken"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-black mb-0">
                              Bia Heineken Sleek Thùng 24 Lon 330Ml
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fa fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">445,000</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i
                                className="fa fa-times"
                                style={{ color: "red" }}
                              />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://thucphamsachgiatot.vn/image/cache/catalog/XBIA-HEINEKEN-700x700.jpg"
                              className="img-fluid rounded-3"
                              alt="heniken"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-black mb-0">
                              Bia Heineken Sleek Thùng 24 Lon 330Ml
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fa fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">445,000</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i
                                className="fa fa-times"
                                style={{ color: "red" }}
                              />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a
                              href="#!"
                              className="text-body btn btn-outline-secondary fw-bold"
                            >
                              Trở lại cửa hàng
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Thanh toán</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">Giá</h5>
                          <h5>1.365.000</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">Phí vận chuyển</h5>
                          <h5>136.500</h5>
                        </div>
                        {/* <h5 class="text-uppercase mb-3">Phí vận chuyển</h5> */}
                        {/* 
                                  <div class="mb-4 pb-2">
                                      <select class="select">
                                          <option value="1">Standard-Delivery- €5.00</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                          <option value="4">Four</option>
                                      </select>
                                  </div> */}
                        {/* <h5 class="text-uppercase mb-3">Give code</h5>

                                  <div class="mb-5">
                                      <div class="form-outline">
                                          <input type="text" id="form3Examplea2"
                                              class="form-control form-control-lg" />
                                          <label class="form-label" for="form3Examplea2">Enter your code</label>
                                      </div>
                                  </div> */}
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Tổng tiền</h5>
                          <h5>1.501.500</h5>
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Thanh toán
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
