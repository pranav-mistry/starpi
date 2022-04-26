import React from "react";

const StockEventTable = (props) => {
  const { product, stockEvent } = props;
  return (
    <div className="StockEventTable">
      {product.map((product) => (
        conest { id } = product;
      )}
      {stockEvent.map((event) => (
        <div className="StockEventTable_card">
          <p>
            <b>Id</b> : {event.id}
          </p>
          <p>
            <b>Type</b> : {event.type},{" "}
          </p>
          <p>
            <b>Quantity</b> : {event.qty}{" "}
          </p>
          <p>
            <b>Name</b> : {event.product.name}
          </p>
          <p>
            <b>Price</b> :{event.product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StockEventTable;