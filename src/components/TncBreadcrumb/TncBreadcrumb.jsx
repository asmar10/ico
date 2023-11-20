import React from "react";
import { Link } from "react-router-dom";

const TncBreadcrumb = (props) => {
  return (
    <section className="breadcrumb-area choose-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb-content">
              <h2 className="title">{props.title}</h2>
              <nav aria-label="Breadcrumbs">
                <ul className="breadcrumb">
                  {/* <li className="breadcrumb-item">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li> */}
                  {/* <li className="breadcrumb-item">
                    <span>{props.item}</span>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TncBreadcrumb;
