import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <section className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src="/images/404.png" alt="error" />

              <h3>Page Not Found</h3>
              <p>
                The page you are trying to access does not exist. Try going back to our homepage.
              </p>

              <Link href="/">
                <a className="default-btn-one">Go to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;