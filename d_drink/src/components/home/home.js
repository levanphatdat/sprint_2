import "./home.css";

export function Home() {
  return (
    <>
      <>
        <div className="row">
          <div
            id="hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active c-item img-fluid">
                <img
                  src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/354224437_651222727048489_7885201093792869275_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=huqcrPe7UJoAX8-pmmc&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBl-WMLIJETabXipkSN4z3wI5h5oMeWhcMhgMJJcnW8Ag&oe=64950038"
                  className="d-block w-100 c-img"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item c-item img-fluid">
                <img
                  src="https://cdnmedia.baotintuc.vn/Upload/cVJiASFv9S8nriO7eNwA/files/2022/07/25-7/cao.jpg"
                  className="d-block w-100 c-img"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item c-item img-fluid">
                <img
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/52977663_1526063750860885_6167249226586652672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=27itckuEKm0AX913Ooe&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBTHyO_8ywZIz17Fipy2yhY4USAAmzc0IJoEl0kqetlug&oe=64B73BF7"
                  className="d-block w-100 c-img"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{ padding: 30 }}
                >
                  <h1 className="fa fa-check text-warning m-0 mr-3 me-3" />
                  <h5 className="font-weight-semi-bold m-0">
                    Bia hãng nhập khẩu
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{ padding: 30 }}
                >
                  <h1 className="fa fa-shipping-fast text-warning m-0 mr-2 me-3" />
                  <h5 className="font-weight-semi-bold m-0">
                    Giao hàng 2h - 4h*
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{ padding: 30 }}
                >
                  <h1 className="fas fa-exchange-alt text-warning m-0 mr-3 me-3" />
                  <h5 className="font-weight-semi-bold m-0">
                    Thanh toán trực tuyến
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{ padding: 30 }}
                >
                  <h1 className="fa fa-phone-volume text-warning m-0 mr-3 me-3" />
                  <h5 className="font-weight-semi-bold m-0">Hỗ trợ 24/7</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" style={{ margin: 0, padding: 0 }}>
            <main>
              <div className="text">
                <h1>HÈ ĐẾN RỒI - ƯU ĐÃI NHÂN ĐÔI</h1>
                <p>
                  Hè đến rồi - Hãy đến DDrink Bia là một thức uống giải khát
                  đích thực có thể được thưởng thức bất cứ lúc nào trong năm. Dù
                  bạn đang muốn thư giãn sau một ngày dài làm việc hay muốn nâng
                  ly chúc mừng những người thân yêu của mình, thì một ly bia có
                  thể thực sự khiến một ngày của bạn trở nên vui vẻ hơn bao giờ
                  hết. Bây giờ bạn đang tự hỏi ở Việt Nam thì đi đâu để mua
                  những loại bia nổi tiếng nhất? Không tìm đâu xa, hãy đến
                  DDrink. Bạn sẽ tìm được các thương hiệu bia tốt nhất ở đây.
                  Danh mục sản phẩm đa dạng của chúng tôi đáp ứng được mọi khẩu
                  vị và nhu cầu sử dụng như chai, lon, lốc, két hay thùng. Dù
                  bạn đang tìm về một hương vị cổ điển hay tìm kiếm một hương vị
                  độc đáo, chúng tôi vẫn luôn có sẵn thứ bạn cần. Trước khi tập
                  trung vào tất cả các thương hiệu bia tuyệt vời có sẵn trên
                  DDrink, ngoài ra DDrink còn có nhiều loại nước giải khát khác,
                  chúng ta hãy dành một chút thời gian để tìm hiểu thêm về bia
                  nói chung nhé!
                </p>
                <hr />
              </div>
              <header>
                <h1>Sản phẩm</h1>
              </header>
              <section className="row">
                <div className="product col-3">
                  <picture>
                    <img
                      src="https://sandouong24h.vn/wp-content/uploads/2021/03/Budweiser-loai-bia-tu-lua-mach-hao-hang-nam-trong-top-bia-dat-nhat-viet-nam.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>Bia Budweiser thùng 12 lon</b>
                      <br />
                    </p>
                  </div>
                  <div className="button">
                    <div className="col-9">
                      <samp>390.000 vnd</samp>
                    </div>
                    <div className="col-3">
                      <a href="#" className="bg-warning">
                        Thêm
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product col-3">
                  <picture>
                    <img
                      src="https://thucphamsachgiatot.vn/image/cache/catalog/XBIA-HEINEKEN-700x700.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>Bia Heineken Sleek Thùng 24 Lon 330Ml</b>
                      <br />
                    </p>
                  </div>
                  <div className="button">
                    <div className="col-9">
                      <samp>445.000 vnd</samp>
                    </div>
                    <div className="col-3">
                      <a href="#" className="bg-warning">
                        Thêm
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product col-3">
                  <picture>
                    <img
                      src="https://salt.tikicdn.com/cache/750x750/ts/product/6f/42/cf/beb26580dea4bc2f295b96a6fa38c00e.jpg.webp"
                      alt=""
                    />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>Thùng 24 Lon Bia Beck's Ice (330ml / Lon)</b>
                      <br />
                    </p>
                  </div>
                  <div className="button">
                    <div className="col-9">
                      <samp>280.000 vnd</samp>
                    </div>
                    <div className="col-3">
                      <a href="#" className="bg-warning">
                        Thêm
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product col-3">
                  <picture>
                    <img
                      src="https://salt.tikicdn.com/cache/w1200/ts/product/6c/81/6f/0c95e4db25d2e119b132bfdaa6170246.png"
                      alt=""
                    />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>Bia tiger thùng 24 lon 330ml</b>
                      <br />
                    </p>
                  </div>
                  <div className="button">
                    <div className="col-9">
                      <samp>385.000 vnd</samp>
                    </div>
                    <div className="col-3">
                      <a href="#" className="bg-warning">
                        Thêm
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product col-3">
                  <picture>
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/2282/113154/bhx/thung-24-lon-bia-huda-330ml-202003251322439337.jpg"
                      alt=""  
                    />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>Thùng 24 lon bia Huda 330ml</b>
                      <br />
                    </p>
                  </div>
                  <div className="button">
                    <div className="col-9">
                      <samp>290.000 vnd</samp>
                    </div>
                    <div className="col-3">
                      <a href="#" className="bg-warning">
                        Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </>
    </>
  );
}
