import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
// import Item from "../Components/Item/Item";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  //importing data from context file
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={`Banner for ${props.category}`}
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name} // Added name prop
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
        {/* {all_product.map((item, i) => {
          console.log(
            "Category:",
            item.category,
            "Props Category:",
            props.category
          );

          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name} // Added name prop
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })} */}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
