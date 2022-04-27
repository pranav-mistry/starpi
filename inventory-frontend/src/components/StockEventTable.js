import React, { useState } from "react";
import { useEffect } from "react";
const StockEventTable = (props) => {
  const { product, stockEvent } = props;
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("StockEventTable: useEffect");
  }, []);

  return (
    <div className="StockEventTable">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Product</th>
            <th scope="col">Total Quantity</th>
          </tr>
        </thead>
      {product.map((product, indexs) => {
        const stockEventList = stockEvent.filter(
          (stockEvent) => stockEvent.product.id === product.id
        );
        const stockTotal = stockEventList.reduce((acc, curr) => {
          return acc + curr.qty;
        }, []);

        return (
          <tbody>
            {stockEventList.map((event, index) => (
              <tr key={index}>
                <td>{event.id}</td>
                <td>{event.type}</td>
                <td>{event.qty}</td>
                <td>{event.product.name}</td>
                <td>{stockTotal}</td>
              </tr>
            ))}
          </tbody>
        );
      })}
      </table>
    </div>
  );
};

export default StockEventTable;
