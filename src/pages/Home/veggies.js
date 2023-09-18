import React from "react";
import "../../styles/product.css";
import { CartState } from "../../context/Context";
import { Button } from "react-bootstrap";
import Rating from "../../context/Rating";

const veggies = () => {
  const {
    state: { cart, products },
    productState: { byRating, searchQuery, sort },
    dispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort === "price1") {
      sortedProducts = sortedProducts.filter((prod) => prod.price <= 49);
    }
    if (sort === "price2") {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.price >= 50 && prod.price <= 99
      );
    }
    if (sort === "price3") {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.price >= 100 && prod.price <= 149
      );
    }
    if (sort === "price4") {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.price >= 150 && prod.price <= 199
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.Ratings === byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="container">
      <h1 className="text-secondary mt-4">Fresh Vegetables</h1>
      <div className="row row-cols-1 row-cols-md-4 g-3 gy-1 my-2  d-flex justify-content-center  ">
        {transformProducts()
          .slice(0, 10)
          .map((item) => {
            if (item.category === "Veggies") {
              return (
                <div className="col " style={{ width: 250, height: 400 }}>
                  <div className="card h-100">
                    <img
                      src={item.img}
                      class="card-img-top"
                      alt="Skyscrapers"
                      style={{ width: 200, height: 130 }}
                    />
                    <div className="card-body">
                      <h5 className="card-text text-secondary">Fresho</h5>
                      <h3 className="card-title text-secondary-emphasis">
                        {item.title}
                        <button
                          type="button"
                          className="btn btn-success "
                          style={{ float: "right", height: 40 }}
                        >
                          {item.offer}
                        </button>
                      </h3>
                      <h4>{<Rating rating={item.Ratings} />}</h4>
                      <button
                        type="button"
                        className="btn btn-outline-secondary mt-2 pt-0"
                        style={{ width: 200, height: 30 }}
                      >
                        {item.quatity}
                      </button>
                      <p class="card-text text-secondary">
                        <h3>₹ {item.price} </h3>
                      </p>
                      {cart.some((p) => p.id === item.id) ? (
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                          }}
                          variant="danger"
                          style={{ width: 200 }}
                        >
                          Remove From Cart
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                          }}
                          variant="success"
                          style={{ width: 200 }}
                        >
                          Add To Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default veggies;
