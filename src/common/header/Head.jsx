import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <label htmlFor="">
              <Link to="/account"> Account</Link>
            </label>
            <label htmlFor="">
              <Link to="/trackorder"> Track Order</Link>
            </label>
            <label htmlFor="">
              <Link to="/support"> Support</Link>
            </label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
