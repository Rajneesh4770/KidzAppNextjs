import React from "react";
import style from "../styles/KidzappTv.module.css";
const KidzappTv = () => {
  return (
    <>
      <section className={style.section1}>
        <div className="container-flex">
          <div className="row">
            <div className="col-lg-12">
              <div className={style.background}>
                <div className="container">
                  <div className="row pt-4">
                    <div className="col-lg-12">
                      <div className={`form-control ${style.searchbar}`}>
                        <div className="input-group">
                          <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                          />
                          <button type="button" class="btn btn-outline-primary">
                            search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.section2}>
<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <h2>
                
            </h2>

        </div>

    </div>

</div>
      </section>
    </>
  );
};

export default KidzappTv;
