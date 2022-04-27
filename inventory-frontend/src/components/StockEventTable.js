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
      {product.map((product, indexs) => {
        const stockEventList = stockEvent.filter(
          (stockEvent) => stockEvent.product.id === product.id
        );

        const stockTotal = stockEventList.reduce((acc, curr) => {
          return acc + curr.qty;
        }, 0);

        return (
          <div key={indexs} className="StockEventTable_Product">
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
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default StockEventTable;
