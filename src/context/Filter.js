import { Button,Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";


const Filters = () => {
  const {
    productState: { byRating,sort},
    productDispatch,
  } = CartState();
  



  // make state for rating

  return (
    <div className="filters">
       <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <span>
      <label style={{ paddingRight: 40}}>Price Range :  </label>
        <Form.Check
          inline
          label="₹0 - ₹49"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "price1",
            })
          }
          checked={sort==="price1"?true:false}
        />
        <Form.Check
          inline
          label="₹50 - ₹99"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "price2",
            })
          }
          checked={sort==="price2"?true:false}
        />
        <Form.Check
          inline
          label="₹100 - ₹149"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "price3",
            })
          }
          checked={sort==="price3"?true:false}
        />
        <Form.Check
          inline
          label="₹150 - ₹199"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "price4",
            })
          }
          checked={sort==="price4"?true:false}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;