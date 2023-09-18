import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaFilter } from "react-icons/fa";
import { FormControl, Nav, Dropdown, Button, Badge } from "react-bootstrap";
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import "../../styles/product.css";
import Filters from "../../context/Filter";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary flex-wrap sticky-top">
        <div className="container">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand text-success mx-auto">
            🛒 Origanic Basket
          </Link>
          <div
            className="collapse navbar-collapse mx-2 "
            id="navbarTogglerDemo01"
          >
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle mt-1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu dropdown-menu-dark mr-auto container w-auto">
                <li>
                  <a className="dropdown-item " href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/all_products">
                    All Products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/fresh_fruits">
                    Fresh Fruits
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/fresh_veggies">
                    Fresh Vegetables
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/grains">
                    Grains
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/oils">
                    Cooking Oils
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/snack">
                    Snack Store
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/product/kitchen">
                    Kitchen
                  </a>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <FormControl
                style={{ width: 400, height: 40, marginRight: 10 }}
                placeholder="Search your products"
                className="justify-content-center mt-2"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
              <Dropdown alignRight className="mt-2 me-2">
                <Dropdown.Toggle variant="success">
                  <FaFilter color="white" fontSize="25px" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Filters />
                </Dropdown.Menu>
              </Dropdown>

              <Nav>
                <Dropdown alignRight className="mt-2">
                  <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: 370 }}>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((item) => (
                          <span className="cartitem" key={item.id}>
                            <img
                              src={item.img}
                              className="cartItemImg"
                              alt={item.title}
                            />
                            <div className="cartItemDetail">
                              <span>{item.title}</span>
                              <span>₹ {item.price}</span>
                            </div>
                            <AiFillDelete
                              fontSize="20px"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item,
                                })
                              }
                            />
                          </span>
                        ))}
                        <Link to="/product/cart">
                          <Button style={{ width: "95%", margin: "0 10px" }}>
                            Go To Cart
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <span style={{ padding: 10 }}>Cart is Empty!</span>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
