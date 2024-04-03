import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">

        <div className="col">

            <div className="row">
                <img src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button className="transition-all duration-200 ease-in-out" >
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>

            <div className="row">
                <img src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <Link className="link" to="/products/2">
                    <button  className="transition-all duration-200 ease-in-out">
                    Women
                </button>
                </Link>
            </div>

        </div>

        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button className="transition-all duration-200 ease-in-out">
                    <Link className="link" to="/products/3">New Season</Link>
                </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">

                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <button className="transition-all duration-200 ease-in-out">
                            <Link className="link" to="/products/4">Men</Link>
                        </button>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/13234856/pexels-photo-13234856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <button className="transition-all duration-200 ease-in-out">
                            <Link className="link" to="/products/5">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <img src="https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button className="transition-all duration-200 ease-in-out">
                            <Link className="link" to="/products/6">Shoes</Link>
                    </button>
                
            </div>
        </div>

    </div>
  );
};

export default Categories;
