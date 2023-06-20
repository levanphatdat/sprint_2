import "./header.css";

export function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <nav
              className="navbar navbar-expand-lg navbar-light bg-dark"
              id="header-nav"
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    style={{ width: "80px", height: "60px" }}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Sản phẩm
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Chi tiết
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Liên hệ
                      </a>
                    </li>
                    <li className="nav-item " style={{ paddingLeft: "750px" }}>
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Đăng ký
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        aria-current="page"
                        href="#"
                      >
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
