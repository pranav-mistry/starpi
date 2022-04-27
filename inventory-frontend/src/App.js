import "./App.css";
import StockEventTable from "./components/StockEventTable";
const fetchProduct = [
  { id: 1, name: "Iphone X", price: 1000 },
  { id: 2, name: "Iphone XS", price: 2000 },
  { id: 3, name: "Iphone XR", price: 3000 },
  { id: 4, name: "Iphone XS Max", price: 4000 },
];

const fetchstockEvent = [
  { id: 1, type: "1", qty: 10, product: fetchProduct[0] },
  { id: 2, type: "2", qty: 14, product: fetchProduct[3] },
  { id: 3, type: "3", qty: 10, product: fetchProduct[1] },
  { id: 4, type: "4", qty: 17, product: fetchProduct[2] },
  { id: 5, type: "5", qty: 10, product: fetchProduct[0] },
];

const App = () => {
  return (
    <div className="App">
      <h1> Stocks </h1>
      <button className="btn btn-primary"> Sort </button>
      <StockEventTable
        title="new-alex"
        product={fetchProduct}
        stockEvent={fetchstockEvent}
      />
    </div>
  );
};

export default App;
